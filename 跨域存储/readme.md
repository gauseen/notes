### 跨域本地存储

#### 测试

```shell
npm -g install http-server

# 启动 3 个不同端口的服务，模拟跨域现象
http-server -p 6000
http-server -p 6001
http-server -p 6002
```

浏览器打开如下地址：

- [http://localhost:6001/client1.html](http://localhost:6001/client1.html)
- [http://localhost:6002/client2.html](http://localhost:6002/client2.html)


