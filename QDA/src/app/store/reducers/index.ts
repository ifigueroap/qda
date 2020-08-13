import { IAppState } from '../../app.module';
import { Reducer, combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { Project, QDADocument } from 'src/app/types/project';
import { enableMapSet } from 'immer'

enableMapSet();

const PROJECTS_INITIAL_STATE = new Map<string, Project>();
export const projectsReducer: Reducer = createReducer(PROJECTS_INITIAL_STATE, {
    ADD_PROJECT: (state, action) => {
        state.set(action.payload, new Project(action.payload));
    },

    ADD_CODE: (state, action) => {
        let project = state.get(action.payload[0].name);
        state.set(action.payload[0].name, {...project, codes: [...project.codes, action.payload[1]]});
    },

    ADD_DOCUMENT: (state, action) => {
        let project = state.get(action.payload[0].name);
        state.set(action.payload[0].name
            , {...project, documents: [...project.documents, new QDADocument(action.payload[1], action.payload[2])]})
    }
});

export const rootReducer: Reducer<IAppState> = combineReducers({    
    projects: projectsReducer,
});