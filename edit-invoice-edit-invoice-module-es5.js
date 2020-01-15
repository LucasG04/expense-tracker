(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-invoice-edit-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-invoice/edit-invoice.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-invoice/edit-invoice.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Rechnung bearbeiten</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"edit-form\" [formGroup]=\"validations_form\" (ngSubmit)=\"editInvoice(validations_form.value)\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Rechnung ID</ion-label>\r\n      <ion-input type=\"string\" formControlName=\"id\" class=\"form-controll\" readonly></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Titel</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"title\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.title\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('title').hasError(validation.type) && (validations_form.get('title').dirty || validations_form.get('title').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Rechnungsbetrag</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"costs\" class=\"form-controll\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.costs\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('costs').hasError(validation.type) && (validations_form.get('costs').dirty || validations_form.get('costs').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\">Kategorie</ion-label>\r\n      <ion-select interface=\"popover\" formControlName=\"category\" required>\r\n        <ion-select-option *ngFor=\"let category of categories\" value=\"{{category}}\">\r\n          {{category.charAt(0).toUpperCase()}}{{category.slice(1)}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.category\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('category').hasError(validation.type) && (validations_form.get('category').dirty || validations_form.get('category').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label>Rechnungsdatum</ion-label>\r\n      <ion-datetime displayFormat=\"DD.MM.YYYY\" placeholder=\"Datum auswählen\" formControlName=\"date\" required [max]=\"dateUtils.getTodayAsISO8601()\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"primary\">Notiz</ion-label>\r\n      <ion-textarea formControlName=\"note\" class=\"form-controll\"></ion-textarea>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.note\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"validations_form.get('note').hasError(validation.type) && (validations_form.get('note').dirty || validations_form.get('note').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"error-message\">\r\n      <ion-label color=\"danger\">{{errorMessage}}</ion-label>\r\n    </div>\r\n\r\n    <ion-button class=\"submit-btn\" type=\"submit\" size=\"large\" expand=\"full\" [disabled]=\"!validations_form.valid || saving\">\r\n      Speichern</ion-button>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-invoice/edit-invoice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-invoice/edit-invoice.module.ts ***!
  \*****************************************************/
/*! exports provided: EditInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoicePageModule", function() { return EditInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-invoice.page */ "./src/app/edit-invoice/edit-invoice.page.ts");







var routes = [
    {
        path: '',
        component: _edit_invoice_page__WEBPACK_IMPORTED_MODULE_6__["EditInvoicePage"]
    }
];
var EditInvoicePageModule = /** @class */ (function () {
    function EditInvoicePageModule() {
    }
    EditInvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_invoice_page__WEBPACK_IMPORTED_MODULE_6__["EditInvoicePage"]]
        })
    ], EditInvoicePageModule);
    return EditInvoicePageModule;
}());



/***/ }),

/***/ "./src/app/edit-invoice/edit-invoice.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-invoice/edit-invoice.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validation-errors {\n  margin: 15px;\n}\n\n.submit-btn {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pbnZvaWNlL0Q6XFxDb2RpbmdcXElvbmljLUFuZ3VsYXJcXGV4cGVuc2UtdHJhY2tlci9zcmNcXGFwcFxcZWRpdC1pbnZvaWNlXFxlZGl0LWludm9pY2UucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0LWludm9pY2UvZWRpdC1pbnZvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWludm9pY2UvZWRpdC1pbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9ycyB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCIudmFsaWRhdGlvbi1lcnJvcnMge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-invoice/edit-invoice.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-invoice/edit-invoice.page.ts ***!
  \***************************************************/
/*! exports provided: EditInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoicePage", function() { return EditInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");







var EditInvoicePage = /** @class */ (function () {
    function EditInvoicePage(router, navCtrl, formBuilder, dataService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.errorMessage = '';
        this.validation_messages = validation_messages;
        this.categories = [];
        this.saving = false;
    }
    EditInvoicePage.prototype.ngOnInit = function () {
        this.dateUtils = new _utils__WEBPACK_IMPORTED_MODULE_6__["DateUtils"]();
        this.invoice = this.router.getCurrentNavigation().extras.state;
        this.categories = this.dataService.categories;
        this.validations_form = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.invoice.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.invoice.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            costs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.invoice.costs, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.invoice.category),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.dateUtils.msDateToISO8601(+this.invoice.date), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.invoice.note, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    };
    EditInvoicePage.prototype.editInvoice = function (invoice) {
        var _this = this;
        invoice.date = this.dateUtils.ISO8601toDate(invoice.date).getTime().toString();
        this.saving = true;
        this.dataService.updateInvoice(invoice).subscribe(function () {
            _this.saving = false;
            _this.navCtrl.back();
        });
    };
    EditInvoicePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
    ]; };
    EditInvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-invoice',
            template: __webpack_require__(/*! raw-loader!./edit-invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-invoice/edit-invoice.page.html"),
            styles: [__webpack_require__(/*! ./edit-invoice.page.scss */ "./src/app/edit-invoice/edit-invoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], EditInvoicePage);
    return EditInvoicePage;
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
//# sourceMappingURL=edit-invoice-edit-invoice-module-es5.js.map