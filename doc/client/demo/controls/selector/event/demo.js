(function() {
    // 这些变量和函数的说明，请参考 rdk/app/example/web/scripts/main.js 的注释
    var imports = [
        'rd.controls.Selector'
    ];
    var extraModules = [ ];
    var controllerDefination = ['$scope','EventService','EventTypes', main];
    function main(scope,EventService,EventTypes) {
        scope.allItems = [
            { id: 0, label: "江苏省" },
            { id: 1, label: "浙江省" },
            { id: 2, label: "广东省" },

            { id: 3, label: "广西省" },
            { id: 4, label: "河北省" },

            { id: 5, label: "河南省" },
            { id: 6, label: "湖北省" },
            { id: 7, label: "湖南省" },
            { id: 8, label: "新疆省" },
            { id: 9, label: "四川省" }
        ];

        scope.groupByFun = function(item) {
            if (item.id < 3) {
                return 'theme1';
            } else if (item.id < 5) {
                return 'theme2';
            } else {
                return 'theme3';
            }
        }

        scope.dimSelectedItems = [
            { id: 1, label: "浙江省" },
            { id: 3, label: "广西省" },
            { id: 5, label: "河南省" }
        ]; //根据同一个groupBy


        EventService.register("selectorID", EventTypes.CHANGE, function(event, data) {
            console.log(data);//发生变化的那组
        });

        scope.changeSelectedItems = function(){
            EventService.broadcast("selectorID", EventTypes.SELECT, [{ id: 7, label: "湖南省" }, { id: 8, label: "新疆省" }, { id: 9, label: "四川省" }]);
        }

        scope.close = function(){
            EventService.broadcast("selectorID", EventTypes.CLOSE);
        }

        scope.open = function(){
            EventService.broadcast("selectorID", EventTypes.OPEN);
        }
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