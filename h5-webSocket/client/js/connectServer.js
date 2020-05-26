// 连接服务器
const port = 9000
const host = "localhost"
const serverURL = `ws://${host}:${port}`
export default function(){
    const client = new WebSocket(serverURL)
    return client
}