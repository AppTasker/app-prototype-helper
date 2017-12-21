import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RequesterService} from '../../providers/requester-service-mock';

@Component({
    selector: 'page-requester-detail',
    templateUrl: 'requester-detail.html'
})
export class RequesterDetailPage {

    requester: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: RequesterService) {
        this.requester = this.navParams.data;
        service.findById(this.requester.id).then(
            requester => this.requester = requester
        );
    }

}
