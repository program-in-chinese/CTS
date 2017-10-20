# CTS-中文TypeScript

## 安装

最新稳定版：

```bash
npm install -g chtypescript
```

最新开发版:

```bash
npm install -g chtypescript@next
```

## 贡献

## 文档

## 构建

需要先安装[Git](https://git-scm.com/downloads) 和 [Node.js](https://nodejs.org/).

复制地址

```bash
git clone https://github.com/program-in-chinese/CTS.git
```

进入目录

```bash
cd CTS
```

安装 Gulp

```bash
npm install -g gulp
npm install
```

详细构建命了见下表:

```
gulp local            # 构建编译本地文件 built/local.
gulp clean            # 删除当前构建.
gulp LKG              # 构建通过后替换成主环境.
                      # 构建编译器稳定后要执行的引导步骤.
gulp tests            # 构建测试环境.
gulp runtests         # 暂时不支持.
gulp runtests-browser # 暂时不支持.
gulp baseline-accept  # 从运行测试中获得的结果替换基线测试结果.
gulp lint             # 执行 tslint 检查.
gulp help             # 查看相关命令.
```

## 使用

```bash
node built/local/ctsc.js hello.ts
```

## 主页

未来社区规划等其他信息: [主页](https://github.com/program-in-chinese/CTS/wiki/Home).
