import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Application} from '../Model/Application';
import {SubmitAppService} from '../Services/submitApp.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'cardApp',
  templateUrl: 'cardApp.component.html',
})
export class CardAppPage  {
  public lType: string;
  public cType: string;
  public aType: string;

  public firstName: string;
  public middleName: string;
  public lastName: string;

  public cardTypes: any = [];
  public liabilityTypes: any = [];
  public approvalTypes: any = [];
  public endpoint: string;
  public regId: string;

  constructor(private submitAppService: SubmitAppService, private router: Router, private http: Http){
  };


  ngOnInit(): void {
    this.endpoint = window["endpoint"];
    console.log("WINDOW ENDPOINT: " + this.endpoint);
    this.regId = this.endpoint.split("gcm/send/",2)[1];
    this.lType = 'Individual';
    this.cType = 'Green';
    this.aType = 'Standard';

    this.cardTypes.push('Green');
    this.cardTypes.push('Gold');
    this.cardTypes.push('Platinum');
    this.cardTypes.push('Black');

    this.liabilityTypes.push('Individual');
    this.liabilityTypes.push('Company');
    this.liabilityTypes.push('Combined');

    this.approvalTypes.push('Standard');
    this.approvalTypes.push('Rush');

  }

  selectCardType = function(cardType: any){
    this.cType = cardType;
  }

  selectLiabilityType = function(liabilityType: any){
    this.lType = liabilityType;
  }

  selectApprovalType = function(approvalType: any) {
    this.aType = approvalType;
  }

  submitApplication = function(){
    let app: Application = new Application(this.firstName + " " + this.middleName + " " + this.lastName, this.cType, this.lType, this.aType);
    this.submitAppService.setApp(app);
    let headers = new Headers();
    headers.append('Authorization', 'key=AIzaSyD8fMNaJa90OMU7AXH14bqmexhClLOtGus');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    let data = JSON.stringify({"registration_ids": [this.regId]})
    console.log(this.http.post('https://android.googleapis.com/gcm/send', data, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError));
    console.log("submitApplication");
    //this.router.navigate(['admin']);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
