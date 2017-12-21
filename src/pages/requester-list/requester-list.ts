import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RequesterService} from '../../providers/requester-service-mock';
import {RequesterDetailPage} from '../requester-detail/requester-detail';

@Component({
    selector: 'page-requester-list',
    templateUrl: 'requester-list.html'
})
export class RequesterListPage {

    requesters: Array<any>;

    constructor(public navCtrl: NavController, public service: RequesterService) {
        service.findAll().then(data => this.requesters = data);
    }

    openRequesterDetail(requester) {
        this.navCtrl.push(RequesterDetailPage, requester);
    }

}
