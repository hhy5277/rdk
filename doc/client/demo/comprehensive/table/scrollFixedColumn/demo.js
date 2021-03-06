(function() {
    // 这些变量和函数的说明，请参考 rdk/app/example/web/scripts/main.js 的注释
    var imports = [
        'rd.controls.Table','css!base/css/demo','rd.attributes.theme'
    ];
    var extraModules = [ ];
    var controllerDefination = ['$scope','EventService','EventTypes', main];
    function main($scope,EventService,EventTypes) {

        $scope.setting1 = {};
        $scope.setting2 = {
            selectable:false,
            "columnDefs" :[
                {targets : 0, visible : false},
                {targets : 1, visible : false},
                {targets : 2, visible : false},
                {targets : 3, visible : false},
                {targets : 4, visible : false},
                {targets : 5, visible : false},
                {targets : 6, visible : false},
                {targets : 7, visible : false},
                {
                    title : "Detail",
                    render : '<i class="iconfont iconfont-e8b7" ng-click="appScope.click(item)"></i>'
                }
            ]
        }

        $scope.click = function(item){
            alert(angular.toJson(item));
        };

        // 同步两个表(tableHost,tableBak)的行为
        EventService.register('tableHost', EventTypes.PAGING_DATA_CHANGE, function(event, data){
            var globalSearch =rdk.tableHost.getGlobalSearch();
            rdk.tableBak.setGlobalSearch(globalSearch);
        });
        EventService.register('tableHost', EventTypes.PAGING_NUMBER_CHANGE, function(event, data){
            rdk.tableBak.setCurrentPage(data);
        });


        $scope.data = {};
        $scope.data.header = ["CellKey", "HOReqNum", "HOFailNum", "HOInFailNum", "HOOutFailNum", "S1FailNum", "X2FailNum", "eNBFailNum"];
        $scope.data.field = ["CellKey", "HOReqNum", "HOFailNum", "HOInFailNum", "HOOutFailNum", "S1FailNum", "X2FailNum", "eNBFailNum"];
        $scope.data.data = testData();

        function testData(){
            var data=[];
            for(var i=0;i<80;i++){
                var testData=[];
                for(var j=0;j<8;j++){
                    testData.push('data '+i+' , '+j);
                }
                data.push(testData);
            }
            return data;
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