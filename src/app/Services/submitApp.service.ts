import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {Application} from '../Model/Application';


@Injectable()
export class SubmitAppService {
  private applications: Application[];
  // private a: Application = new Application("jason","jason","jason","jason");
  private subject: Subject<Application[]> = new Subject<Application[]>();

  constructor(){
    this.applications = [];
    this.subject = <Subject<Application[]>>new Subject();
  }
  setApp(app: any){
    this.applications.push(app);
    this.subject.next(this.applications);
  }
  getApp(): Application[]{
    return this.applications;
  }

}
