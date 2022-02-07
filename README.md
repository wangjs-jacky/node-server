# node-server
使用node搭建静态服务器

## 核心知识点

1. 客户端：`curl` 简单使用方法

2. 服务端： 简单来说就是如何获取 `curl -v` 的内容。
   - `request`与`response`的常用属性和方法的使用
   
   > 难点：`POST`请求内容的获取，需要知道传递的数据类型是 `chunk:Buffer`，需要使用`Buffer.concat(array).toString()`进行拼接后显示。

## 使用方式
### 1. 终端输入
```shell
npm run dev
```

### 2. 客户端

2.1 终端输入
```shell
# -v 客户端打印出 请求头(终端>)+响应体(终端<)
curl -v http://localhost:8888

# -d 可以将 GET 请求转变为 POST请求
curl -v -d "name=wangjiasheng" http://localhost:8888
```

2.2 浏览器发出GET请求
在`chrome` 直接输入 http://localhost:8888
