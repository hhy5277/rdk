(function() {
    // 这些变量和函数的说明，请参考 rdk/app/example/web/scripts/main.js 的注释
    var imports = [
        'rd.controls.AreaSelect', 'rd.controls.ComboSelect', 'rd.controls.Icon','css!rd.styles.IconFonts','rd.attributes.theme',
        'css!base/css/demo'
    ];
    var extraModules = [ ];
    var controllerDefination = ['$scope', main];
    function main(scope ) {
        scope.alert=function(d){
            alert(d)
        };
        scope.resultData1={
            province:{name:"四川",code:"1"},
            city:{name:"成都",code:"2"},
            area:{name:"金牛区",code:"3"}
        };
        scope.resultData2={
            province:{name:"四川",code:"1"},
            city:{name:"成都",code:"2"},
            area:{name:"金牛区",code:"3"}
        };
        scope.resultData3={
            province:{name:"四川",code:"1"},
            city:{name:"成都",code:"2"},
            area:{name:"金牛区",code:"3"}
        };
    }

    var controllerName = 'DemoController';
    //==========================================================================
    //                 从这里开始的代码、注释请不要随意修改
    //==========================================================================
    define(/*fix-from*/application.import(imports)/*fix-to*/, start);
    function start() {
        application.initImports(imports, arguments);
        rdk.$injectDependency(application.getComponents(extraModules, imports));
        rdk.$ngModule.controller(controllerName, controllerDefination);
    }
})();