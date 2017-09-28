"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var convy_component_1 = require('../convy/convy.component');
var meka_component_1 = require('../meka/meka.component');
var sharemos_component_1 = require('../sharemos/sharemos.component');
var kelisto_component_1 = require('../kelisto/kelisto.component');
var blog_component_1 = require('../blog/blog.component');
var error_component_1 = require('../error/error.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'convy', component: convy_component_1.convyComponent },
    { path: 'meka', component: meka_component_1.mekaComponent },
    { path: 'sharemos', component: sharemos_component_1.sharemosComponent },
    { path: 'kelisto', component: kelisto_component_1.kelistoComponent },
    { path: 'blog', component: blog_component_1.blogComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.myRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=root.routes.js.map