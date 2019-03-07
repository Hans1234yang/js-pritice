function Feibolaqi(n) {
    return n <= 2 ? 1 : Feibolaqi(n - 1) + Feibolaqi(n - 2);
}

//这里的event 是可以接受 主线程向分线程 发送的数据
var omessage = function (evnet) {
    var theValue = event.data;

    console.log("分线程从主线程收到的 数据是" + theValue);

    var result = Feibolaqi(theValue);

    postMessage(result);
    console.log("分线程 往 主线程发送的数据是" + result);
    
}