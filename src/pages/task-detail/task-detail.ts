import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {RequesterDetailPage} from '../requester-detail/requester-detail';
import {TaskService} from '../../providers/task-service-mock';

@Component({
    selector: 'page-task-detail',
    templateUrl: 'task-detail.html'
})
export class TaskDetailPage {

    task: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public taskService: TaskService, public toastCtrl: ToastController) {
        this.task = this.navParams.data;
        taskService.findById(this.task.id).then(
            task => this.task = task
        );
    }

    openRequesterDetail(requester) {
        this.navCtrl.push(RequesterDetailPage, requester);
    }

    favorite(task) {
        this.taskService.favorite(task)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Task added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(task) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
