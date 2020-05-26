
// 第一次连接好服务器之后的发送
export function open(client,name) {
    window.userName = name;
    window.isFirst = true;
    client.send(`${window.userName}进入了直播室`)
  }

// 发送信息的函数
export function sendSMS (client,stdin) {
  const val = stdin.value
  if(val!=""){
    client.send( val )
    stdin.value = ''
  }

}