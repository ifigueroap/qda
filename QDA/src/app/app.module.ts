import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { SidebarModule } from 'ng-sidebar';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer } from './store/reducers/';
import { Actions } from './store/actions';
import { Project } from './types/project';

export interface IAppState {
  projects: Map<string, Project>;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , NgxElectronModule
    , SidebarModule.forRoot()
    , NgReduxModule
    , FormsModule    
  ],
  providers: [
    StatusBar,
    , SplashScreen
    , { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , DevToolsExtension
    , Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {

    const initialState = {
      projects: new Map<string, Project>([["Demo Project", new Project("Demo Project")]])
    };
    
    ngRedux.configureStore(rootReducer, initialState, [createLogger()]);
  }
}
