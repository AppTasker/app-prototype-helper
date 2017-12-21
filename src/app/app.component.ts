import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

//import {PropertyListPage} from '../pages/property-list/property-list';
import {TaskListPage} from '../pages/task-list/task-list';

//import {BrokerListPage} from '../pages/broker-list/broker-list';
import {RequesterListPage} from '../pages/requester-list/requester-list';

import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Join us', component: WelcomePage, icon: 'md-contacts'},
            {title: 'Browse Tasks', component: TaskListPage, icon: 'ios-folder-open'},
            {title: 'Requester List', component: RequesterListPage, icon: 'md-images'},
            {title: 'Favorites', component: FavoriteListPage, icon: 'star'},
    
        ];

        this.helpMenuItems = [
            {title: 'Help', component: WelcomePage, icon: 'ios-help'},
            {title: 'Insurance', component: WelcomePage, icon: 'ios-information'},
            {title: 'Privacy Policy', component: WelcomePage, icon: 'ios-lock'},
            {title: 'Terms & Condition', component: WelcomePage, icon: 'ios-book-outline'},
            {title: 'Community Guidelines', component: WelcomePage, icon: 'ios-compass-outline'},
            {title: 'Contact us', component: WelcomePage, icon: 'ios-call'},
            {title: 'About us', component: AboutPage, icon: 'information-circle'},
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: WelcomePage, icon: 'ios-contact-outline'},
            {title: 'Logout', component: WelcomePage, icon: 'log-out'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
    
    openHome() {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(WelcomePage);
    }
}
