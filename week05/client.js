// http://nodejs.cn/api/net.html#net_net_createconnection_options_connectlistener

const net = require("net")

const client = net.createConnection({ host: "127.0.0.1", port: 3000 }, () => {
    // 'connect' 监听器
    console.log("已连接到服务器")
    client.write("POST / HTTP/1.1\r\n")
    client.write("Host: 127.0.0.1\r\n")
    client.write("Content-Type: application/x-www-form-urlencoded\r\n")
    client.write("\r\n")
    client.write("name=notmaster")
    // client.write('field1=aaa&code=x%3D1\r\n');
})
client.on("data", (data) => {
    console.log(data.toString())
    client.end()
})
client.on("end", (error) => {
    console.log(error)
    console.log("已从服务器断开")
})
