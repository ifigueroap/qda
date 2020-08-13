import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgRedux, select, DevToolsExtension } from "@angular-redux/store";
import { Observable, Subject } from "rxjs";
import { IAppState } from './app.module';
import { Actions } from './store/actions';
import { Project, Code } from './types/project';
import { AddProjectPage } from './add-project/add-project.page';
import { AddCodePage } from './add-code/add-code.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // ?
})
export class AppComponent implements OnInit {

  @select(state=>state.projects) projects$: Observable<Map<string, Project>>;
  codes$: Observable<Array<Code>>;
  documents$: Observable<Array<Document>>;
  
  selectedProjectSubject: Subject<Project> = new Subject<Project>();
  selectedProject: Project;

  constructor(
    private platform: Platform
    , private splashScreen: SplashScreen
    , private statusBar: StatusBar
    , private ngRedux: NgRedux<IAppState>
    , private actions: Actions
    , private modalController: ModalController    
  ) {
    this.initializeApp();
    this.selectedProjectSubject.subscribe(x => {
      this.selectedProject = x;
      
      this.codes$ = this.ngRedux.select(state => {
        return [...state.projects.values()]
          .filter(x => x.name === this.selectedProject.name)[0].codes          
      });

      this.documents$ = this.ngRedux.select(state => {
        return [...state.projects.values()]
          .filter(x => x.name === this.selectedProject.name)[0].documents
      });
      
    });
  }

  ngOnInit() {
    //this.projects$ = this.ngRedux.select('projects');
    //this.codes$ = this.ngRedux.select(state => state.projects[this.selectedProject?.name]?.codes || [] );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async addProjectModal() {
    console.log("Opening Add Project Modal");
    const modal = await this.modalController.create({
      component: AddProjectPage,
      cssClass: 'qda-modal',
      backdropDismiss: false,
    });

    modal.onDidDismiss().then((data) => {
      console.log("DISMISS CALLBACK");
      console.log(data);

      const newProjectName = data.data['newProjectName'];
      console.log(newProjectName);
      this.addProject(newProjectName);
    });

    return await modal.present();
  }

  async addCodeModal() {
    console.log("Opening Add Code Modal");
    const modal = await this.modalController.create({
      component: AddCodePage,
      cssClass: 'qda-modal',
    });

    modal.onDidDismiss().then((data) => {
      console.log("ADDING NEW CODE");
      console.log(data);
      const newCodeName = data.data['newCodeName'];
      console.log(newCodeName);
      this.addCode(this.selectedProject, newCodeName);
    });

    return await modal.present();
  }

  addProject(name) {
    this.actions.addProject(name);
  }

  addCode(project, newCodeName) {    
    console.log("ADDING NEW CODE: " + newCodeName);
    this.actions.addCodeToProject(project, newCodeName);
    this.emitSelectedProject({ target: { value: this.selectedProject }});    
  }

  emitSelectedProject(evt) {    
    this.selectedProjectSubject.next(evt.target.value);
  }
}
