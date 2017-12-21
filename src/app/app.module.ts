import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';

//import {PropertyListPage} from '../pages/property-list/property-list';
//import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {TaskListPage} from '../pages/task-list/task-list';
import {TaskDetailPage} from '../pages/task-detail/task-detail';

//import {BrokerListPage} from '../pages/broker-list/broker-list';
//import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {RequesterListPage} from '../pages/requester-list/requester-list';
import {RequesterDetailPage} from '../pages/requester-detail/requester-detail';

import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';

//import {PropertyService} from "../providers/property-service-mock";
import {TaskService} from "../providers/task-service-mock";

import {RequesterService} from "../providers/requester-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,

    //PropertyListPage,
    //PropertyDetailPage,
    TaskListPage,
    TaskDetailPage,

    FavoriteListPage,
    //BrokerListPage,
    //BrokerDetailPage    
    RequesterListPage,
    RequesterDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    
    //PropertyListPage,
    //PropertyDetailPage,
    TaskListPage,
    TaskDetailPage,

    FavoriteListPage,
    //BrokerListPage,
    //BrokerDetailPage    
    RequesterListPage,
    RequesterDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    //Talk with DB in Production, use Local Mock for Development
    //PropertyService,
    TaskService,

    //BrokerService,
    RequesterService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
