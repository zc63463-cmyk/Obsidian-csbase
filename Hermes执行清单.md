# Hermes 执行清单

给 Hermes 的最短版本，只做这些，不要自由发挥。

## 目标结构

- 内容目录：`Content/`
- Quartz 工程：`quartz/`
- 构建输出：`quartz/public/`
- Cloudflare Pages 根目录：`quartz`

## 本地检查

1. 进入 `quartz/`
2. 执行 `npm install`
3. 执行 `npm run build:cf`
4. 确认 `quartz/public/` 已生成
5. 如果构建失败，不要改 Cloudflare，先修本地

## Cloudflare Pages 配置

- Production branch：`main`
- Framework preset：`None`
- Root directory：`quartz`
- Build command：`npm install && npm run build:cf`
- Build output directory：`public`

## 不要做的事

- 不要重新创建 `quartz/content` 软链接
- 不要把 `-d` 当成输出目录
- 不要把 Root directory 配成仓库根目录
- 不要把 Build output directory 写成 `quartz/public`
- 不要把 PAT 或 token 写进仓库

## 改域名时

如果 Cloudflare 绑定了自定义域名：

1. 去 Cloudflare Pages 里绑定域名
2. 同时修改 `quartz/quartz.config.ts` 里的 `baseUrl`
3. 重新部署

## 验收标准

只有下面都满足，才算“配置完成”：

1. `npm run build:cf` 成功
2. Cloudflare Pages 构建成功
3. 首页可打开
4. 链接正常
5. 如果改了域名，`baseUrl` 已同步更新

## 遇到问题先看

- 长说明：`指导.md`
- Quartz 配置：`quartz/quartz.config.ts`
- Cloudflare 构建入口：`quartz/scripts/build-cloudflare.mjs`
