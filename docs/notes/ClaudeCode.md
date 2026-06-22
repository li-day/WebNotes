# Claude Code 深度实践：如何让 AI 真正理解你的项目

## 分享背景

随着 Claude Code、Cursor、MCP 等工具的普及，AI 已经从简单的代码补全工具逐渐演变为开发协作者。

然而在实际使用过程中，我们发现：

* AI 生成的代码经常不符合项目规范
* AI 不理解业务背景
* AI 生成的代码无法直接使用
* 同样的问题，不同人得到的结果差异巨大

因此，本次分享主要探讨：

如何让 AI 真正理解我们的项目，并持续提高代码生成质量。

---

# 一、AI 辅助开发的现状

## 当前开发模式

传统开发流程：

需求
↓
分析
↓
编码
↓
联调
↓
测试
↓
上线

AI 协作开发：

需求
↓
AI 分析
↓
AI 编码
↓
开发 Review
↓
测试
↓
上线

开发者角色正在发生变化：

过去：

* 编写代码

现在：

* 管理上下文
* 管理规则
* 管理 AI

---

# 二、为什么 AI 经常写错代码

## 原因一：缺乏业务背景

例如：

开发会务奖配置功能

AI 并不知道：

* 什么是会务奖
* 如何计算奖励
* 哪些角色拥有权限

因此生成的代码往往偏离实际需求。

---

## 原因二：缺乏项目规范

AI 默认认为：

* 所有项目结构都一样
* 所有接口规范都一样
* 所有组件规范都一样

实际上：

每个团队都有自己的开发规范。

---

## 原因三：Prompt 信息不足

错误示例：

帮我写一个产品列表页面

正确示例：

技术栈：

Vue3
TypeScript
Element Plus

参考页面：

UserList.vue

要求：

* Composition API
* 禁止 any
* 使用项目公共组件

---

# 三、Prompt 最佳实践

## Prompt 公式

输出质量

=

背景
+
约束
+
示例
+
验收标准

---

## 推荐模板

```markdown
# 角色
你是一名资深前端工程师，精通 Vue3 + TypeScript + Element Plus 技术栈。

# 项目背景
- 框架：Vue 3.4 + Composition API
- 语言：TypeScript 5.3+
- UI 库：Element Plus 2.5+
- 构建工具：Vite 5.0
- 状态管理：Pinia
- 路由：Vue Router 4.3

# 当前任务
实现产品管理页面，包括：
- 产品列表展示（分页、筛选）
- 产品新增/编辑弹窗
- 产品删除功能
- 批量操作

# 参考文件
请参考以下文件的代码风格：
- src/views/user/UserList.vue（用户管理页面，结构相似）
- src/api/product.ts（产品相关 API）
- src/components/TablePage.vue（公共表格组件）

# 开发规范
1. 使用 Composition API `<script setup>` 语法
2. 严格禁止使用 `any` 类型
3. 使用项目公共组件：TablePage、SearchForm、ActionButtons
4. API 调用必须使用 `src/api` 下已封装的方法
5. 表单验证使用 Element Plus 的 Form Rules
6. 状态管理使用 Pinia store

# 输出要求
1. 先分析需求，输出实现方案
2. 确认方案后，输出完整代码
3. 代码需要包含必要的注释
4. 确保 TypeScript 类型完整
```

---

## 最佳实践

### 1. 渐进式开发

不要直接生成代码

先分析需求

再输出方案

确认后再开始编码

```
用户 → 描述需求
    ↓
AI → 分析技术方案
    ↓
用户 → 确认方案
    ↓
AI → 生成代码
    ↓
用户 → Review
    ↓
AI → 优化调整
```

### 2. 对话式开发

**错误方式：**
```
用户：帮我写一个完整的后台管理系统
AI：[生成大量代码]
```

**正确方式：**
```
用户：我想做一个后台管理系统，需要用户管理和权限管理
AI：好的，我们先规划一下整体架构...
[对话确认细节]
用户：好的，先从用户管理开始
AI：[生成用户管理模块]
```

### 3. 分步骤验证

```
Step 1: AI 分析需求
Step 2: 输出技术方案
Step 3: 生成类型定义
Step 4: 实现 API 层
Step 5: 实现组件
Step 6: 添加测试
```

每个步骤都要 Review 确认后再进行下一步。

---

# 四、项目知识库建设

## 为什么需要知识库

AI 不懂业务

但可以学习业务

---

## 推荐目录结构

docs/

business/

产品中心.md

订单系统.md

权限系统.md

会务系统.md

technical/

接口规范.md

代码规范.md

组件规范.md

目录规范.md

---

## 示例：业务知识文档

```markdown
# docs/business/会务奖配置.md

## 业务背景
会务奖是公司为激励推广人员设立的奖励机制，用于提升产品推广效果。

## 目标用户
- 推广人员：负责产品推广的销售人员
- 运营人员：负责配置奖励规则和管理奖励发放

## 核心规则

### 奖励计算
- **奖励金额 = 订单实付金额 × 奖励比例**
- 订单实付金额：用户实际支付金额（不含运费）
- 奖励比例：根据产品类别和推广等级确定

### 奖励比例表
| 产品类别 | 普通推广 | 金牌推广 | 钻石推广 |
|---------|---------|---------|---------|
| A类产品 | 3%      | 5%      | 8%      |
| B类产品 | 2%      | 4%      | 6%      |
| C类产品 | 1%      | 2%      | 3%      |

### 发放条件
1. 订单状态为"已完成"
2. 订单完成时间在奖励有效期内
3. 推广人员通过审核认证
4. 订单未退货退款

### 特殊规则
- 试用期订单不发放奖励
- 自己购买的订单不发放奖励
- 同一用户首次购买奖励翻倍

## 技术实现

### 数据模型
```typescript
interface ConferenceReward {
  id: string;
  orderId: string;
  promoterId: string;
  rewardAmount: number;
  rewardRate: number;
  orderAmount: number;
  status: 'pending' | 'approved' | 'paid' | 'rejected';
  createdAt: Date;
  paidAt?: Date;
}
```

### 相关接口
- `POST /api/rewards/calculate` - 计算奖励金额
- `POST /api/rewards/approve` - 审批奖励
- `POST /api/rewards/pay` - 发放奖励
- `GET /api/rewards/list` - 奖励列表

## 前端页面
- `src/views/reward/Config.vue` - 奖励配置页面
- `src/views/reward/List.vue` - 奖励列表页面
- `src/views/reward/Detail.vue` - 奖励详情页面
```

---

## 技术规范示例

```markdown
# docs/technical/前端开发规范.md

## 代码风格

### 组件命名
- 组件文件使用 PascalCase：`UserList.vue`
- 组件注册使用 PascalCase：`<UserList />`
- 工具函数使用 camelCase：`formatDate()`

### 目录结构
```
src/
├── api/           # API 请求
├── assets/        # 静态资源
├── components/    # 公共组件
├── composables/   # 组合式函数
├── router/        # 路由配置
├── stores/        # Pinia 状态管理
├── types/         # TypeScript 类型
├── utils/         # 工具函数
└── views/         # 页面组件
```

### API 规范
```typescript
// ✅ 正确
import { request } from '@/utils/request';

export function getProductList(params: ProductQueryParams) {
  return request<ProductListResponse>({
    url: '/api/products/list',
    method: 'GET',
    params,
  });
}

// ❌ 错误：直接在组件中调用 axios
```

### 组件规范
```vue
<!-- ✅ 正确 -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Product } from '@/types/product';

const props = defineProps<{
  products: Product[];
}>();

const emit = defineEmits<{
  select: [product: Product];
}>();
</script>

<!-- ❌ 错误：缺少类型定义 -->
<script setup>
const props = defineProps(['products']);
</script>
```

## 禁止事项
1. 禁止使用 `any` 类型
2. 禁止使用 `@ts-ignore` 或 `@ts-nocheck`
3. 禁止在组件中直接调用 axios
4. 禁止在模板中编写复杂逻辑
5. 禁止使用 jQuery 或其他过时库
```

---

## AI Context 配置

推荐在项目根目录创建以下文件：

```yaml
# .ai/context.yml
version: "1.0"

context:
  - path: "docs/business/**/*.md"
    description: "业务背景和规则说明"
    priority: high

  - path: "docs/technical/**/*.md"
    description: "技术规范和开发标准"
    priority: high

  - path: "CLAUDE.md"
    description: "项目说明和开发指南"
    priority: medium

  - path: "src/types/**/*.ts"
    description: "类型定义"
    priority: low

instructions: |
  每次开始开发任务前，请先阅读上下文文件以理解：
  1. 业务背景和规则
  2. 技术规范和开发标准
  3. 项目结构和约定
```

---

# 五、MCP 最佳实践

## 常见误区

很多团队：

安装 MCP

结束

实际上：

只是完成接入

并未真正落地。

---

## 第一阶段：工具接入

### 常用 MCP 服务器

**1. GitHub MCP**
- 搜索代码仓库
- 查看问题和 PR
- 管理 issue 和 PR

安装：
```bash
npx -y @modelcontextprotocol/create-server@latest github-mcp
```

**2. Browser MCP**
- 网页内容抓取
- 在线文档查询
- API 测试

**3. Database MCP**
- 数据库查询
- 数据分析
- Schema 了解

**4. Filesystem MCP**
- 文件系统操作
- 批量处理
- 项目结构分析

### 配置示例

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    },
    "browser": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "allowedDirectory"]
    }
  }
}
```

---

## 第二阶段：业务能力封装

### 为什么需要封装？

直接暴露数据库的风险：
- AI 可能执行危险操作
- 缺乏业务逻辑校验
- 无法追踪操作记录
- 安全隐患

### 封装示例

```typescript
// ❌ 错误：直接暴露数据库
{
  name: "database",
  tools: {
    query: "SELECT * FROM orders WHERE status = ?",
    update: "UPDATE products SET stock = ? WHERE id = ?"
  }
}

// ✅ 正确：封装业务能力
{
  name: "order-tools",
  tools: {
    getOrderList: {
      description: "获取订单列表",
      inputSchema: {
        type: "object",
        properties: {
          status: { type: "string", enum: ["pending", "completed", "cancelled"] },
          page: { type: "number", default: 1 },
          pageSize: { type: "number", default: 20 }
        }
      },
      handler: async (params) => {
        // 业务逻辑处理
        // 权限校验
        // 数据转换
        return orderService.getList(params);
      }
    },
    
    createOrder: {
      description: "创建订单",
      inputSchema: {
        type: "object",
        required: ["productId", "quantity"],
        properties: {
          productId: { type: "string" },
          quantity: { type: "number", minimum: 1 }
        }
      },
      handler: async (params) => {
        // 库存校验
        // 价格计算
        // 订单创建
        return orderService.create(params);
      }
    }
  }
}
```

---

## 第三阶段：业务 Agent

### Agent 设计示例

```typescript
// Product Agent
class ProductAgent {
  capabilities = [
    "查询产品信息",
    "查询库存状态",
    "查询销售数据",
    "价格分析",
    "推荐相关产品"
  ];

  tools = {
    getProduct: async (id: string) => {
      return productService.getInfo(id);
    },
    
    checkStock: async (id: string) => {
      const stock = await productService.getStock(id);
      return {
        available: stock > 0,
        quantity: stock,
        restockDate: stock === 0 ? await productService.getRestockDate(id) : null
      };
    },
    
    getSalesData: async (productId: string, days: number = 30) => {
      return analyticsService.getProductSales(productId, days);
    }
  };
}
```

### Agent 工作流

```
用户问题 → Agent 分析 → 调用工具 → 组合答案 → 返回结果
```

### 实战案例

**场景：AI 产品顾问**

用户："我想买一台办公笔记本，预算 5000 元"

Agent 处理：
1. 理解需求（办公、笔记本、5000元）
2. 调用产品搜索工具
3. 筛选符合条件的产品
4. 调用库存查询工具
5. 调用销量分析工具
6. 生成推荐方案

```typescript
const recommendation = await productAgent.recommend({
  category: "laptop",
  useCase: "office",
  budget: 5000,
  preferences: {
    weight: "light",
    battery: "long"
  }
});

// 返回结构化推荐结果
```

---

# 六、如何提高 AI 代码准确率

## 技巧一：提供参考代码

永远给参考代码

参考：

ProductList.vue

按照相同风格实现

### 示例 Prompt

```
请参考 src/views/user/UserList.vue 的代码风格，实现产品管理页面 ProductList.vue。

参考文件的关键特征：
- 使用 TablePage 公共组件
- 搜索表单使用 SearchForm 组件
- 操作按钮使用 ActionButtons 组件
- 状态使用 Pinia store 管理

请保持相同的代码结构和风格。
```

---

## 技巧二：先分析后编码

工作流程：

```
需求
  ↓
AI 分析
  ↓
技术方案
  ↓
人工确认
  ↓
开始编码
  ↓
代码审查
  ↓
优化调整
```

### 分析阶段检查清单

- [ ] 技术栈选择
- [ ] 架构设计
- [ ] 依赖分析
- [ ] 风险识别
- [ ] 测试策略

---

## 技巧三：任务拆分

不要一次生成整个模块

### 推荐的分步策略

```
Step 1: 定义类型和接口
  ↓
Step 2: 实现 API 层
  ↓
Step 3: 实现 Store（状态管理）
  ↓
Step 4: 实现基础组件
  ↓
Step 5: 实现页面组件
  ↓
Step 6: 编写单元测试
  ↓
Step 7: 集成测试和调试
```

### 每步验收标准

- **Step 1 完成**：TypeScript 类型完整，无 any
- **Step 2 完成**：API 可正常调用，错误处理完善
- **Step 3 完成**：Store 状态管理正常，响应式工作
- **Step 4 完成**：组件可独立运行，Props/Emits 类型正确
- **Step 5 完成**：页面功能完整，交互正常
- **Step 6 完成**：测试覆盖率 >80%
- **Step 7 完成**：集成测试通过，无 bug

---

## 技巧四：让 AI 学习项目

### 学习流程

```
让 AI 分析项目结构
  ↓
src/api/          → 了解 API 规范
  ↓
src/components/   → 了解组件规范
  ↓
src/views/        → 了解页面结构
  ↓
src/stores/       → 了解状态管理
  ↓
src/types/        → 了解类型定义
  ↓
总结项目规范
```

### 学习 Prompt 示例

```
请分析我的 Vue3 项目，总结以下规范：

1. 项目结构规范
2. API 调用规范
3. 组件编写规范
4. TypeScript 类型规范
5. 状态管理规范
6. 错误处理规范

请阅读以下目录：
- src/api/
- src/components/
- src/views/
- src/stores/
- src/types/

并输出详细的规范总结文档。
```

---

## 技巧五：使用代码 Review

### Review 检查点

- [ ] **正确性**：代码功能是否符合需求
- [ ] **规范**：是否符合团队开发规范
- [ ] **类型**：TypeScript 类型是否完整
- [ ] **性能**：是否存在性能问题
- [ ] **安全**：是否存在安全隐患
- [ ] **测试**：是否有足够的测试覆盖

### 使用 AI Review

```
请 Review 以下代码：

1. 检查是否符合项目规范
2. 识别潜在 bug
3. 检查 TypeScript 类型
4. 指出性能问题
5. 提供优化建议

[代码内容]
```

---

# 七、团队 AI 工作流

## 完整工作流程

```
需求文档
  ↓
Claude 分析需求
  ↓
读取业务知识库
  ↓
读取技术规范
  ↓
生成技术方案
  ↓
团队评审方案
  ↓
调用 MCP 获取数据
  ↓
生成代码
  ↓
Code Review（AI + 人工）
  ↓
单元测试
  ↓
集成测试
  ↓
提交 PR
  ↓
CI/CD 检查
  ↓
代码合并
```

## 各阶段产出物

| 阶段 | 产出物 | 验收标准 |
|-----|-------|---------|
| 需求分析 | 需求文档 | 功能完整、逻辑清晰 |
| 方案设计 | 技术方案 | 技术可行、风险可控 |
| 代码生成 | 源代码 | 规范符合、功能完整 |
| Code Review | Review 意见 | 无严重问题 |
| 测试 | 测试报告 | 覆盖率 >80% |
| PR | PR 描述 | 变更清晰、测试通过 |

## 团队协作最佳实践

### 1. 知识共享

建立团队知识库：
```
team-knowledge/
├── business/          # 业务知识
├── technical/         # 技术规范
├── prompts/           # 优秀 Prompt 模板
└── cases/             # 成功案例
```

### 2. Prompt 复用

收集优秀 Prompt，建立模板库：
```markdown
# prompts/component-development.md
## 模板
[复用的组件开发 Prompt]

## 使用场景
- 新增列表页面
- 新增表单页面
- 新增详情页面

## 注意事项
- 替换业务名称
- 调整字段列表
```

### 3. 定期 Review

每周 Review：
- AI 生成的代码质量
- Prompt 优化空间
- 新增业务知识
- MCP 工具效果

### 4. 持续优化

优化维度：
- Prompt 质量
- 知识库完善度
- 工具链效率
- 工作流畅通度

---

# 八、未来展望

未来开发者的重要能力：

* 业务建模
* 架构设计
* Prompt Engineering
* AI 协作
* Agent 编排

AI 不会替代开发者

但会使用 AI 的开发者会逐渐替代不会使用 AI 的开发者。

谢谢大家。

---

# 附录：实操学习路线与资源

## 学习路线图

### 阶段一：基础入门（1-2周）

**学习目标**：掌握 Claude Code 基本使用

**学习内容**：
1. 安装和配置 Claude Code
2. 了解基本功能
3. 掌握 Prompt 基础

**实践任务**：
- [ ] 完成官方文档阅读
- [ ] 创建第一个 AI 辅助项目
- [ ] 使用 AI 生成一个简单组件

**推荐资源**：
- Claude Code 官方文档：https://docs.anthropic.com/claude-code
- Claude API 文档：https://docs.anthropic.com/claude-reference

---

### 阶段二：进阶实践（2-4周）

**学习目标**：能够使用 AI 完成实际开发任务

**学习内容**：
1. Prompt Engineering 进阶
2. 项目知识库建设
3. 代码规范管理
4. AI 辅助调试

**实践任务**：
- [ ] 建立项目知识库
- [ ] 创建 Prompt 模板库
- [ ] 使用 AI 完成 5 个实际功能
- [ ] 总结适合自己项目的 Prompt 模板

**推荐资源**：
- Prompt Engineering Guide：https://www.promptingguide.ai/
- Learn Prompting：https://learnprompting.org/

---

### 阶段三：MCP 集成（3-4周）

**学习目标**：掌握 MCP 的开发和集成

**学习内容**：
1. MCP 协议理解
2. 常用 MCP 服务器使用
3. 自定义 MCP 开发
4. MCP 最佳实践

**实践任务**：
- [ ] 集成 3 个常用 MCP 服务器
- [ ] 开发一个自定义 MCP 工具
- [ ] 封装业务能力为 MCP
- [ ] 在项目中实际应用 MCP

**推荐资源**：
- MCP 官方文档：https://modelcontextprotocol.io/
- MCP GitHub：https://github.com/modelcontextprotocol

---

### 阶段四：Agent 开发（4-6周）

**学习目标**：能够开发和使用业务 Agent

**学习内容**：
1. Agent 设计原理
2. Agent 开发框架
3. 工具链集成
4. Agent 编排

**实践任务**：
- [ ] 设计一个业务 Agent
- [ ] 实现 Agent 工具集
- [ ] 开发 Agent 工作流
- [ ] 部署并测试 Agent

**推荐资源**：
- LangChain：https://www.langchain.com/
- AutoGPT：https://github.com/Significant-Gravitas/AutoGPT

---

### 阶段五：团队落地（持续）

**学习目标**：在团队中推广 AI 辅助开发

**学习内容**：
1. 团队工作流设计
2. 知识库管理
3. 规范制定
4. 培训和推广

**实践任务**：
- [ ] 制定团队 AI 使用规范
- [ ] 建立团队知识库
- [ ] 组织团队培训
- [ ] 持续优化工作流

---

## 工具和资源清单

### AI 开发工具

| 工具 | 用途 | 官网 |
|-----|------|------|
| Claude Code | AI 辅助开发 | https://claude.ai/code |
| Cursor | AI 编辑器 | https://cursor.sh |
| Copilot | GitHub AI 编程助手 | https://github.com/features/copilot |
| Continue | VS Code AI 插件 | https://continue.dev |

### MCP 服务器

| MCP | 功能 | 安装 |
|-----|------|------|
| GitHub | GitHub 操作 | `npx @modelcontextprotocol/server-github` |
| Puppeteer | 浏览器自动化 | `npx @modelcontextprotocol/server-puppeteer` |
| Filesystem | 文件系统 | `npx @modelcontextprotocol/server-filesystem` |
| Postgres | PostgreSQL | `npx @modelcontextprotocol/server-postgres` |
| Brave Search | 网页搜索 | `npx @modelcontextprotocol/server-brave-search` |

### 学习资源

**官方资源**：
- Claude 官方文档：https://docs.anthropic.com
- Claude Code GitHub：https://github.com/anthropics/claude-code

**社区资源**：
- Awesome Claude：https://github.com/karpathy/awesome-claude
- Prompt Engineering 课程：https://www.deeplearning.ai/short-courses/

**中文资源**：
- Claude 中文社区：https://claude.cn
- Prompt 中文指南：https://prompt.guide

---

## 实战项目建议

### 项目一：个人博客（入门）

使用 AI 辅助开发一个个人博客：
- 技术栈：Next.js + TypeScript
- 功能：文章管理、标签分类、评论
- 学习重点：Prompt 基础、代码生成

### 项目二：电商后台（进阶）

使用 AI 开发电商后台管理系统：
- 技术栈：Vue3 + Element Plus + Vite
- 功能：商品管理、订单管理、用户管理
- 学习重点：知识库建设、MCP 集成

### 项目三：业务 Agent（高级）

开发业务咨询 Agent：
- 技术栈：Node.js + MCP
- 功能：产品推荐、库存查询、订单分析
- 学习重点：Agent 开发、工具封装

---

## 常见问题 FAQ

### Q1: 如何开始使用 Claude Code？

**A**:
1. 访问 https://claude.ai/code
2. 下载并安装 Claude Code
3. 配置 API Key
4. 阅读快速开始文档

### Q2: 如何提高 AI 生成代码质量？

**A**:
1. 提供清晰的背景信息
2. 给予参考代码示例
3. 分步骤进行开发
4. 建立项目知识库
5. 使用 Prompt 模板

### Q3: MCP 如何集成到项目？

**A**:
1. 选择合适的 MCP 服务器
2. 在配置文件中添加 MCP
3. 测试 MCP 连接
4. 封装业务工具
5. 在 AI 对话中使用

### Q4: 如何评估 AI 辅助开发效果？

**A**:
评估维度：
- 开发效率提升
- 代码质量
- Bug 数量
- 团队满意度
- 项目交付速度

### Q5: 团队如何推广 AI 辅助开发？

**A**:
1. 制定使用规范
2. 建立知识库
3. 组织培训
4. 收集反馈
5. 持续优化

---

## 持续学习建议

1. **关注官方更新**：Claude、MCP 等工具更新频繁
2. **参与社区讨论**：加入相关 Discord、Reddit 社区
3. **实践新功能**：新功能出来立即尝试
4. **分享经验**：总结最佳实践并分享
5. **建立个人知识库**：积累自己的 Prompt 和经验

---

**祝你学习愉快！如有问题，欢迎交流。**
