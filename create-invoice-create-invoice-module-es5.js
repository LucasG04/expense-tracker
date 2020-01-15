(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-invoice-create-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-invoice/create-invoice.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-invoice/create-invoice.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Rechnung erfassen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"create-form\" [formGroup]=\"validations_form\" (ngSubmit)=\"createInvoice(validations_form.value)\">\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Titel</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.title\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('title').hasError(validation.type) && (validations_form.get('title').dirty || validations_form.get('title').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Rechnungsbetrag</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"costs\" class=\"form-controll\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.costs\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('costs').hasError(validation.type) && (validations_form.get('costs').dirty || validations_form.get('costs').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\">Kategorie</ion-label>\r\n      <ion-select interface=\"popover\" formControlName=\"category\" required>\r\n        <ion-select-option *ngFor=\"let category of categories\" value=\"{{category}}\">\r\n          {{category.charAt(0).toUpperCase()}}{{category.slice(1)}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.category\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('category').hasError(validation.type) && (validations_form.get('category').dirty || validations_form.get('category').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label>Rechnungsdatum</ion-label>\r\n      <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Datum auswählen\" formControlName=\"date\" required [max]=\"dateUtils.getTodayAsISO8601()\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Notiz</ion-label>\r\n      <ion-textarea formControlName=\"note\" class=\"form-controll\"></ion-textarea>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.note\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('note').hasError(validation.type) && (validations_form.get('note').dirty || validations_form.get('note').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"error-message\">\r\n      <ion-label color=\"danger\">{{errorMessage}}</ion-label>\r\n    </div>\r\n\r\n    <ion-button class=\"submit-btn\" type=\"submit\" size=\"large\" expand=\"full\" [disabled]=\"!validations_form.valid || saving\">\r\n      Erstellen</ion-button>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/create-invoice/create-invoice.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-invoice/create-invoice.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoicePageModule", function() { return CreateInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-invoice.page */ "./src/app/create-invoice/create-invoice.page.ts");







var routes = [
    {
        path: '',
        component: _create_invoice_page__WEBPACK_IMPORTED_MODULE_6__["CreateInvoicePage"]
    }
];
var CreateInvoicePageModule = /** @class */ (function () {
    function CreateInvoicePageModule() {
    }
    CreateInvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_invoice_page__WEBPACK_IMPORTED_MODULE_6__["CreateInvoicePage"]]
        })
    ], CreateInvoicePageModule);
    return CreateInvoicePageModule;
}());



/***/ }),

/***/ "./src/app/create-invoice/create-invoice.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-invoice/create-invoice.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validation-errors {\n  margin: 15px;\n}\n\n.submit-btn {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWludm9pY2UvRDpcXENvZGluZ1xcSW9uaWMtQW5ndWxhclxcZXhwZW5zZS10cmFja2VyL3NyY1xcYXBwXFxjcmVhdGUtaW52b2ljZVxcY3JlYXRlLWludm9pY2UucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGUtaW52b2ljZS9jcmVhdGUtaW52b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWludm9pY2UvY3JlYXRlLWludm9pY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlkYXRpb24tZXJyb3JzIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCIudmFsaWRhdGlvbi1lcnJvcnMge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-invoice/create-invoice.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-invoice/create-invoice.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoicePage", function() { return CreateInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");






var CreateInvoicePage = /** @class */ (function () {
    function CreateInvoicePage(formBuilder, navCtrl, dataService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.errorMessage = '';
        this.validation_messages = validation_messages;
        this.categories = [];
        this.saving = false;
    }
    CreateInvoicePage.prototype.ngOnInit = function () {
        this.dateUtils = new _utils__WEBPACK_IMPORTED_MODULE_5__["DateUtils"]();
        this.categories = this.dataService.categories;
        this.validations_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            costs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    };
    CreateInvoicePage.prototype.createInvoice = function (invoice) {
        var _this = this;
        invoice.date = this.dateUtils.ISO8601toDate(invoice.date).getTime().toString();
        this.saving = true;
        this.dataService.createInvoice(invoice).subscribe(function () {
            _this.saving = false;
            _this.navCtrl.back();
        });
    };
    CreateInvoicePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
    ]; };
    CreateInvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-invoice',
            template: __webpack_require__(/*! raw-loader!./create-invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-invoice/create-invoice.page.html"),
            styles: [__webpack_require__(/*! ./create-invoice.page.scss */ "./src/app/create-invoice/create-invoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], CreateInvoicePage);
    return CreateInvoicePage;
}());

var validation_messages = {
    'title': [
        { type: 'required', message: 'Titel wird benötigt' },
    ],
    'costs': [
        { type: 'required', message: 'Rechnungsbetrag wird benötigt' },
    ],
    'category': [
        { type: 'required', message: 'Kategorie wird benötigt' },
    ],
    'date': [
        { type: 'required', message: 'Rechnungsdatum wird benötigt' },
    ],
    'note': [
        { type: 'required', message: 'Notiz wird benötigt' },
    ],
};


/***/ })

}]);
//# sourceMappingURL=create-invoice-create-invoice-module-es5.js.map