import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { Project } from '../types/project';
import { IAppState } from '../app.module';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

  @select() readonly projects$: Observable<Map<string, Project>>;
  document: Observable<string>;

  id: string;
  projectId: string; 
  private sub: any;

  constructor(
      private route: ActivatedRoute
    , private ngRedux: NgRedux<IAppState>
    ) {      

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.projectId = params['projectId'];
      this.document = this.ngRedux.select((state) => {
        return state.projects.get(this.projectId).documents.filter(doc => doc == this.id)[0];
      });
    });
  }

  

}
