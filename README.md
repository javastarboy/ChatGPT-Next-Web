<div align="center">

<a href='https://nextchat.dev/chat'>
  <img src="https://github.com/user-attachments/assets/287c510f-f508-478e-ade3-54d30453dc18" width="1000" alt="icon"/>
</a>

<h1 align="center">NextChat (ChatGPT Next Web)</h1>

简体中文 / [English](./README_EN.md)

一键免费部署你的私人 ChatGPT 网页应用，支持 GPT3, GPT4 & Gemini Pro 模型。

[演示Demo](https://next.jsbcp-3.top/#/) / [AI工具集导航](https://tools.lhagi.com/) / [领航AGI聚合平台](https://javastarboy.com/) / [AI全栈通识教程](https://www.yuque.com/lhyyh/agi/introduce) / [加入我们](https://www.yuque.com/lhyyh/ai/conactus)

[<img src="https://vercel.com/button" alt="Deploy on Zeabur" height="30">](https://vercel.com/new/clone?repository-url=https://github.com/javastarboy/ChatGPT-Next-Web&env=OPENAI_API_KEY&env=CODE&project-name=nextchat&repository-name=NextChat) [<img src="https://zeabur.com/button.svg" alt="Deploy on Zeabur" height="30">](https://zeabur.com/templates/ZBUEFA) 
</div>

## 领航AGI聚合平台

满足您个人\公司大模型聚合 API 中转、私有化部署和定制需求
- **品牌定制**：AI模型接口管理与分发系统，支持将多种大模型转为OpenAI格式调用、支持 Midjourney Proxy、Suno、Rerank。
- **资源集成**：由企业管理人员统一配置和管理数十种 AI 资源，团队成员开箱即用
- **支持模型**：OpenAI GPT、Claude、Gemini、文心一言、通义千问、讯飞星火、智谱GLM、Midjourney、Suno、Rerank等主流模型。
- **智能体**：基于 RAG 与 Agent 技术的企业内部知识库与 AI 能力相结合，比通用 AI 更贴近企业自身业务需求
- **安全审计**：自动拦截敏感提问，支持追溯全部历史对话记录，让 AI 也能遵循企业信息安全规范
- **私有部署**：企业级私有部署，支持各类主流私有云部署，确保数据安全和隐私保护
- **持续更新**：提供多模态、智能体等前沿能力持续更新升级服务，常用常新、持续先进

咨询微信: **LHYYH0001**

<img width="300" src="https://oss.javastarboy.com/agi/%E4%B8%AA%E4%BA%BA%E4%BC%81%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.png">

## 开始使用

1. 准备好你的 [OpenAI API Key](https://javastarboy.com/);
2. 点击右侧按钮开始部署：
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/javastarboy/ChatGPT-Next-Web&env=OPENAI_API_KEY&env=CODE&project-name=nextchat&repository-name=NextChat)，直接使用 Github 账号登录即可，记得在环境变量页填入 API Key 和[页面访问密码](#配置页面访问密码) CODE；
3. 部署完毕后，即可开始使用；
4. （可选）[绑定自定义域名](https://vercel.com/docs/concepts/projects/domains/add-a-domain)：Vercel 分配的域名 DNS 在某些区域被污染了，绑定自定义域名即可直连。

<div align="center">
   
![主界面](./docs/images/cover.png)

</div>

## 保持更新

如果你按照上述步骤一键部署了自己的项目，可能会发现总是提示“存在更新”的问题，这是由于 Vercel 会默认为你创建一个新项目而不是 fork 本项目，这会导致无法正确地检测更新。
推荐你按照下列步骤重新部署：

- 删除掉原先的仓库；
- 使用页面右上角的 fork 按钮，fork 本项目；
- 在 Vercel 重新选择并部署，[请查看详细教程](./docs/vercel-cn.md#如何新建项目)。

### 打开自动更新

> 如果你遇到了 Upstream Sync 执行错误，请[手动 Sync Fork 一次](./README_CN.md#手动更新代码)！

当你 fork 项目之后，由于 Github 的限制，需要手动去你 fork 后的项目的 Actions 页面启用 Workflows，并启用 Upstream Sync Action，启用之后即可开启每小时定时自动更新：

![自动更新](./docs/images/enable-actions.jpg)

![启用自动更新](./docs/images/enable-actions-sync.jpg)

### 手动更新代码

如果你想让手动立即更新，可以查看 [Github 的文档](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) 了解如何让 fork 的项目与上游代码同步。

- [x] 为每个对话设置系统 Prompt [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] 允许用户自行编辑内置 Prompt 列表
- [x] 预制角色：使用预制角色快速定制新对话 [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] 分享为图片，分享到 ShareGPT 链接 [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] 使用 tauri 打包桌面应用
- [x] 支持自部署的大语言模型：开箱即用 [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) ，服务端部署 [LocalAI 项目](https://github.com/go-skynet/LocalAI) llama / gpt4all / rwkv / vicuna / koala / gpt4all-j / cerebras / falcon / dolly 等等，或者使用 [api-for-open-llm](https://github.com/xusenlinzy/api-for-open-llm)
- [x] Artifacts: 通过独立窗口，轻松预览、复制和分享生成的内容/可交互网页 [#5092](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/pull/5092)
- [x] 插件机制，支持`联网搜索`、`计算器`、调用其他平台 api [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165) [#5353](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5353)
   - [x] 支持联网搜索、计算器、调用其他平台 api [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165) [#5353](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5353)
 - [x] 支持 Realtime Chat [#5672](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5672)
 - [ ] 本地知识库

## 最新动态
- 🚀 v2.15.8 现在支持Realtime Chat [#5672](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5672)
- 🚀 v2.15.4 客户端支持Tauri本地直接调用大模型API，更安全！[#5379](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/5379)
- 🚀 v2.15.0 现在支持插件功能了！了解更多：[NextChat-Awesome-Plugins](https://github.com/ChatGPTNextWeb/NextChat-Awesome-Plugins)
- 🚀 v2.14.0 现在支持 Artifacts & SD 了。
- 🚀 v2.10.1 现在支持 Gemini Pro 模型。
- 🚀 v2.9.11 现在可以使用自定义 Azure 服务了。
- 🚀 v2.8 发布了横跨 Linux/Windows/MacOS 的体积极小的客户端。
- 🚀 v2.7 现在可以将会话分享为图片了，也可以分享到 ShareGPT 的在线链接。
- 🚀 v2.0 已经发布，现在你可以使用面具功能快速创建预制对话了！ 了解更多： [ChatGPT 提示词高阶技能：零次、一次和少样本提示](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)。
- 💡 想要更方便地随时随地使用本项目？可以试下这款桌面插件：https://github.com/mushan0x0/AI0x0.com

你可以 star/watch 本项目或者 follow 作者来及时获得新功能更新通知。

## 配置页面访问密码

> 配置密码后，用户需要在设置页手动填写访问码才可以正常聊天，否则会通过消息提示未授权状态。

> **警告**：请务必将密码的位数设置得足够长，最好 7 位以上，否则[会被爆破](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/518)。

本项目提供有限的权限控制功能，请在 Vercel 项目控制面板的环境变量页增加名为 `CODE` 的环境变量，值为用英文逗号分隔的自定义密码：

```
code1,code2,code3
```

增加或修改该环境变量后，请**重新部署**项目使改动生效。

## 环境变量

> 本项目大多数配置项都通过环境变量来设置，教程：[如何修改 Vercel 环境变量](./docs/vercel-cn.md)。

### `OPENAI_API_KEY` （必填项）

OpanAI 密钥，你在 openai 账户页面申请的 api key，使用英文逗号隔开多个 key，这样可以随机轮询这些 key。

### `CODE` （可选）

访问密码，可选，可以使用逗号隔开多个密码。

**警告**：如果不填写此项，则任何人都可以直接使用你部署后的网站，可能会导致你的 token 被急速消耗完毕，建议填写此选项。

### `BASE_URL` （可选）

> Default: `https://api.openai.com`

> Examples: `http://your-openai-proxy.com`

OpenAI 接口代理 URL，如果你手动配置了 openai 接口代理，请填写此选项。

> 如果遇到 ssl 证书问题，请将 `BASE_URL` 的协议设置为 http。

### `OPENAI_ORG_ID` （可选）

指定 OpenAI 中的组织 ID。

### `AZURE_URL` （可选）

> 形如：https://{azure-resource-url}/openai

Azure 部署地址。

### `AZURE_API_KEY` （可选）

Azure 密钥。

### `AZURE_API_VERSION` （可选）

Azure Api 版本，你可以在这里找到：[Azure 文档](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions)。

### `GOOGLE_API_KEY` (可选)

Google Gemini Pro 密钥.

### `GOOGLE_URL` (可选)

Google Gemini Pro Api Url.

### `ANTHROPIC_API_KEY` (可选)

anthropic claude Api Key.

### `ANTHROPIC_API_VERSION` (可选)

anthropic claude Api version.

### `ANTHROPIC_URL` (可选)

anthropic claude Api Url.

### `BAIDU_API_KEY` (可选)

Baidu Api Key.

### `BAIDU_SECRET_KEY` (可选)

Baidu Secret Key.

### `BAIDU_URL` (可选)

Baidu Api Url.

### `BYTEDANCE_API_KEY` (可选)

ByteDance Api Key.

### `BYTEDANCE_URL` (可选)

ByteDance Api Url.

### `ALIBABA_API_KEY` (可选)

阿里云（千问）Api Key.

### `ALIBABA_URL` (可选)

阿里云（千问）Api Url.

### `IFLYTEK_URL` (可选)

讯飞星火Api Url.

### `IFLYTEK_API_KEY` (可选)

讯飞星火Api Key.

### `IFLYTEK_API_SECRET` (可选)

讯飞星火Api Secret.

### `CHATGLM_API_KEY` (optional)

ChatGLM Api Key.

### `CHATGLM_URL` (optional)

ChatGLM Api Url.

### `DEEPSEEK_API_KEY` (optional)

DeepSeek Api Key.

### `DEEPSEEK_URL` (optional)

DeepSeek Api Url.

### `HIDE_USER_API_KEY` (optional)


### `HIDE_USER_API_KEY` （可选）

如果你不想让用户自行填入 API Key，将此环境变量设置为 1 即可。

### `DISABLE_GPT4` （可选）

如果你不想让用户使用 GPT-4，将此环境变量设置为 1 即可。

### `ENABLE_BALANCE_QUERY` （可选）

如果你想启用余额查询功能，将此环境变量设置为 1 即可。

### `DISABLE_FAST_LINK` （可选）

如果你想禁用从链接解析预制设置，将此环境变量设置为 1 即可。

### `WHITE_WEBDAV_ENDPOINTS` (可选)

如果你想增加允许访问的webdav服务地址，可以使用该选项，格式要求：
- 每一个地址必须是一个完整的 endpoint
> `https://xxxx/xxx`
- 多个地址以`,`相连

### `CUSTOM_MODELS` （可选）

> 示例：`+qwen-7b-chat,+glm-6b,-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo` 表示增加 `qwen-7b-chat` 和 `glm-6b` 到模型列表，而从列表中删除 `gpt-3.5-turbo`，并将 `gpt-4-1106-preview` 模型名字展示为 `gpt-4-turbo`。
> 如果你想先禁用所有模型，再启用指定模型，可以使用 `-all,+gpt-3.5-turbo`，则表示仅启用 `gpt-3.5-turbo`

用来控制模型列表，使用 `+` 增加一个模型，使用 `-` 来隐藏一个模型，使用 `模型名=展示名` 来自定义模型的展示名，用英文逗号隔开。

在Azure的模式下，支持使用`modelName@Azure=deploymentName`的方式配置模型名称和部署名称(deploy-name)
> 示例：`+gpt-3.5-turbo@Azure=gpt35`这个配置会在模型列表显示一个`gpt35(Azure)`的选项。
> 如果你只能使用Azure模式，那么设置 `-all,+gpt-3.5-turbo@Azure=gpt35` 则可以让对话的默认使用 `gpt35(Azure)`

在ByteDance的模式下，支持使用`modelName@bytedance=deploymentName`的方式配置模型名称和部署名称(deploy-name)
> 示例: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx`这个配置会在模型列表显示一个`Doubao-lite-4k(ByteDance)`的选项


### `DEFAULT_MODEL` （可选）

更改默认模型


### `VISION_MODELS` (optional)

> Default: Empty
> Example: `gpt-4-vision,claude-3-opus,my-custom-model` means add vision capabilities to these models in addition to the default pattern matches (which detect models containing keywords like "vision", "claude-3", "gemini-1.5", etc).

Add additional models to have vision capabilities, beyond the default pattern matching. Multiple models should be separated by commas.

### `WHITE_WEBDAV_ENDPOINTS` (optional)

自定义默认的 template，用于初始化『设置』中的『用户输入预处理』配置项

### `STABILITY_API_KEY` (optional)

Stability API密钥

### `STABILITY_URL` (optional)

自定义的Stability API请求地址


## 开发

在开始写代码之前，需要在项目根目录新建一个 `.env.local` 文件，里面填入环境变量：

```
OPENAI_API_KEY=<your api key here>

# 中国大陆用户，可以使用本项目自带的代理进行开发，你也可以自由选择其他代理地址
BASE_URL=https://b.nextweb.fun/api/proxy
```

### 本地开发

1. 安装 nodejs 18 和 yarn，具体细节请询问 ChatGPT；
2. 执行 `yarn install && yarn dev` 即可。⚠️ 注意：此命令仅用于本地开发，不要用于部署！
3. 如果你想本地部署，请使用 `yarn install && yarn build && yarn start` 命令，你可以配合 pm2 来守护进程，防止被杀死，详情询问 ChatGPT。

## 部署

### 容器部署 （推荐）

### BT Install
> [简体中文 > 如何通过宝塔一键部署](./docs/bt-cn.md)

### Docker (Recommended)

```shell
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY=sk-xxxx \
   -e CODE=页面访问密码 \
   yidadaa/chatgpt-next-web
```

你也可以指定 proxy：

```shell
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY=sk-xxxx \
   -e CODE=页面访问密码 \
   --net=host \
   -e PROXY_URL=http://127.0.0.1:7890 \
   yidadaa/chatgpt-next-web
```

如果你的本地代理需要账号密码，可以使用：

```shell
-e PROXY_URL="http://127.0.0.1:7890 user password"
```

如果你需要指定其他环境变量，请自行在上述命令中增加 `-e 环境变量=环境变量值` 来指定。

### 本地部署

在控制台运行下方命令：

```shell
bash <(curl -s https://raw.githubusercontent.com/Yidadaa/ChatGPT-Next-Web/main/scripts/setup.sh)
```

⚠️ 注意：如果你安装过程中遇到了问题，请使用 docker 部署。

## 鸣谢

[项目贡献者列表](https://github.com/Yidadaa/ChatGPT-Next-Web/graphs/contributors)

### 相关项目

- [one-api](https://github.com/songquanpeng/one-api): 一站式大模型额度管理平台，支持市面上所有主流大语言模型
- [one-hub](https://github.com/javastarboy/one-hub): 升级优化版

## 联系我们（@AGI舰长，备注：new-hub）

<table>
  <tr>
    <td align="center">
      <picture>
        <img height="300" src="https://oss.javastarboy.com/agi/%E4%B8%AA%E4%BA%BA%E4%BC%81%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.png">
      </picture>
      <br/>
      （微信号）
    </td>
    <td align="center">
      <picture>
        <img height="300" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4.png">
      </picture>
      <br/>
      （AI全栈交流群）
    </td>
  </tr>
</table>

## 请我喝咖啡
如果您觉得对您有所帮助，欢迎您的赞助。您的支持将使我有更多的动力继续维护和改进这个项目。
您可以通过扫描下面的二维码来请我喝杯咖啡：


<table>
  <tr>
    <td align="center">
      <picture>
        <img height="400" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81.jpeg">
      </picture>
    </td>
    <td align="center">
      <picture>
        <img height="400" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.jpeg">
      </picture>

    </td>
  </tr>
</table>

## 开源协议

[MIT](https://opensource.org/license/mit/)
