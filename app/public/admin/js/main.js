var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("login/login", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let Login = class Login {
            };
            Login = __decorate([
                core_1.Component({
                    'selector': 'login.login',
                    'templateUrl': 'template/login.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Login);
            exports_1("Login", Login);
        }
    }
});
System.register("desktop/header", ['angular2/core', 'angular2/router'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, router_1;
    var Header;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let Header = class Header {
                constructor() {
                }
            };
            Header = __decorate([
                core_2.Component({
                    'selector': 'page-header',
                    'templateUrl': 'template/header.html',
                    'directives': [router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [])
            ], Header);
            exports_2("Header", Header);
        }
    }
});
System.register("desktop/editor/editorManager", ['angular2/core', 'angular2/http', 'rxjs/add/operator/toPromise'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, http_1;
    var EditorManager;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let EditorManager = class EditorManager {
                constructor(http) {
                    this.http = http;
                    this.postUrl = '/api/post';
                }
                extractData(res) {
                    let body = res.json();
                    return body || {};
                }
                handleError(error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                }
                post(content) {
                    let body = JSON.stringify(content);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http
                        .post(this.postUrl, body, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
                    ;
                }
            };
            EditorManager = __decorate([
                core_3.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], EditorManager);
            exports_3("EditorManager", EditorManager);
        }
    }
});
System.register("desktop/editor/editor", ['angular2/core', "desktop/editor/editorManager"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, editorManager_1;
    var Editor;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (editorManager_1_1) {
                editorManager_1 = editorManager_1_1;
            }],
        execute: function() {
            // import * as wysihtml5 from 'wysihtml5'
            let Editor = class Editor {
                constructor(editorManager) {
                    this.editorManager = editorManager;
                }
                ngAfterViewInit() {
                    tinymce.init({
                        selector: '#editor-container .editor textarea',
                        height: 300,
                        plugins: [
                            'advlist autolink lists link image preview anchor',
                            'searchreplace code fullscreen',
                            'insertdatetime media table contextmenu code textcolor'
                        ],
                        toolbar: 'bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        // skin_url:'/admin/css',
                        skin: 'cool',
                        statusbar: false,
                        menubar: false
                    });
                    // console.log(tinymce.Editor.schema.getCustomElements());
                }
                post() {
                    this.postContent = tinymce.activeEditor.getContent();
                    this.editorManager.post({
                        title: this.postTitle,
                        content: this.postContent
                    }).then(function (data) {
                        console.log(data);
                    });
                }
            };
            Editor = __decorate([
                core_4.Component({
                    selector: 'editor.editor',
                    templateUrl: 'template/editor.html',
                    providers: [editorManager_1.EditorManager]
                }), 
                __metadata('design:paramtypes', [editorManager_1.EditorManager])
            ], Editor);
            exports_4("Editor", Editor);
        }
    }
});
System.register("desktop/navigation", ['angular2/core', 'angular2/router'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_5, router_2;
    var Navigation;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            let Navigation = class Navigation {
                constructor(router) {
                    this.router = router;
                }
            };
            Navigation = __decorate([
                core_5.Component({
                    'selector': 'navigation',
                    'templateUrl': 'template/navigation.html',
                    'directives': [router_2.RouterLink]
                }), 
                __metadata('design:paramtypes', [router_2.Router])
            ], Navigation);
            exports_5("Navigation", Navigation);
        }
    }
});
System.register("desktop/panel/dashboard", ['angular2/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_6;
    var Dashboard;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            let Dashboard = class Dashboard {
            };
            Dashboard = __decorate([
                core_6.Component({
                    'selector': 'dashboard.dashboard',
                    'templateUrl': 'template/dashboard.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Dashboard);
            exports_6("Dashboard", Dashboard);
        }
    }
});
System.register("desktop/panel/article", ['angular2/core'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_7;
    var Article;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            let Article = class Article {
            };
            Article = __decorate([
                core_7.Component({
                    'selector': 'article.article',
                    'templateUrl': 'template/article.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Article);
            exports_7("Article", Article);
        }
    }
});
System.register("desktop/panel/panel", ['angular2/core', 'angular2/router', "desktop/navigation", "desktop/panel/dashboard", "desktop/panel/article"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_8, router_3, navigation_1, dashboard_1, article_1;
    var Panel;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            let Panel = class Panel {
                constructor(router) {
                    this.router = router;
                }
            };
            Panel = __decorate([
                core_8.Component({
                    'selector': 'panel',
                    'templateUrl': 'template/panel.html',
                    'directives': [router_3.RouterLink, router_3.ROUTER_DIRECTIVES, navigation_1.Navigation]
                }),
                router_3.RouteConfig([
                    { path: '/', component: dashboard_1.Dashboard, as: 'Dashboard', useAsDefault: true },
                    { path: '/article', component: article_1.Article, as: 'Article' }
                ]), 
                __metadata('design:paramtypes', [router_3.Router])
            ], Panel);
            exports_8("Panel", Panel);
        }
    }
});
System.register("desktop/desktop", ['angular2/core', 'angular2/router', "desktop/header", "desktop/editor/editor", "desktop/panel/panel"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_9, router_4, header_1, editor_1, panel_1;
    var Desktop;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (editor_1_1) {
                editor_1 = editor_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            }],
        execute: function() {
            let Desktop = class Desktop {
                constructor(router) {
                    this.router = router;
                }
            };
            Desktop = __decorate([
                core_9.Component({
                    'selector': 'desktop.desktop',
                    'templateUrl': 'template/desktop.html',
                    'directives': [router_4.RouterLink, router_4.ROUTER_DIRECTIVES, header_1.Header],
                }),
                router_4.RouteConfig([
                    { path: '/...', component: panel_1.Panel, as: 'Panel', useAsDefault: true },
                    { path: '/editor', component: editor_1.Editor, as: 'Editor' },
                ]), 
                __metadata('design:paramtypes', [router_4.Router])
            ], Desktop);
            exports_9("Desktop", Desktop);
        }
    }
});
System.register("app", ['angular2/core', 'angular2/router', "login/login", "desktop/desktop"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_10, router_5, login_1, desktop_1;
    var App;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (desktop_1_1) {
                desktop_1 = desktop_1_1;
            }],
        execute: function() {
            let App = class App {
                constructor(router) {
                    this.router = router;
                }
            };
            App = __decorate([
                core_10.Component({
                    'selector': 'body',
                    'templateUrl': 'template/main.html',
                    'directives': [router_5.RouterLink, router_5.ROUTER_DIRECTIVES]
                }),
                router_5.RouteConfig([
                    { path: '/Login', component: login_1.Login, as: 'Login', useAsDefault: true },
                    { path: '/...', component: desktop_1.Desktop, as: 'Desktop' }
                ]), 
                __metadata('design:paramtypes', [router_5.Router])
            ], App);
            exports_10("App", App);
        }
    }
});
System.config({
    'paths': {
        'main': '/admin/js/main',
        'template': '/admin/template'
    },
    'packages': {
        'dist': {
            'format': 'amd',
            'defaultExtension': 'js'
        }
    }
});
System.import('main');
System.register("main", ['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', "app"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var browser_1, core_11, router_6, http_2, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [router_6.ROUTER_PROVIDERS, http_2.HTTP_PROVIDERS, core_11.provide(router_6.LocationStrategy, { useClass: router_6.HashLocationStrategy })]);
        }
    }
});
