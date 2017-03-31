# 指定基础镜像
FROM node:latest

# 指定维护者信息
MAINTAINER bdk

# 切换工作目录
WORKDIR /usr/src

# 下载项目
RUN git clone https://github.com/zxy6173/manage-front.git

# 切换到项目根目录
WORKDIR /usr/src/manage-front

# 设置npm的下载源
RUN npm config set registry=https://registry.npm.taobao.org

#下载依赖包
RUN npm install

#当容器启动时部署项目
CMD npm start
