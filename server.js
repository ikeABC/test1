// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8065;  // 默认端口 8065，支持从环境变量中获取

// 定义根路径的请求处理
app.get('/', (req, res) => {
  res.send('Hello, this server is listening on the port!');
});

// 启动服务器并监听端口
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
