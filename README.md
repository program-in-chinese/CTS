# CtsScript
CtsScript 是中文版 TypeScript 是 JavaScript 的类型化超集
CtsScript 基于 TypeScript v 2.8.3

## 文档
复制项目
需要先安装Git 和 Node.js.
- 复制地址

```bash
git clone https://github.com/program-in-chinese/CTS.git
```

- 进入目录

```
cd CTS
```
- 安装 Gulp
```bash
npm install -g gulp
npm install
```
---
## 构建命令

```bash
gulp local            # 构建编译本地文件 built/local.
gulp clean            # 删除当前构建.
gulp LKG              # 构建通过后替换成主环境.
                      # 构建编译器稳定后要执行的引导步骤.
gulp tests            # 构建测试环境.
gulp runtests         # 运行单元测试.
gulp runtests-browser # 浏览器环境运行测试.
gulp baseline-accept  # 从运行测试中获得的结果替换基线测试结果.
gulp lint             # 执行 tslint 检查.
gulp help             # 查看相关命令.
```
---
# 使用发布版本

```bash
  npm install -g ctsscript
```
- ## 初始化项目
```bash
cts --init
```
- ## 文件扩展名
```js
"*.cts","*.ctsx","*.d.cts"
```
- ## 安装专用类型文件
> 举例: 使用 @types-zh-cn 前缀
```bash
    npm install @types-zh-cn/node
```
- ## 其他
> 更新中 . . .