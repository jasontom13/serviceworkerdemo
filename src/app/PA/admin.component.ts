import { Component } from '@angular/core';
import {Application} from "../Model/Application";
import {SubmitAppService} from "../Services/submitApp.service";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'adminPage',
  templateUrl: 'admin.component.html'
})
export class AdminPage{
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  testApp: Application;
  applications: Application[];
  constructor(private submitAppService: SubmitAppService){
  };
  ngOnInit(){
    this.applications = this.submitAppService.getApp();
    // this.submitAppService.getApp().takeUntil(this.ngUnsubscribe).subscribe((applications: Application[]) => {
    //   console.log("Applications");
    //   this.applications = applications;
    //   console.log(this.applications);
    // });
    console.log(this.applications);
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
