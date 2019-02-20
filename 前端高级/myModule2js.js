//应用了 匿名函数 自调用的原来

(function () {
    var msg = 'Hello ,';

    function doSomething() {
        console.log(msg + '  携程旅游');
    }
    function doOtherthing() {
        console.log(msg + '  oppo手机');
    }

    //直接给window上下文添加属性. 把要添加的方法，添加到这里
    window.myModule2 = {
        something: doSomething,
        Otherthing: doOtherthing
    };

})();