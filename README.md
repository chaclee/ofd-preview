# OFD 文件在线预览

基于 React + Ant Design 构建的 OFD 文档在线预览工具。

## 技术栈

- React 18
- Ant Design 5
- Vite 5
- OFD.js

## 功能特性

- 🎨 现代化的 UI 设计，使用 Ant Design 组件库
- 📂 支持拖拽上传 OFD 文件
- 👀 实时预览 OFD 文档
- 📱 响应式设计，支持移动端
- ⚡ 快速的构建和开发体验（基于 Vite）

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 http://localhost:3000 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
ofd-preview/
├── src/
│   ├── main.jsx          # 应用入口
│   ├── App.jsx           # 主组件
│   ├── App.css           # 组件样式
│   └── index.css         # 全局样式
├── index.html            # HTML 模板
├── vite.config.js        # Vite 配置
├── package.json          # 项目配置
├── ofd.umd.js           # OFD 库（UMD 格式）
└── ofd.common.js        # OFD 库（CommonJS 格式）
```

## 使用说明

1. 访问应用
2. 点击上传区域或拖拽 OFD 文件到上传区域
3. 等待文件加载
4. 在预览区域查看文档内容

## License

MIT
