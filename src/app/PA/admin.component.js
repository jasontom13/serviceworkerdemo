"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var submitApp_service_1 = require("../Services/submitApp.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/takeUntil");
var AdminPage = (function () {
    function AdminPage(submitAppService) {
        this.submitAppService = submitAppService;
        this.ngUnsubscribe = new Subject_1.Subject();
    }
    ;
    AdminPage.prototype.ngOnInit = function () {
        this.applications = this.submitAppService.getApp();
        // this.submitAppService.getApp().takeUntil(this.ngUnsubscribe).subscribe((applications: Application[]) => {
        //   console.log("Applications");
        //   this.applications = applications;
        //   console.log(this.applications);
        // });
        console.log(this.applications);
    };
    AdminPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return AdminPage;
}());
AdminPage = __decorate([
    core_1.Component({
        selector: 'adminPage',
        templateUrl: 'app/PA/admin.component.html'
    }),
    __metadata("design:paramtypes", [submitApp_service_1.SubmitAppService])
], AdminPage);
exports.AdminPage = AdminPage;
//# sourceMappingURL=admin.component.js.map