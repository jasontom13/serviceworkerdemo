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
var router_1 = require("@angular/router");
var Application_1 = require("../Model/Application");
var submitApp_service_1 = require("../Services/submitApp.service");
var CardAppPage = (function () {
    function CardAppPage(submitAppService, router) {
        this.submitAppService = submitAppService;
        this.router = router;
        this.cardTypes = [];
        this.liabilityTypes = [];
        this.approvalTypes = [];
        this.selectCardType = function (cardType) {
            this.cType = cardType;
        };
        this.selectLiabilityType = function (liabilityType) {
            this.lType = liabilityType;
        };
        this.selectApprovalType = function (approvalType) {
            this.aType = approvalType;
        };
        this.submitApplication = function () {
            var app = new Application_1.Application(this.firstName + " " + this.middleName + " " + this.lastName, this.cType, this.lType, this.aType);
            this.submitAppService.setApp(app);
            console.log("submitApplication");
            //this.router.navigate(['admin']);
        };
    }
    ;
    CardAppPage.prototype.ngOnInit = function () {
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
    };
    return CardAppPage;
}());
CardAppPage = __decorate([
    core_1.Component({
        selector: 'cardApp',
        templateUrl: 'app/CA/cardApp.component.html',
    }),
    __metadata("design:paramtypes", [submitApp_service_1.SubmitAppService, router_1.Router])
], CardAppPage);
exports.CardAppPage = CardAppPage;
//# sourceMappingURL=cardApp.component.js.map