import {Injectable} from '@angular/core';
import requesters from './mock-requesters';

@Injectable()
export class RequesterService {

    findAll() {
        return Promise.resolve(requesters);
    }

    findById(id) {
        return Promise.resolve(requesters[id - 1]);
    }

}
