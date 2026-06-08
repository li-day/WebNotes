# Claude Code 常用指令速查表

## 基础操作

| 指令 | 说明 |
|------|------|
| `claude` | 启动交互式会话 |
| `claude "你的问题"` | 单次提问模式 |
| `claude -p "提示词"` | 以管道模式运行，输出纯文本 |
| `claude -c` | 继续上一次对话 |
| `claude -r` | 恢复最近一次会话 |
| `claude --model <model>` | 指定模型（如 `sonnet`、`opus`、`haiku`） |
| `claude -h` | 查看帮助信息 |

## 会话内斜杠命令

| 命令 | 说明 |
|------|------|
| `/help` | 查看帮助 |
| `/clear` | 清除当前会话上下文 |
| `/compact` | 压缩对话历史，释放上下文窗口 |
| `/compact <提示>` | 压缩时保留特定关注的上下文 |
| `/cost` | 显示当前会话的 token 用量和费用 |
| `/quit` 或 `/exit` | 退出 Claude Code |
| `/fast` | 切换快速模式（同一模型，输出更快） |
| `/model` | 切换模型 |
| `/permissions` | 查看和管理权限设置 |
| `/status` | 查看当前状态信息 |
| `/memory` | 查看和编辑 CLAUDE.md 记忆文件 |

## 文件与代码操作

| 指令示例 | 说明 |
|----------|------|
| `读取 src/main.ts` | 让 Claude 读取并分析文件 |
| `搜索 "TODO" 在 src/ 目录` | 搜索代码内容 |
| `帮我重构 src/utils.ts` | 重构指定文件 |
| `解释这段代码` | 粘贴代码让 Claude 解释 |
| `帮我写单元测试` | 为当前代码生成测试 |
| `修复这个 bug` | 描述 bug 让 Claude 修复 |

## Git 与 GitHub 操作

| 指令示例 | 说明 |
|----------|------|
| `帮我提交代码` | 自动生成 commit message 并提交 |
| `/commit` | 使用 commit skill 提交 |
| `创建一个 PR` | 创建 Pull Request |
| `查看 PR #123` | 查看 PR 详情 |
| `帮我 review 代码` | 代码审查 |
| `查看 git 日志` | 查看提交历史 |

## 多代理 (Agent) 操作

| 指令示例 | 说明 |
|----------|------|
| `用 planner 规划这个功能` | 使用规划代理 |
| `用 code-reviewer 审查代码` | 使用代码审查代理 |
| `用 tdd-guide 开发` | 测试驱动开发 |
| `用 security-reviewer 检查安全` | 安全审查代理 |
| `并行分析性能和安全` | 并行启动多个代理 |

## 项目配置

### CLAUDE.md 文件层级

| 文件位置 | 作用范围 |
|----------|----------|
| `~/.claude/CLAUDE.md` | 全局配置，所有项目生效 |
| `项目根目录/CLAUDE.md` | 项目级配置，团队共享 |
| `项目根目录/.claude/CLAUDE.md` | 项目级配置（优先级更高） |
| `子目录/CLAUDE.md` | 目录级配置 |

### 权限管理

| 命令 | 说明 |
|------|------|
| `claude config set allowedTools '["Bash(git *)","Read","Write"]'` | 设置允许的工具 |
| `claude config get allowedTools` | 查看当前允许的工具 |
| `/permissions` | 在会话中管理权限 |

## 快捷键

| 快捷键 | 说明 |
|--------|------|
| `Enter` | 发送消息 |
| `Shift + Enter` | 换行（不发送） |
| `Escape` | 取消当前操作 |
| `Ctrl + C` | 中断当前生成 |
| `Ctrl + L` | 清屏 |
| `Alt + T` | 切换扩展思考模式 |
| `Ctrl + O` | 切换思考输出可见性 |

## MCP (Model Context Protocol)

```bash
# 添加 MCP 服务器
claude mcp add <name> -- <command>

# 示例：添加文件系统 MCP
claude mcp add filesystem -- npx @anthropic-ai/mcp-filesystem /path/to/dir

# 查看已配置的 MCP 服务器
claude mcp list

# 移除 MCP 服务器
claude mcp remove <name>
```

## Hooks 钩子

在 `.claude/settings.json` 中配置：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "command": "echo '即将执行工具'",
        "matcher": "Bash"
      }
    ],
    "PostToolUse": [
      {
        "command": "prettier --write $FILEPATH",
        "matcher": "Write|Edit"
      }
    ],
    "Stop": [
      {
        "command": "echo '会话即将结束'"
      }
    ]
  }
}
```

## 常用场景速查

### 新项目初始化
```
1. 创建 CLAUDE.md 描述项目
2. 描述技术栈和编码规范
3. 让 Claude 帮你搭建项目骨架
```

### 调试 Bug
```
1. 描述 bug 现象
2. 提供错误信息或截图
3. 让 Claude 定位并修复
```

### 代码重构
```
1. 指定要重构的文件/模块
2. 说明重构目标（性能/可读性/架构）
3. Claude 会先分析再提出方案
```

### 学习代码库
```
1. 让 Claude 解释项目结构
2. 搜索特定功能的实现
3. 追踪数据流和调用链
```

## 管道模式 (Piped Mode)

```bash
# 将文件内容传给 Claude 分析
cat error.log | claude -p "分析这个错误日志"

# 将命令输出传给 Claude
git diff | claude -p "总结这些变更"

# 结合其他工具
find . -name "*.ts" | claude -p "列出所有 TypeScript 文件并分类"
```

## 提示词技巧

| 技巧 | 示例 |
|------|------|
| 明确目标 | "在 src/api 下添加用户注册接口，包含参数验证" |
| 提供上下文 | "这个项目使用 Next.js 14 + Prisma，帮我..." |
| 分步骤 | "第一步先规划，第二步写测试，第三步实现" |
| 指定风格 | "使用函数式编程风格，避免 class" |
| 约束条件 | "不要修改现有的接口签名" |

---

> 生成日期：2026-06-08
> 适用于 Claude Code CLI 版本
