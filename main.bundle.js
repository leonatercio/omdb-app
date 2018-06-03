webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_API; });
var URL_API = 'http://www.omdbapi.com/?';


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mt-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__["a" /* MoviesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* OMDBService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_1__movies_movies_component__["a" /* MoviesComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OMDBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api__ = __webpack_require__("../../../../../src/app/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OMDBService = /** @class */ (function () {
    function OMDBService(http) {
        this.http = http;
        this.apiKey = '891cfff2';
    }
    OMDBService.prototype.movies = function (title, page) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__app_api__["a" /* URL_API */] + 's=' + title + '&apikey=' + this.apiKey + '&page=1')
            .map(function (res) { return res.json(); });
    };
    OMDBService.prototype.movieDetail = function (id) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__app_api__["a" /* URL_API */] + 'i=' + id + '&apikey=' + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    OMDBService.prototype.moviesPage = function (page, title) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__app_api__["a" /* URL_API */] + 't=' + title + '&apikey=' + this.apiKey + '&page=' + page + '&Plot=short')
            .map(function (res) { return res.json(); });
    };
    OMDBService.prototype.searchType = function (type) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__app_api__["a" /* URL_API */] + 't=a' + '&apikey=' + this.apiKey + '&type=' + type)
            .map(function (res) { return res.json(); });
    };
    OMDBService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], OMDBService);
    return OMDBService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-busca{\r\n\tmargin-top: 20px;\r\n\tmargin-left: 80px;\r\n\tmargin-right: 10px;\r\n}\r\n.results{\r\n\tbackground: #FFF;\r\n}\r\n.results2{\r\n\tbackground: #FFF;\r\n}\r\n.icon{\r\n\tfloat: right;\r\n\tline-height: 40px;\r\n\tfont-size: 20px;\r\n}\r\n.icon:hover{\r\n\tcursor: pointer;\r\n}\r\n.poster{\r\n\tborder-radius:5px solid #FFF;\r\n}\r\n.search-input{\r\n\tborder-radius: 3px;\r\n\tpadding: 5px;\r\n\theight: 38px;\r\n\tmargin-right: 5px;\r\n\twidth:200px;\r\n}\r\nmat-toolbar{\r\n\theight:150px;\r\n\tbackground:url(\"https://dentalartsandwellness.com/wp-content/uploads/2016/10/slate-bg2.jpg?id=572\");\r\n\tbackground-size: cover;\r\n\tcolor:white;\r\n}\r\n.search-results{\r\n\tbackground:url(\"https://image.freepik.com/vector-gratis/varias-cosas-de-pelicula-doodle-fondo-transparente_6997-697.jpg\");\r\n\tbackground-repeat: repeat;\r\n}\r\n.logo{\r\n\tmargin-right: 20px;\r\n\tmargin-left: 60px;\r\n\tmargin-top: 30px;\r\n\ttext-align: center;\r\n}\r\n.nav-item{\r\n\tborder:1px solid #fff;\r\n\tpadding: 5px;\r\n\tborder-radius: 6px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MENU -->\n<div style=\"height: 100vh;\">\n  <mat-toolbar>\n    <a routerLink=\"/\"><span style=\"margin-right: 20px;margin-left: 60px;text-align: center;\"><img src=\"/assets/img/logo.png\"></span></a>\n    <span class=\"example-spacer\"></span>\n    <!-- <div fxLayoutAlign=\"center center\" fxShow=\"true\" fxHide.lt-md=\"true\">\n      <a mat-button class=\"nav-item\" (click)=\"tipo(movie.value)\">Filmes</a>\n      <input type=\"hidden\" value=\"movie\" #movie id=\"movie\" name=\"movie\">\n      <a mat-button class=\"nav-item\" (click)=\"tipo('series')\">Séries</a>\n    </div> -->\n    <!-- <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <a href=\"#\" (click)=\"sidenav.toggle()\"><i class=\"fa fa-bars\" style=\"color: white\"></i></a>\n    </div> -->\n  </mat-toolbar>\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav fxLayout=\"column\">\n      <<!-- div fxLayout=\"column\">\n        <a (click)=\"sidenav.toggle()\" href=\"#\" mat-button>Close</a>\n\t      <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo(movie.value)\">Filmes</a>\n\t      <input type=\"hidden\" value=\"movie\" #movie id=\"movie\" name=\"movie\">\n\t      <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo('series')\">Séries</a>\n      </div> -->\n    </mat-sidenav>\n    <mat-sidenav-content style=\"verflow: hidden;\">\n\t\t\t<div class=\"form-busca\">\n\t\t    <p align=\"left\"><span class=\"title-film\" style=\"margin-left: 10px;\">Busque um filme:</span>\n\t\t  \t\t<input id=\"search\" #filme type=\"search\" (keyup)=\"busca($event)\" class=\"search-input\" placeholder=\"Digite o nome de um filme\"> <!-- <button class=\"btn-buscar\" mat-raised-button color=\"primary\" (click)=\"buscaFilmes(filme.value)\">Pesquisar</button> -->\n\t\t    </p>\n\t\t    <div class=\"error\"></div>\n\t\t\t\t<div *ngIf=\"nFilmes > 0\">\n\t\t\t\t\t<p align=\"left\" class=\"nFilmes\" style=\"margin-left: 10px;\">Foram encontrados {{nFilmes}} filmes na sua busca.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr/>\n\t\t\t<ngx-loading [show]=\"spinner\"></ngx-loading>\n\t\t\t\t\n\t\t\t<div class=\"container-full search-results\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"results\">\n\t\t\t\t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"2%\" fxLayoutAlign=\"center\">\n\t\t\t\t\t\t\t<div class=\"filmes\" *ngFor=\"let movie of movies\">\n\t\t\t\t\t\t\t\t<div infiniteScroll\n\t\t\t\t\t\t            [infiniteScrollDistance]=\"2\"\n\t\t\t\t\t\t            [infiniteScrollThrottle]=\"500\"\n\t\t\t\t\t\t            (scrolled)=\"onScrollDown()\">\n\t\t\t\t\t\t\t\t\t<mat-card>\n\t\t\t\t\t\t\t    \t<img mat-card-image src=\"{{movie?.Poster}}\" height=\"400px\" onError=\"this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLWP3Hym4rLxUIVhckpMu717_bDbR3oHSP1TiH0E5n_i-PfX'\">\n\t\t\t\t\t\t\t\t\t\t<mat-chip-list class=\"mat-chip-list-stacked\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-chip color=\"danger\" selected=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"name-filme\" style=\"margin-bottom: 0\">FILME: {{movie?.Title}}</p>\n\t\t\t\t\t\t\t\t\t\t\t</mat-chip>\n\t\t\t\t\t\t\t\t\t\t\t<mat-chip color=\"primary\" selected=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\tANO: {{movie.Year}} | TIPO: {{movie.Type}} | <a  routerLink=\"/movie/{{movie?.imdbID}}\">Ver detalhes</a> <i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</mat-chip>\n\t\t\t\t\t\t\t\t\t\t</mat-chip-list>\n\t\t\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"results2\">\n\t\t\t\t\t\t<div class=\"scroll\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(omdbService, router, http) {
        this.omdbService = omdbService;
        this.router = router;
        this.http = http;
        this.Movie = "";
        this.movies = [];
        this.isDone = true;
        this.count = 0;
        this.type = [];
        this.spinner = false;
        this.apiKey = '891cfff2';
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('.search-results').hide();
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    };
    HomeComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    };
    HomeComponent.prototype.getNextFilms = function (titleValue, count) {
        return this.http.get("http://www.omdbapi.com/?apikey=" + this.apiKey + '&s=' + this.titleValue + '&page=' + this.count)
            .map(function (res) { return res.json(); });
    };
    //Filter type
    // tipo(value:string){
    //   this.spinner = true;
    //   this.titleValue = `${value}`;
    //   console.log("Tipo: "+this.titleValue);
    //   console.log("Value: "+`${value}`);
    //   this.omdbService.searchType(this.titleValue).subscribe(res => {
    //     this.spinner = false;
    //     this.type = res.Search;
    //     console.log(res);
    //     if(this.type == undefined || this.type == null){
    //         $('.nFilmes').hide();
    //         $('.search-results').hide();
    //         $('.error').show();
    //         $('.error').html('<p align="left">O tipo não foi econtrado!</p>');
    //        this.spinner = false;
    //     }else{
    //       $('.search-results').show();
    //       $(".results").show();
    //       this.tJson = this.type.length;
    //       this.nFilmes = res.totalResults;
    //       $('.error').hide();
    //       $('.nFilmes').show();
    //       $('.search-results').show();
    //       this.spinner = false;
    //     }
    //   });
    // }
    //Button search function
    HomeComponent.prototype.busca = function (event) {
        var _this = this;
        this.count = 1;
        if (event.keyCode == 13) {
            this.spinner = true;
            $('.scroll').html("");
            this.Movie = event.target.value;
            this.titleValue = event.target.value;
            this.omdbService.movies(this.Movie, 1).subscribe(function (filme) {
                _this.movies = filme.Search;
                if (_this.movies == undefined || _this.movies == null) {
                    $('.nFilmes').hide();
                    $('.search-results').hide();
                    $('.error').show();
                    $('.error').html('<p align="left">O filme pesquisado não foi econtrado!</p>');
                    _this.spinner = false;
                }
                else {
                    $(".results").show();
                    _this.tJson = _this.movies.length;
                    _this.nFilmes = filme.totalResults;
                    _this.spinner = false;
                    $('.error').hide();
                    $('.nFilmes').show();
                    $('.search-results').show();
                }
            });
        }
    };
    //Infinite Scroll function
    HomeComponent.prototype.onScrollDown = function () {
        var _this = this;
        this.titleValue = $("#search").val();
        this.spinner = true;
        this.getNextFilms(this.titleValue, this.count)
            .subscribe(function (data) {
            if (data.Response !== 'False') {
                var myArr = [];
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        myArr.push(data[key]);
                    }
                }
                _this.movies = myArr[0];
                _this.totalPages = Math.round(data.totalResults / 10);
                $(".results").hide();
                for (var i = 0; i < _this.movies.length; i++) {
                    $(".scroll").append("<div fxLayout='row' fxLayout.xs='column' fxLayoutWrap fxLayoutGap='0.5%' fxLayoutAlign='center'><ngx-loading [show]='spinner'></ngx-loading><mat-card><img mat-card-image src=" + _this.movies[i].Poster + "  height='300px' onError=\"this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLWP3Hym4rLxUIVhckpMu717_bDbR3oHSP1TiH0E5n_i-PfX'\"><mat-chip-list _ngcontent-c0='' class='mat-chip-list-stacked mat-chip-list' tabindex='0' aria-required='false' aria-disabled='false' aria-invalid='false' aria-multiselectable='false' role='listbox' aria-orientation='horizontal'><div class='mat-chip-list-wrapper'><mat-chip _ngcontent-c0='' class='mat-chip mat-danger mat-chip-selected' color='danger' role='option' selected='true' ng-reflect-color='danger' ng-reflect-selected='true' tabindex='-1' aria-disabled='false' aria-selected='true'> FILME: " + _this.movies[i].Title + "</mat-chip><mat-chip _ngcontent-c0='' class='mat-chip mat-primary mat-chip-selected' color='primary' role='option' selected='true' ng-reflect-color='primary' ng-reflect-selected='true' tabindex='-1' aria-disabled='false' aria-selected='true'>ANO: " + _this.movies[i].Year + " | TIPO: " + _this.movies[i].Type + " | <a _ngcontent-c0='' ng-reflect-router-link='/movie/" + _this.movies[i].imdbID + "' href='/movie/" + _this.movies[i].imdbID + "'>Ver detalhes</a> <i _ngcontent-c0='' class='fa fa-search'></i></mat-chip></div></mat-chip-list></mat-card></div><br>").slideDown(500).delay(200);
                    if (_this.count == _this.totalPages) {
                        _this.titleValue = $("#search").val();
                        _this.count = 0;
                        _this.movies = null;
                        _this.spinner = false;
                    }
                    _this.spinner = false;
                }
                _this.isDone = true;
            }
            else {
                _this.isDone = true;
                _this.movies = null;
                console.log('Not Found');
            }
        });
        this.spinner = false;
        this.count++;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* OMDBService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar{\r\n\theight:150px;\r\n\tbackground:url(\"https://dentalartsandwellness.com/wp-content/uploads/2016/10/slate-bg2.jpg?id=572\");\r\n\tbackground-size: cover;\r\n\tcolor:white;\r\n}\r\n.logo{\r\n\tmargin-right: 20px;\r\n\tmargin-left: 60px;\r\n\tmargin-top: 0px;\r\n\ttext-align: center;\r\n}\r\n.botaoVoltar{\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n\tmargin-right:5px;\r\n\tmargin-bottom:5px;\r\n}\r\n.bt{\r\n\tbackground: #FFF;\r\n\tcolor:#000;\r\n\tfloat: right;\r\n\tmargin-left: 20px;\r\n}\r\n.nav-item{\r\n\tborder:1px solid #fff;\r\n\tpadding: 5px;\r\n\tborder-radius: 6px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MENU -->\n<div style=\"height: 100vh;\">\n  <mat-toolbar>\n    <a routerLink=\"/\"><span class=\"logo\"><img src=\"/assets/img/logo.png\"></span></a>\n    <span class=\"example-spacer\"></span>\n    <!-- <div fxLayoutAlign=\"center center\" fxShow=\"true\" fxHide.lt-md=\"true\">\n      <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo('movie')\">Filmes</a>\n      <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo('series')\">Séries</a>\n    </div> -->\n    <button (click)=\"goBack()\" mat-mini-fab class=\"bt\"><i class=\"fa fa-arrow-left botaoVoltar\"></i></button>\n    <!-- <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <a href=\"#\" (click)=\"sidenav.toggle()\"><i class=\"fa fa-bars\" style=\"color: white\"></i></a>\n    </div> -->\n  </mat-toolbar>\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n    <mat-sidenav #sidenav fxLayout=\"column\">\n      <!-- <div fxLayout=\"column\">\n        <a (click)=\"sidenav.toggle()\" href=\"#\" mat-button>Close</a>\n        <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo('movie')\">Filmes</a>\n        <a href=\"#\" mat-button class=\"nav-item\" (click)=\"tipo('series')\">Séries</a>\n      </div> -->\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill style=\"overflow: hidden;\">\n      <div class=\"container\">\n          <ngx-loading [show]=\"loading\"></ngx-loading>\n          <br>\n          <mat-card class=\"example-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title><h2 class=\"title\">{{movie?.Title}}</h2></mat-card-title>\n              <mat-card-subtitle><p><b>Tipo:</b> {{movie?.Type}}</p></mat-card-subtitle>\n            </mat-card-header>\n              <img mat-card-image src=\"{{movie?.Poster}}\" onError=\"this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLWP3Hym4rLxUIVhckpMu717_bDbR3oHSP1TiH0E5n_i-PfX'\">\n            <mat-card-content>\n              <p><b>Ano:</b> {{movie?.Year}}</p>\n              <p><b>Duração:</b> {{movie?.Runtime}}</p>\n              <p><b>Diretor:</b> {{movie?.Director}}</p>\n              <p><b>Atores:</b> {{movie?.Actors}}</p>\n              <p><b>Gênero:</b> {{movie?.Genre}}</p>\n              <p><b>Descrição:</b> {{movie?.Plot}}</p>\n              <p><b>Linguagens:</b> {{movie?.Language}}</p>\n              <p><b>Produção:</b> {{movie?.Production}}</p>\n              <p><b>País:</b> {{movie?.Country}}</p>\n            </mat-card-content>\n          </mat-card>\n          <br>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(omdbService, route) {
        var _this = this;
        this.omdbService = omdbService;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.p = params; });
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.MovieDetail(this.p.id);
    };
    MoviesComponent.prototype.MovieDetail = function (id) {
        var _this = this;
        this.omdbService.movieDetail(this.p.id).subscribe(function (res) { _this.movies = res; });
    };
    MoviesComponent.prototype.goBack = function () {
        window.history.back();
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__("../../../../../src/app/movies/movies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* OMDBService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map