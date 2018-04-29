webpackJsonp([0],{

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Ionic

// Pages



// Firebase


/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, alertCtrl, actionSheetCtrl, toast, afDB, afAuth, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.afAuth.authState.subscribe(function (user) {
            // UI: Display nothing if there is no user
            if (!user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                return;
            }
        });
        // DB: Construct list from Firebase DB (afDB)
        this.item = afDB.object('/item');
    } // End constructor
    MainPage.prototype.viewDidLoad = function () {
        console.log('Main loaded');
    };
    MainPage.prototype.viewWillUnLoad = function () {
    };
    MainPage.prototype.mainMenu = function (itemId, reportReason) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Profile',
                    handler: function () {
                        console.log('Profile clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                    }
                }, {
                    text: 'Add Something',
                    handler: function () {
                        console.log('Add Something clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_add__["a" /* AddPage */]);
                    }
                }, {
                    text: 'Share',
                    handler: function () {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Report',
                    handler: function () {
                        console.log('Report clicked');
                        _this.reportItem(itemId, reportReason);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // DB: Report item
    MainPage.prototype.reportItem = function (itemId, reportReason) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Report',
            message: "",
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Reason',
                    value: reportReason
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.reports.push({
                            itemId: itemId,
                            reason: reportReason
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    MainPage.prototype.reportConfirm = function () {
        var prompt = this.alertCtrl.create({
            title: 'Report Sent',
            buttons: [
                {
                    text: 'Okay',
                    handler: function (data) {
                        console.log('Report Okay clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\main\main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <!--<h3>{{ (item | async)?.title }}</h3>-->\n  <h3>Something to do is displayed right here.</h3>\n\n      <button ion-button icon-only clear large color="grey" (click)="back()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n\n      <button ion-button icon-only clear large color="grey" (click)="next()">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n\n      <button ion-button icon-only clear large color="grey" (click)="hate()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n\n\n      <button ion-button icon-only clear large color="grey" (click)="mainMenu()">\n        <ion-icon name="arrow-up"></ion-icon>\n      </button>\n\n\n      <button ion-button icon-only clear large bottom color="grey" (click)="like()">\n        <ion-icon name="heart"></ion-icon>\n      </button>\n\n</ion-content>'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\main\main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPage = (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    return AddPage;
}());
AddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\add\add.html"*/'<!--\n  Generated template for the AddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\add\add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AddPage);

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(afAuth, toast, navParams, navCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.toast = toast;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.afAuth.authState.subscribe(function (user) {
            // UI: Display nothing if there is no user
            if (!user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                return;
            }
        });
    }
    // Signout
    ProfilePage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.toast.create({
            message: "Logged Out",
            duration: 3000
        }).present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="All" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Added" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_dynamic_links__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, actionSheetCtrl, toast, afDB, afAuth, firebaseDynamicLinks, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.loadingCtrl = loadingCtrl;
        afAuth.authState.subscribe(function (user) {
            // UI: Display user name
            if (!user.displayName) {
                _this.displayName = null;
                return;
            }
            _this.displayName = user.displayName;
        });
        // DB: Construct list from Firebase DB (afDB)
        this.items = afDB.list('/items');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('home loaded');
    };
    // Signout
    HomePage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.toast.create({
            message: "Logged Out",
            duration: 3000
        }).present();
    };
    //DEEP LINK: Example
    HomePage.prototype.deepLink = function () {
        var options = {
            title: 'My Title',
            message: 'My message',
            deepLink: 'http://example.com/',
            callToActionText: 'Message on button'
        };
        this.firebaseDynamicLinks.sendInvitation(options)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
        this.firebaseDynamicLinks.onDynamicLink()
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.log(error); });
    };
    // DB: Add item
    HomePage.prototype.addItem = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Item Name',
            message: "Enter a name for this new item.",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.items.push({
                            title: data.title
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    //DB: Show options modal
    HomePage.prototype.showOptions = function (itemId, itemTitle) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Delete Item',
                    role: 'destructive',
                    handler: function () {
                        _this.removeItem(itemId);
                    }
                }, {
                    text: 'Update title',
                    handler: function () {
                        _this.updateItem(itemId, itemTitle);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //DB: remove item
    HomePage.prototype.removeItem = function (itemId) {
        this.items.remove(itemId);
    };
    // Update item in DB
    HomePage.prototype.updateItem = function (itemId, itemTitle) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'item Name',
            message: "Update the name for this item",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                    value: itemTitle
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.items.update(itemId, {
                            title: data.title
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\home\home.html"*/'<ion-content padding>\n\n  <h3>Hello {{displayName}}</h3>  \n\n  <ion-list-header>Firebase Items</ion-list-header> \n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items | async" (click)="showOptions(item.$key, item.title)">\n\n      {{item.title}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="addItem()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n\n\n  <button ion-button outline (click)="signOut()">Logout</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase_dynamic_links__["a" /* FirebaseDynamicLinks */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_add__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_dynamic_links__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_firebase_config__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// Firebase Native


// Firebase Web




// Google Plus

// Facebook

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_add__["a" /* AddPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_add__["a" /* AddPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_dynamic_links__["a" /* FirebaseDynamicLinks */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, firebase) {
        var _this = this;
        this.firebase = firebase;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // If environement is native, load native firebase
            if (platform.is('cordova')) {
                console.log('PLATFORM: Cordova');
                // FIREBASE Native
                _this.firebase.getToken()
                    .then(function (token) { return console.log("The token is " + token); }) // save the token server-side and use it to push notifications to this device
                    .catch(function (error) { return console.error('Error getting token', error); });
                _this.firebase.onTokenRefresh()
                    .subscribe(function (token) { return console.log("Got a new token " + token); });
            }
            if (platform.is('ios')) {
                console.log('PLATFORM: ios');
                _this.firebase.grantPermission(); // for ios
            }
            if (platform.is('browser')) {
                console.log('PLATFORM: Browser');
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__["a" /* Firebase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__["a" /* Firebase */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleplusConfig; });
var googleplusConfig = {
    'webClientId': '216388821626-2slu8q8p5jqcvddkmhqrdlr6uenqs499.apps.googleusercontent.com',
    'offline': true
};
//# sourceMappingURL=app.googleplus.config.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyANhSWV_YcKP3GMXQgsmOtIGZvbDnngdbE",
    authDomain: "do-something-1499718110793.firebaseapp.com",
    databaseURL: "https://do-something-1499718110793.firebaseio.com",
    projectId: "do-something-1499718110793",
    storageBucket: "do-something-1499718110793.appspot.com",
    messagingSenderId: "216388821626"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_googleplus_config__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Ionic

//Firebase


// Pages

//Social Login



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, toast, platform, afAuth, googlePlus, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.platform = platform;
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.user = {}; // local user model
        this.afterLoginRoot = __WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]; // Set page redirect after login
        this.afAuth.authState.subscribe(function (afUser) {
            if (afUser) {
                _this.navCtrl.setRoot(_this.afterLoginRoot);
                return;
            }
            else {
                return;
            }
        });
    }
    LoginPage.prototype.ionViewdidLoad = function () {
        console.log('login loaded');
    };
    // LOGIN - Success callback
    LoginPage.prototype.loginSuccess = function (result) {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.uid) {
                _this.navCtrl.setRoot(_this.afterLoginRoot); // if user data present, redirect
            }
        });
    };
    // LOGIN - Error callback
    LoginPage.prototype.loginError = function (e) {
        console.error(e);
        this.toast.create({
            message: e.message,
            duration: 3000
        }).present();
    };
    // LOGIN - USER MODEL
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, result;
            return __generator(this, function (_a) {
                try {
                    // Native: user model
                    if (this.platform.is('cordova')) {
                        result = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithEmailAndPassword(user.email, user.password);
                        console.log(result);
                        if (result) {
                            this.loginSuccess(result);
                        }
                        // Web: user model
                    }
                    else {
                        result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                        console.log(result);
                        if (result) {
                            this.loginSuccess(result);
                        }
                    }
                }
                catch (e) {
                    this.loginError(e);
                }
                return [2 /*return*/];
            });
        });
    };
    //LOGIN - Google
    LoginPage.prototype.googlelogin = function () {
        var _this = this;
        // Native: google
        if (this.platform.is('cordova')) {
            this.googlePlus.login(__WEBPACK_IMPORTED_MODULE_6__app_app_googleplus_config__["a" /* googleplusConfig */]).then(function (result) {
                __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(result.idToken)); // pass token to firebase
            }).then(function (success) {
                console.log('FIREBASE LOGIN SUCCESS:' + JSON.stringify(success)); // Log success
            }).catch(function (err) {
                console.error(err);
                _this.alertCtrl.create({
                    title: 'Google Login failed',
                    message: JSON.stringify(err),
                    buttons: ['Ok']
                }).present();
            });
        }
        else {
            // Web: google
            var result = this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
            console.log(result);
            if (result) {
                this.loginSuccess(result);
            }
        }
    };
    // LOGIN - Facebook
    LoginPage.prototype.facebooklogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                try {
                    // Native: facebook
                    if (this.platform.is('cordova')) {
                        return [2 /*return*/, this.fb.login(['email', 'public_profile']).then(function (res) {
                                var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken); // get login token from facebook
                                var result = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(facebookCredential); // pass token to firebase
                                if (result) {
                                    _this.loginSuccess(result);
                                }
                            })];
                    }
                    else {
                        result = this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
                        console.log(result);
                        if (result) {
                            this.loginSuccess(result);
                        }
                    }
                }
                catch (e) {
                    this.loginError(e);
                }
                return [2 /*return*/];
            });
        });
    };
    // REGISTER - USER MODEL
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            this.loginSuccess(result);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.loginError(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documents\Do Something\Simple\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email" required #email></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <p>\n\n    <button ion-button full (click) = "login(user)">Login </button>\n\n  </p>\n\n  <p>\n\n    <button ion-button full color="googleplus" (click)="googlelogin()" >Google Login</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button full color="facebook" (click)="facebooklogin()">Facebook Login</button>  \n\n  </p>\n\n  <p>\n\n    <button ion-button full color="light" (click) = "register(user)">Signup</button>\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\Documents\Do Something\Simple\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]) === "function" && _h || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map