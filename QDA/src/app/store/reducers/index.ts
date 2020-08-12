import { IAppState } from '../../app.module';
import { Reducer, combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { Project } from 'src/app/types/project';
import { enableMapSet } from 'immer'

enableMapSet();

const INITIAL_STATE = new Map<string, Project>();

export const projectsReducer: Reducer = createReducer(INITIAL_STATE, {
    ADD_PROJECT: (state, action) => {
        state.set(action.payload, new Project(action.payload));
    }
});

export const rootReducer: Reducer<IAppState> = combineReducers({    
    projects: projectsReducer,
});