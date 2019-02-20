function myModele() {   //34闭包的应用1 
    //私有数据
    var msg = 'Hello World';

    function doSomethin() {
        console.log(msg+'携程旅游');
    }
    function doOtherthing() {
        console.log(msg+'京东购购物');
    }


    //希望在闭包中，不仅仅返回一个函数，而是要返回2个函数
    //那就返回对象咯


    //对外暴露对象(给外部使用)
    return {
        something: doSomethin,
        otherthing: doOtherthing
    }
}