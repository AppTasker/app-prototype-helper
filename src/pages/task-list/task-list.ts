import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {TaskService} from '../../providers/task-service-mock';
import {TaskDetailPage} from '../task-detail/task-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-task-list',
    templateUrl: 'task-list.html'
})
export class TaskListPage {

    tasks: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: TaskService, public config: Config) {
        this.findAll();
    }

    openTaskDetail(task: any) {
        this.navCtrl.push(TaskDetailPage, task);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.tasks = data;
                if (this.viewMode === "map") {
                    this.showMarkers();
                }
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.tasks = data)
            .catch(error => alert(error));
    }

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([22.38333, 114.18333], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.tasks.forEach(task => {
            if (task.lat, task.long) {
                let marker: any = leaflet.marker([task.lat, task.long]).on('click', event => this.openTaskDetail(event.target.data));
                marker.data = task;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
