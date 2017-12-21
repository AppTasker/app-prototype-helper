import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TaskService} from '../../providers/task-service-mock';
import {TaskDetailPage} from '../task-detail/task-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: TaskService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(TaskDetailPage, favorite.task);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
