import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgRedux, select, DevToolsExtension } from "@angular-redux/store";
import { Observable } from "rxjs";
import { IAppState } from './app.module';
import { Actions } from './store/actions';
import { Project } from './types/project';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // ?
})
export class AppComponent {

  @select() readonly projects$: Observable<Map<string, Project>>;
  docs = [ 1, 2, 3, 4, 5];
  data = {};

  constructor(
    private platform: Platform
    , private splashScreen: SplashScreen
    , private statusBar: StatusBar
    , private ngRedux: NgRedux<IAppState>
    , private actions: Actions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  addProject(name) {
    this.actions.addProject(name);
  }

  changeSelectedProject(evt) {
    console.log("CHANGE SELECTED PROJECT: ");
    console.log(evt);
  }
}
