import * as elm from "./getElement.js"
// 设置整个直播对话框高度
const h = document.documentElement.clientHeight||document.body.clientHeight
elm.container.style.height = h - 100 + 'px'
// 输入名字
import closeNameBox from "./closeNameBox.js"
import clientFn from "./connectServer.js"
import msgShowDoc from "./msgShowDoc.js"
import {open,sendSMS} from "./send.js"
import closePage from "./closePage.js"
let client;
// 取消
elm.cancel.onclick = function(){
    closePage()
    closeNameBox(elm.nameBox); 
}
// 确定
elm.confirm.onclick = function(){
    if(client,elm.user.value!=""){
        client = clientFn();
        client.onopen = function(){
            open(client,elm.user.value)
        }
        client.onmessage = function(msg){
            msgShowDoc(msg,elm.ul);
        }
        closeNameBox(elm.nameBox);
    }else{
        alert("请输入姓名")
    }

}
// 发送
document.onkeydown = function(e){
    let evt = e || window.event;
    if(evt.keyCode==13){
            sendSMS(client,elm.stdin)
    }
}
// 发送
elm.send.onclick = function(){
    sendSMS(client,elm.stdin);
}
















