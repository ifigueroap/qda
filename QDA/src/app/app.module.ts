import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { SidebarModule } from 'ng-sidebar';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
//import { rootReducer } from './reducers';
import { Statement } from '@angular/compiler';

function rootReducer(state, action) {
  return state;
}

export interface IAppState {
  projects: string[];
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
  ],
  providers: [
      StatusBar,
    , SplashScreen
    , { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , DevToolsExtension
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, { projects: ['A', 'B', 'C']}, [createLogger()]);
  }
}
