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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
var domain_constant_1 = require("../domain/domain.constant");
var http_2 = require("@angular/http");
var ToDoService = (function () {
    function ToDoService(http, domain) {
        this.http = http;
        this.domain = domain;
    }
    ToDoService.prototype.getList = function () {
        return this.http.get(this.domain.DOMAIN)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ToDoService.prototype.updateList = function (id, name) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(this.domain.DOMAIN + '/update/' + id + '/' + name, options)
            .map(function (res) {
            res.json();
        })
            .catch(this.handleError);
    };
    ToDoService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ToDoService;
}());
ToDoService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(domain_constant_1.DOMAIN)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], ToDoService);
exports.ToDoService = ToDoService;
//# sourceMappingURL=service.js.map