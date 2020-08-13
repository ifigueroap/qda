import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { Project, Code } from '../types/project';

@Injectable()
export class Actions {

    @dispatch()
    addProject = (name: string) => ({
        type: "ADD_PROJECT",
        payload: name
    });

    @dispatch()
    addCodeToProject = (project: Project, code: Code) => ({
        type: "ADD_CODE",
        payload: [project, code]
    });
}
