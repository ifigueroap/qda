import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";

@Injectable()
export class Actions {

    @dispatch()
    addProject = (name: string) => ({
        type: "ADD_PROJECT",
        payload: name
    });
}
