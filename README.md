# node-server
使用node搭建静态服务器

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
在chrome 直接输入 http://localhost:8888
