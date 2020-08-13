import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { Project, QDADocument } from '../types/project';
import { IAppState } from '../app.module';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

  @select() readonly projects$: Observable<Map<string, Project>>;
  document: Observable<QDADocument>;

  documentName: string;
  projectName: string; 
  private sub: any;

  constructor(
      private route: ActivatedRoute
    , private ngRedux: NgRedux<IAppState>
    ) {      

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.documentName = params['id'];
      this.projectName = params['projectId'];
      this.document = this.ngRedux.select((state) => {
        return state.projects.get(this.projectName).documents.filter(doc => doc.name === this.documentName)[0];
      });
    });
  }

  

}
