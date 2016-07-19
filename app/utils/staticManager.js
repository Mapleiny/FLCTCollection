"use strict";
let cssTemplate = '<link rel="stylesheet" type="text/css" href="__path__" />';
let jsTemplate = '<script type="text/javascript" src="__path__"></script>';
class StaticManager {
    constructor(isDevelopeMode) {
        this.commonStatic = { css: [], js: [] };
        this.isDevelopeMode = isDevelopeMode;
    }
    setCommonStatic(cssPath, jsPath) {
        this.commonStatic.css = cssPath;
        this.commonStatic.js = jsPath;
    }
    createStatic(cssPath, jsPath) {
        cssPath = this.commonStatic.css.concat(cssPath);
        jsPath = this.commonStatic.js.concat(jsPath);
        return {
            css: this.createStaticHTML(cssPath, cssTemplate),
            js: this.createStaticHTML(jsPath, jsTemplate)
        };
    }
    createStaticHTML(paths, template) {
        let pathsHTML = [];
        paths.forEach(function (value, index, array) {
            if (value.length == 0)
                return;
            pathsHTML.push(template.replace('__path__', value.toString()));
        });
        return pathsHTML.join('\n');
    }
}
exports.StaticManager = StaticManager;
