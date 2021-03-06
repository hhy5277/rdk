//sample_module是在paths中定义的控制器url的别名，放在define函数中就可以让RDK去下载这个文件。
//类似的，rd.controls.Module是rdk_module的别名，由RDK预定义好，
//放在define函数中，好让RDK也去下载rdk_module的定义文件。
define('main', ['rd.controls.Module', 'rd.services.PopupService', 'SampleModule'], function() {
    //注入'rd.controls.Module'的依赖，在index.html中，只用到了rdk_module控件，
    //因此这里只需要注入对这个控件的依赖就好，模块内部的依赖由定义module的时候去声明
    //这样代码就有更好的内聚性。
    rdk.$injectDependency(['rd.controls.Module', 'rd.services.PopupService']);

    // 创建主控制器，主控制器所有所有子控制器的共同祖先。
    // 子控制器可以直接访问这个控制器中的方法和属性
    rdk.$ngModule.controller('rdk_ctrl', ['$scope', 'PopupService', function(scope, PopupService) {
        
        var moduleID;

        scope.load = function(){
            var sampleUrl = '/test/e2e/testee/popupservice/web/templates/sample.html';
            var initData = {myData: 'main controller data'};
            PopupService.popup(sampleUrl, initData, false);
        }

        scope.destroyHandler = function(){
            PopupService.removePopup(moduleID);
        }
    }]);
});
