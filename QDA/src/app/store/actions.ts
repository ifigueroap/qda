import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { Project, QDACode } from '../types/project';

@Injectable()
export class Actions {

    @dispatch()
    addProject = (name: string) => ({
        type: "ADD_PROJECT",
        payload: name
    });

    @dispatch()
    addCodeToProject = (project: Project, code: QDACode) => ({
        type: "ADD_CODE",
        payload: [project, code]
    });

    @dispatch()
    addDocumentToProject = (project: Project, newFilename: string, newFileContents: string) => ({
        type: "ADD_DOCUMENT",
        payload: [project, newFilename, newFileContents]
    });
}
