webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(180),
        styles: [__webpack_require__(167)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_header_header_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_contact_contact_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_about_about_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_projects_projects_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_services_services_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_footer_footer_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_main_main_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_contact_form_contact_form_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_smooth_scroll__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_email_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toastr_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_page_scroll__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_contact_form_contact_form_component__["a" /* ContactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_smooth_scroll__["a" /* SmoothScrollToDirective */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_smooth_scroll__["b" /* SmoothScrollDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_17__services_toastr_service__["a" /* ToastrService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(181),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(validateService, toastr, emailService) {
        this.validateService = validateService;
        this.toastr = toastr;
        this.emailService = emailService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendEmail = function () {
        var _this = this;
        var contactInfo = {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            website: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.website) ? 'Portofolio' : this.website,
            projectInfo: this.projectInfo
        };
        if (!this.validateService.validateSendEmail(contactInfo)) {
            this.toastr.warning('Please fill in all fields');
            return false;
        }
        if (!this.validateService.validateEmail(contactInfo.email)) {
            this.toastr.warning('Please use a valide email');
            return false;
        }
        this.emailService.sendEmail(contactInfo).subscribe(function (data) {
            _this.name = null;
            _this.email = null;
            _this.phoneNumber = null;
            _this.website = null;
            _this.projectInfo = null;
            _this.toastr.success('Email sent');
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(183),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_toastr_service__["a" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(184),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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


var HeaderComponent = (function () {
    function HeaderComponent(document) {
        this.document = document;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnChanges = function () {
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 100) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && number < 21) {
            this.navIsFixed = false;
        }
    };
    HeaderComponent.prototype.bindHeader = function () {
        this.navIsFixed = false;
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(185),
        styles: [__webpack_require__(172)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(187),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__(188),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_component_main_main_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_contact_form_contact_form_component__ = __webpack_require__(63);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var router = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_1_app_component_main_main_component__["a" /* MainComponent */] },
    { path: 'contact-form', component: __WEBPACK_IMPORTED_MODULE_2__app_component_contact_form_contact_form_component__["a" /* ContactFormComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1_app_component_main_main_component__["a" /* MainComponent */] },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router, { useHash: true });
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".center-image {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".modal-fullscreen {\r\n  padding: 0 !important;\r\n}\r\n\r\n.modal-fullscreen .modal-dialog {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.modal-fullscreen .modal-content {\r\n  height: auto;\r\n  min-height: 100%;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  background-color: #363237;\r\n}\r\n\r\n.modal.fade .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.modal.fade.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}\r\n\r\n.send-email-button {\r\n  margin-top: 30px;\r\n  border: 3px solid #EDB83D;\r\n  color: #EDB83D;\r\n  font-family: 'Raleway', sans-serif !important;\r\n  background-color: #363237;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .input-contact-form {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .textarea-contact-form {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .logo-contact-form {\r\n    width: 80px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n  .input-contact-form {\r\n    width: 40%;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .logo-contact-form {\r\n    width: 100px;\r\n  }\r\n\r\n  .textarea-contact-form {\r\n    width: 41%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .pull-right-input-contact-form {\r\n    float: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*region card*/\r\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-panel {\r\n  transition: box-shadow .25s;\r\n  padding: 24px;\r\n  margin: 0.5rem 0 1rem 0;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  margin: 0.5rem 0 1rem 0;\r\n  background-color: #fff;\r\n  transition: box-shadow .25s;\r\n  border-radius: 2px;\r\n}\r\n\r\n.card .card-title {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n}\r\n\r\n.card .card-title.activator {\r\n  cursor: pointer;\r\n}\r\n\r\n.card.small, .card.medium, .card.large {\r\n  position: relative;\r\n}\r\n\r\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\r\n  max-height: 60%;\r\n  overflow: hidden;\r\n}\r\n\r\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\r\n  max-height: 40%;\r\n}\r\n\r\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.waves-effect {\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  vertical-align: middle;\r\n  z-index: 1;\r\n  transition: .3s ease-out;\r\n}\r\n\r\n.waves-effect .waves-ripple {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-top: -10px;\r\n  margin-left: -10px;\r\n  opacity: 0;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  transition: all 0.7s ease-out;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  pointer-events: none;\r\n}\r\n\r\n.waves-effect.waves-light .waves-ripple {\r\n  background-color: rgba(255, 255, 255, 0.45);\r\n}\r\n\r\n.waves-effect.waves-red .waves-ripple {\r\n  background-color: rgba(244, 67, 54, 0.7);\r\n}\r\n\r\n.waves-effect.waves-yellow .waves-ripple {\r\n  background-color: rgba(255, 235, 59, 0.7);\r\n}\r\n\r\n.waves-effect.waves-orange .waves-ripple {\r\n  background-color: rgba(255, 152, 0, 0.7);\r\n}\r\n\r\n.waves-effect.waves-purple .waves-ripple {\r\n  background-color: rgba(156, 39, 176, 0.7);\r\n}\r\n\r\n.waves-effect.waves-green .waves-ripple {\r\n  background-color: rgba(76, 175, 80, 0.7);\r\n}\r\n\r\n.waves-effect.waves-teal .waves-ripple {\r\n  background-color: rgba(0, 150, 136, 0.7);\r\n}\r\n\r\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\r\n  border: 0;\r\n  font-style: normal;\r\n  font-size: inherit;\r\n  text-transform: inherit;\r\n  background: none;\r\n}\r\n\r\n.waves-effect img {\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n.waves-notransition {\r\n  transition: none !important;\r\n}\r\n\r\n.waves-circle {\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\r\n}\r\n\r\n.waves-input-wrapper {\r\n  border-radius: 0.2em;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.waves-input-wrapper .waves-button-input {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.waves-circle {\r\n  text-align: center;\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n  line-height: 2.5em;\r\n  border-radius: 50%;\r\n  -webkit-mask-image: none;\r\n}\r\n\r\n.waves-block {\r\n  display: block;\r\n}\r\n\r\n.waves-effect .waves-ripple {\r\n  z-index: -1;\r\n}\r\n\r\n.card.small {\r\n  height: 300px;\r\n}\r\n\r\n.card.medium {\r\n  height: 400px;\r\n}\r\n\r\n.card.large {\r\n  height: 500px;\r\n}\r\n\r\n.card.horizontal {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\r\n  height: 100%;\r\n  max-height: none;\r\n  overflow: visible;\r\n}\r\n\r\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\r\n  height: 100%;\r\n}\r\n\r\n.card.horizontal .card-image {\r\n  max-width: 50%;\r\n}\r\n\r\n.card.horizontal .card-image img {\r\n  border-radius: 2px 0 0 2px;\r\n  max-width: 100%;\r\n  width: auto;\r\n}\r\n\r\n.card.horizontal .card-stacked {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n\r\n.card.horizontal .card-stacked .card-content {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card.sticky-action .card-action {\r\n  z-index: 2;\r\n}\r\n\r\n.card.sticky-action .card-reveal {\r\n  z-index: 1;\r\n  padding-bottom: 64px;\r\n}\r\n\r\n.card .card-image {\r\n  position: relative;\r\n}\r\n\r\n.card .card-image img {\r\n  display: block;\r\n  border-radius: 2px 2px 0 0;\r\n  position: relative;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card .card-image .card-title {\r\n  color: #fff;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  max-width: 100%;\r\n  padding: 24px;\r\n}\r\n\r\n.card .card-content {\r\n  padding: 24px;\r\n  border-radius: 0 0 2px 2px;\r\n}\r\n\r\n.card .card-content p {\r\n  margin: 0;\r\n  color: inherit;\r\n}\r\n\r\n.card .card-content .card-title {\r\n  display: block;\r\n  line-height: 32px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.card .card-content .card-title i {\r\n  line-height: 32px;\r\n}\r\n\r\n.card .card-action {\r\n  position: relative;\r\n  background-color: inherit;\r\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\r\n  padding: 16px 24px;\r\n}\r\n\r\n.card .card-action:last-child {\r\n  border-radius: 0 0 2px 2px;\r\n}\r\n\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\r\n  color: #ffab40;\r\n  margin-right: 24px;\r\n  transition: color .3s ease;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\r\n  color: #ffd8a6;\r\n}\r\n\r\n.card .card-reveal {\r\n  padding: 24px;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  left: 0;\r\n  top: 100%;\r\n  height: 100%;\r\n  z-index: 3;\r\n  display: none;\r\n}\r\n\r\n.card .card-reveal .card-title {\r\n  cursor: pointer;\r\n  display: block;\r\n}\r\n\r\n.grey-text {\r\n  color: #9e9e9e !important;\r\n}\r\n\r\n.grey.darken-4 {\r\n  background-color: #212121 !important;\r\n}\r\n\r\n.grey-text.text-darken-4 {\r\n  color: #212121 !important;\r\n}\r\n/*endregion*/\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1 class=\"intro-text\">Hi, I'm Alin. I design & build </h1>\n  <h1 class=\"intro-text\">Web & Mobile applications</h1>\n</div>\n<br/>\n<div id=\"about\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <h3 class=\"title\">About</h3>\n      <p style=\"text-align: justify;\">I currently work as a Web Developer at Systegra Engineering, the\n        place\n        where I consume my passion for\n        development and I am also student in my first year of masters\n        degree learning Inteligent Transport Systems. You can check my work history on <a\n          class=\"link-button\"\n          href=\"https://www.linkedin.com/in/georgian-alin-alexandru-5ab995119/\">LinkedIn</a>.\n        Outside of work I like to hang out with friends and travel. If you have a project to be done,\n        don't\n        hesitate\n        to\n        <a pageScroll [pageScrollSpeed]=\"4000\" href=\"#contact\" class=\"link-button\">contact me</a> and get a coffee.\n      </p>\n      <img src=\"./../../../assets/me.jpg\" class=\"img-responsive img-thumbnail center-image\" alt=\"Alin Alexandru\">\n    </div>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <img style=\"width: 70px;\" src=\"../../../assets/logo/Portfolio%20logo.svg\" alt=\"logo\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h2>Few questions about yourself</h2>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: 30px;\">\n  <div class=\"col-md-6\">\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name*\">\n  </div>\n  <div class=\"col-md-6\">\n    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email*\">\n  </div>\n</div>\n<div class=\"row\" style=\"margin-top: 20px;\">\n  <div class=\"col-md-6\">\n    <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"Phone number\">\n  </div>\n  <div class=\"col-md-6\">\n    <input type=\"text\" class=\"form-control\" id=\"website\" placeholder=\"Website/Company\">\n  </div>\n</div>\n<div class=\"row\" style=\"margin-top: 20px;\">\n  <div class=\"col-md-12\">\n    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Text\"></textarea>\n  </div>\n</div>\n<div class=\"row\" style=\"margin-top: 20px;\">\n  <div class=\"col-md-12 text-center\">\n    <button id=\"email-button\" style=\"margin-top: 10px;\" class=\"btn btn-default btn-lg\">Submit project</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\n  <div class=\"text-center\">\n    <h3>Want to get a project done together?</h3>\n    <button id=\"email-button\" style=\"margin-top: 10px;\" data-toggle=\"modal\" data-target=\"#exampleModalLong\"\n            class=\"btn btn-default btn-lg\">Send me a email\n    </button>\n  </div>\n\n</div>\n<hr/>\n<div class=\"modal fade modal-fullscreen\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center \">\n            <img src=\"../../../assets/logo/contact-form-logo.svg\" class=\"logo-contact-form\" alt=\"logo\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <h2 style=\"color: #fff !important;\">Few questions about yourself</h2>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 10px;\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" placeholder=\"Name*\" name=\"name\" [(ngModel)]=\"name\"\n                   class=\"form-control input-contact-form pull-right-input-contact-form\">\n          </div>\n          <div class=\"col-md-6\">\n            <input type=\"email\" placeholder=\"Email address*\"  name=\"email\" [(ngModel)]=\"email\"\n                   class=\"form-control input-contact-form\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <input type=\"text\" placeholder=\"Phone number\" name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\"\n                   class=\"form-control input-contact-form pull-right-input-contact-form\">\n          </div>\n          <div class=\"col-md-6\">\n            <input type=\"text\" placeholder=\"Website/Company\" name=\"website\" [(ngModel)]=\"website\"\n                   class=\"form-control input-contact-form\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <textarea class=\"form-control textarea-contact-form\" name=\"projectInfo\" [(ngModel)]=\"projectInfo\"\n                      placeholder=\"Tell me about your project, what is it? How can I help?*\" rows=\"3\" required></textarea>\n          </div>\n        </div>\n        <div class=\"row text-center\">\n          <button (click)=\"sendEmail();\"\n                  class=\"btn btn-default btn-lg send-email-button\">Submit your project\n          </button>\n          <br>\n          <small style=\"color: #fff !important; font-weight: bold;\">* Required</small>\n        </div>\n        <p style=\"color: #fff !important;\n                  font-weight: bold;\n                  position: absolute;\n                  top: 0;\n                  right: 0;\n                  margin-top: 50px;\n                  margin-right: 30px;\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size: 35px; cursor: pointer;\" data-dismiss=\"modal\"></i>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"text-center\">\n  <div class=\"row\">\n    <img style=\"width: 40px;\" src=\"./assets/logo/Portfolio%20logo.svg\" alt=\"logo\">\n  </div>\n  <p style=\"margin-top: 5px;\">Handmade by me © 2017.</p>\n  <br/>\n  <div id=\"social-media\">\n    <a href=\"https://www.facebook.com/georgian.alin.77?ref=bookmarks\">\n      <img src=\"./assets/facebook.svg\" style=\"width: 35px;\" alt=\"facebook\"/>\n    </a>\n    <a href=\"https://www.linkedin.com/in/georgian-alin-alexandru-5ab995119/\">\n      <img src=\"./assets/linkedin.svg\" style=\"width: 35px;\" alt=\"facebook\"/>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div id=\"navigation\" class=\"header clearfix\">\n  <nav>\n    <ul class=\"nav nav-pills pull-right\">\n      <li class=\"nav-button\"><a pageScroll [pageScrollSpeed]=\"4000\"  href=\"#projects\" >Projects</a></li>\n      <li class=\"nav-button\"><a pageScroll [pageScrollSpeed]=\"4000\" href=\"#contact\">Contact</a></li>\n    </ul>\n  </nav>\n  <img style=\"width: 40px;\" src=\"../../../assets/logo/Portfolio%20logo.svg\" alt=\"logo\">\n</div>\n<hr/>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"navIsFixed\" style=\"margin-left: 8px; margin-right: 8px; border-top: 8px solid;\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" pageScroll [pageScrollSpeed]=\"4000\" href=\"#intro-section\" style=\"padding: 5px 15px;\"><img style=\"width: 40px;\" src=\"../../../assets/logo/Portfolio%20logo.svg\" alt=\"logo\"></a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-button\"><a pageScroll [pageScrollSpeed]=\"4000\" href=\"#intro-section\">Home</a></li>\n        <li class=\"nav-button\"><a pageScroll [pageScrollSpeed]=\"4000\" href=\"#projects\">Projects</a></li>\n        <li class=\"nav-button\"><a pageScroll [pageScrollSpeed]=\"4000\" href=\"#contact\">Contact</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<app-about></app-about>\n<app-services></app-services>\n<app-projects></app-projects>\n<app-contact></app-contact>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <h3 class=\"title\">Projects</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" src=\"assets/projects-logo/pointtaxi.png\">\n        </div>\n        <div class=\"card-content\">\n                        <span class=\"card-title activator grey-text text-darken-4 primary-font\">Point Taxi<i\n                          style=\"font-size: 20px; font-style: normal;\" class=\"pull-right\">Details</i></span>\n          <p><a href=\"http://pointtaxi.ro/\" class=\"link-button primary-font\">Visit Website</a></p>\n        </div>\n        <div class=\"card-reveal\">\n                        <span class=\"card-title grey-text text-darken-4\">Point Taxi<i\n                          class=\"fa fa-close pull-right\"></i></span>\n          <p>I worked on this project with my colleagues at <a class=\"link-button\" href=\"http://www.aptus.ro/en/\">Aptus\n            Software</a>. My role as a Front End Developer was to create new futures and resolve\n            existing bugs.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<hr/>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div id=\"services\">\n  <div class=\"row text-center\">\n    <h3 class=\"title\">Services</h3>\n  </div>\n  <br/>\n  <div class=\"col-md-6 text-center\">\n    <i class=\"fa fa-code fa-4x flash-yellow\" aria-hidden=\"true\"></i>\n    <h4 class=\"sub-title\">FRONT END DEVELOPMENT</h4>\n    <p style=\"text-align: justify;\">\n      Building out visual concepts of a website. Using HTML, CSS and Javascript Frameworks I can build\n      fast\n      and\n      interactive websites.\n      I also can bring to life your ideas about mobile apps using React Native, a cross-platform\n      technology.\n    </p>\n  </div>\n  <div class=\"col-md-6 text-center\">\n    <i class=\"fa fa-cogs fa-4x flash-yellow\" aria-hidden=\"true\"></i>\n    <h4 class=\"sub-title\">BACK END DEVELOPMENT</h4>\n    <p style=\"text-align: justify;\">\n      The Back End is the engine that holds up a web app or a mobile app. Using NodeJS with a SQL or\n      NO-SQL\n      Database\n      I can build a app front to back.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactFormComponent = (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact-form',
        template: __webpack_require__(182),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], ContactFormComponent);

//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(186),
        styles: [__webpack_require__(173)],
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (emailInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/email/', emailInfo, { headers: headers });
    };
    return EmailService;
}());
EmailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ToastrService);

//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateSendEmail = function (contactInfo) {
        if (contactInfo.name === undefined || contactInfo.email === undefined || contactInfo.projectInfo === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map