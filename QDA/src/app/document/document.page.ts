import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { Project, QDADocument, QDACode } from '../types/project';
import { IAppState } from '../app.module';

//import * from "src/annotator/";

declare let $: any;

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

  @select() readonly projects$: Observable<Map<string, Project>>;
  document$: Observable<QDADocument>;

  documentName: string;
  projectName: string;
  private sub: any;

  codes$: Observable<Array<QDACode>>;
  codes: Array<QDACode>;

  documentText: string;

  constructor(
    private route: ActivatedRoute
    , private ngRedux: NgRedux<IAppState>
  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.documentName = params['id'];
      this.projectName = params['projectId'];
      
      $('#documentContent').annotator().annotator('addPlugin', 'MyTags');
      
      $('#documentContent').data('annotator')
      .subscribe("annotationCreated", (annotation) => {
        console.info("The annotation: %o has just been created!", annotation);
      })
      .subscribe("annotationUpdated", (annotation) => {
        console.info("The annotation: %o has just been updated!", annotation);
      })
      .subscribe("annotationDeleted", (annotation) => {
        console.info("The annotation: %o has just been deleted!", annotation);
      })

      $('#documentContent').data('annotator').plugins.MyTags.availableTags = this.codes;

      this.document$ = this.ngRedux.select((state) => {
        return state.projects.get(this.projectName).documents.filter(doc => doc.name === this.documentName)[0];
      });

      this.codes$ = this.ngRedux.select(state => {
        return [...state.projects.values()]
          .filter(x => x.name === this.projectName)[0].codes
      });

      this.document$.subscribe(doc => {
        console.log("Updating document text");
        this.documentText = doc.contents;
      });

      this.codes$.subscribe(codes => {
        this.codes = codes;
        console.log($('#documentContent').data('annotator'));
        $('#documentContent').data('annotator').plugins.MyTags.availableTags = this.codes;
      });

    });
  }
}
