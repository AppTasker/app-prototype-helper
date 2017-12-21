import {Injectable} from '@angular/core';
import tasks from './mock-tasks';

@Injectable()
export class TaskService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  findAll() {
    return Promise.resolve(tasks);
  }

  findById(id) {
    return Promise.resolve(tasks[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(tasks.filter((task: any) =>
        (task.title +  ' ' +task.address +  ' ' + task.city + ' ' + task.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(task) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, task: task});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
