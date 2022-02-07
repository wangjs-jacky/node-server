import * as http from "http";
const server = http.createServer()
// 需要安装 npm install -D @types/node (由于ts无法识别node.js文件，所以才需要下载声明文件)
import { IncomingMessage, ServerResponse } from 'http';

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    // 如何才能找到 `request` 与 `response` 的构造函数（直接打印出来）
    console.log('构造1：', request.constructor)
    console.log('构造2：', response.constructor)

    // request 的用法
    console.log('method:', request.method);
    console.log('url:', request.url);
    console.log('headers:', request.headers);

    if (request.method === "GET") {
        response.end('GET Request Completed!')
    }

    if (request.method === "POST") {
        // 创建一个空数组用于存放chunk
        const array = []
        request.on('data', (chunk) => {
            array.push(chunk)
        })
        request.on('end', () => {
            // 根据官网查阅的资料：chunk 有三种类型，但是大部分情况下还是以 Buffe r为主
            const requestBody = Buffer.concat(array).toString()
            console.log('获取请求体:', requestBody)

            // response的用法
            response.statusCode = 404;
            // 使用 setHeader 可以设置请求头(可以随意设置key-value)
            response.setHeader('X-frank', `I'm Frank`);
            response.setHeader('Content-Type', 'image/png');

            // 使用write可以分段输入
            response.write('1\n');
            response.write('1\n');
            response.write('1\n');

            // 服务端必须得给出回应，不然客户端会一直出于等待阶段
            // 需要写道回调函数内部，否则会
            response.end('hi')
        })
    }
})

server.listen(8888)
