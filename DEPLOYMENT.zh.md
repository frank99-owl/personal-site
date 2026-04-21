# Deployment Guide (Chinese)

本指南假设你还没配置过本地 GitHub 连接。跟着一步步做就行。

---

## 一、配置 Git 身份（一次性，以后永久生效）

打开终端（Terminal），执行：

```bash
git config --global user.name "Frank"
git config --global user.email "你的GitHub邮箱"
```

把 `你的GitHub邮箱` 换成你 GitHub 注册时用的邮箱。验证：

```bash
git config --global --list | grep user
```

看到名字和邮箱即成功。

---

## 二、生成 SSH Key 并绑定到 GitHub

SSH Key 是本地机器和 GitHub 之间的"身份证"，配一次，以后 push 不用输密码。

### 1. 生成密钥

```bash
ssh-keygen -t ed25519 -C "你的GitHub邮箱"
```

一路按回车（默认路径、空密码都可以）。生成两个文件：
- `~/.ssh/id_ed25519`（私钥，不要外传）
- `~/.ssh/id_ed25519.pub`（公钥，要贴给 GitHub）

### 2. 复制公钥

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

这条命令会把公钥复制到剪贴板（macOS 专用）。

### 3. 贴到 GitHub

1. 浏览器打开 https://github.com/settings/keys
2. 点 **New SSH key**
3. Title 随便起（比如 `Frank's Mac`），Key 那里粘贴（Cmd+V）
4. 点 **Add SSH key** 保存

### 4. 测试连接

```bash
ssh -T git@github.com
```

第一次会问 "Are you sure...?" → 输 `yes` 回车。如果看到：

```
Hi 你的用户名! You've successfully authenticated...
```

✅ 成功。

---

## 三、把代码推到 GitHub

### 1. 在 GitHub 创建新仓库

1. 打开 https://github.com/new
2. Repository name：`personal-site`（或你想要的名字）
3. Public / Private 都行（Public 的话大家都能看到源码）
4. **不要勾**任何初始化选项（README、.gitignore、License 都不要）
5. 点 **Create repository**

GitHub 会给你一个页面，上面有命令。我们用下面的流程：

### 2. 本地初始化并推送

在项目目录下执行：

```bash
cd /Users/frank/Desktop/Web
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin git@github.com:你的用户名/personal-site.git
git push -u origin main
```

把 `你的用户名` 换成你 GitHub 的用户名。

如果显示一堆文件被添加、push 成功，刷新 GitHub 仓库页面就能看到你的代码了。

---

## 四、用 Vercel 部署

Vercel 会监听你的 GitHub 仓库，每次 push 自动重新部署。

### 1. 登录 Vercel

打开 https://vercel.com → 点 **Sign Up** / **Log In** → 选 **Continue with GitHub** → 授权。

### 2. 导入项目

1. 登录后点 **Add New... → Project**
2. 找到 `personal-site` 仓库，点 **Import**
3. Framework Preset 会自动识别为 **Next.js** ✅
4. 其他设置不用动，直接点 **Deploy**
5. 等 1-2 分钟，构建完成

### 3. 拿到线上地址

部署成功后会显示一个 `xxx.vercel.app` 的链接，打开就是你的网站 🎉

---

## 五、后续日常维护

改完代码后：

```bash
cd /Users/frank/Desktop/Web
git add .
git commit -m "描述你改了啥"
git push
```

**push 后 1 分钟内 Vercel 自动重新部署**，访客打开网站就能看到最新版。

---

## 六、（可选）绑定自定义域名

买个域名（阿里云、Namecheap、GoDaddy 都行），在 Vercel 项目设置里：

1. Settings → Domains
2. 输入你买的域名（比如 `frank.dev`）
3. Vercel 会告诉你在域名注册商那里添加什么 DNS 记录
4. 按提示添加 DNS 记录，等几分钟到几小时生效

SSL 证书 Vercel 自动签发，你不用管。

---

## 遇到问题？

- **`git push` 报错 "Permission denied"**：回到第二步检查 SSH key 是否配好
- **Vercel 构建失败**：本地先跑 `npm run build` 看错误在哪，修好再 push
- **改了代码网站没变**：等 1-2 分钟；或去 Vercel 仪表盘看 Deployments 列表是否有新部署
