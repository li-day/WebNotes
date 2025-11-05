# Git指令速查表

| 类别         | 常用指令                                                                 | 功能说明                                                                 |
|--------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **环境配置** | `git config --global user.name "用户名"`                                | 全局配置用户名                                                           |
|              | `git config --global user.email "邮箱"`                                 | 全局配置邮箱                                                             |
|              | `git config --list`                                                     | 查看所有配置                                                             |
| **仓库初始化** | `git init`                                                              | 初始化本地Git仓库                                                       |
|              | `git clone <远程地址>`                                                  | 克隆远程仓库到本地                                                       |
| **暂存与提交** | `git add <文件>` / `git add .`                                          | 将文件添加到暂存区（`.`表示所有变更）                                   |
|              | `git commit -m "提交描述"`                                              | 提交暂存区内容到本地仓库                                                 |
|              | `git commit -am "提交描述"`                                             | 跳过暂存区直接提交已跟踪文件的修改                                       |
|              | `git status`                                                            | 查看工作区与暂存区状态                                                   |
| **版本历史** | `git log` / `git log --oneline`                                         | 查看提交历史（`--oneline`为简洁模式）                                   |
|              | `git diff` / `git diff <版本1> <版本2>`                                 | 对比文件变更（工作区与暂存区，或两个版本）                               |
|              | `git reflog`                                                            | 查看所有操作历史（含已删除版本）                                         |
| **分支管理** | `git branch` / `git branch <分支名>`                                    | 查看分支 / 创建分支                                                     |
|              | `git checkout <分支名>` / `git checkout -b <分支名>`                     | 切换分支 / 创建并切换分支                                               |
|              | `git switch <分支名>` / `git switch -c <分支名>`                         | 切换分支（Git 2.23+） / 创建并切换分支                                  |
|              | `git merge <分支名>`                                                    | 合并指定分支到当前分支                                                   |
|              | `git rebase <目标分支>`                                                 | 变基合并（使提交历史线性化）                                             |
| **远程交互** | `git remote -v`                                                         | 查看远程仓库地址                                                         |
|              | `git pull` / `git pull --rebase`                                        | 拉取远程代码并合并（`--rebase`为变基合并）                              |
|              | `git push` / `git push -u <远程名> <分支名>`                            | 推送本地代码到远程（`-u`首次推送时关联分支）                             |
| **暂存工作区** | `git stash` / `git stash save "描述"`                                   | 暂存工作区修改（可添加描述）                                             |
|              | `git stash pop` / `git stash apply <暂存ID>`                             | 恢复暂存的修改（`pop`会删除记录，`apply`保留）                           |
|              | `git stash list`                                                        | 查看所有暂存记录                                                         |
| **标签管理** | `git tag` / `git tag -a v1.0 -m "描述"`                                 | 查看标签 / 创建带描述的标签                                             |
|              | `git push origin <标签名>` / `git push origin --tags`                    | 推送单个标签 / 推送所有标签到远程                                       |
| **进阶操作** | `git cherry-pick <提交ID>`                                              | 选择性合并单个提交                                                       |
|              | `git revert <提交ID>`                                                   | 生成新提交以撤销指定提交（安全保留历史）                                 |
|              | `git reset --hard <版本号>`                                             | 回滚到指定版本（会删除后续记录，谨慎使用）                               |


# Git核心指令与进阶操作指南
Git是目前最流行的分布式版本控制系统，用于高效管理代码的版本迭代、多人协作与历史追溯。本文在基础指令上优化分类逻辑，补充高频实用指令，并对每个指令的**功能定义、使用场景、核心参数**进行清晰说明，覆盖从入门到进阶的开发需求。


## 一、Git环境初始化与配置（首次使用必做）
### 1.1 git config - 配置Git用户信息（全局/局部）
#### 功能定义
设置Git的用户名称和邮箱（提交代码时会关联该信息，用于标识提交者），支持**全局配置**（所有项目生效）和**局部配置**（仅当前项目生效）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git config --global user.name "你的用户名"` | 全局配置用户名 | 首次使用Git时配置，所有项目共用 |
| `git config --global user.email "你的邮箱"` | 全局配置邮箱 | 需与GitHub/GitLab等平台的注册邮箱一致 |
| `git config user.name "项目专属用户名"` | 局部配置用户名 | 仅当前项目生效（需先进入项目目录） |
| `git config --list` | 查看所有配置 | 验证配置是否生效，区分全局（`global`）和局部（`local`） |

#### 注意
- 局部配置优先级高于全局配置（同一项目中，局部配置会覆盖全局）。
- 若需修改配置，直接重新执行指令即可覆盖旧值。


### 1.2 git init - 初始化本地Git仓库
#### 功能定义
在本地项目目录中创建一个空的Git仓库（生成隐藏的`.git`文件夹，存储Git的版本控制数据），使项目支持Git管理。

#### 核心用法
```bash
# 1. 进入项目目录
cd /path/to/your/project
# 2. 初始化Git仓库
git init
```

#### 场景说明
- 适用于**新建项目**：从零开始的项目，通过`git init`开启版本控制。
- 初始化后，项目目录下会生成`.git`文件夹（默认隐藏，需通过`ls -a`查看），不可手动删除（删除会丢失所有版本记录）。


## 二、代码暂存与提交（本地版本管理核心）
### 2.1 git add - 将文件添加到暂存区
#### 功能定义
将工作区（本地修改的文件）的变更添加到**暂存区**（临时存储待提交的变更），是连接“工作区”和“本地仓库”的桥梁。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git add 文件名` | 添加单个文件到暂存区 | 仅提交某个具体文件（如`git add index.js`） |
| `git add 目录名/` | 添加整个目录到暂存区 | 提交某个文件夹下的所有变更（如`git add src/`） |
| `git add .` | 添加当前目录下所有变更 | 提交所有修改、新增的文件（常用，避免遗漏） |
| `git add -u` | 添加已跟踪文件的变更 | 仅提交“已被Git管理过”的文件（不包含新增文件） |
| `git add -p` | 交互式添加变更 | 逐段选择文件中的修改内容（适用于仅提交部分代码的场景） |

#### 注意
- 暂存区的作用：避免误提交（可先将需要的变更加入暂存区，验证后再提交到本地仓库）。


### 2.2 git commit - 将暂存区变更提交到本地仓库
#### 功能定义
将暂存区的所有变更（通过`git add`添加的内容）提交到**本地仓库**，生成一条不可修改的版本记录（包含提交者、时间、变更描述）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git commit -m "提交描述"` | 提交并添加描述 | 必选，描述需清晰（如`git commit -m "feat: 新增用户登录功能"`） |
| `git commit -am "提交描述"` | 跳过暂存区直接提交 | 仅适用于“已跟踪文件”的修改（新增文件需先`git add`） |
| `git commit --amend` | 修正最近一次提交 | 补充修改到上一次提交（未推送到远程时使用，避免多一条无用记录） |

#### 提交描述规范（推荐Angular规范）
- `feat`：新功能（如`feat: 新增购物车结算按钮`）
- `fix`：修复bug（如`fix: 解决登录时密码加密失败问题`）
- `docs`：文档修改（如`docs: 更新API接口说明`）
- `style`：代码格式调整（如`style: 对齐代码缩进`）
- `refactor`：代码重构（如`refactor: 拆分用户信息处理函数`）
- `test`：添加测试代码（如`test: 新增登录接口单元测试`）
- `chore`：构建/工具配置（如`chore: 更新webpack版本`）


### 2.3 git status - 查看工作区与暂存区状态
#### 功能定义
实时查看当前项目的变更状态：哪些文件被修改、哪些文件未添加到暂存区、哪些文件已在暂存区待提交。

#### 核心用法
```bash
git status
```

#### 状态解读
- **Untracked files**：未被Git跟踪的文件（新增文件，需`git add`）。
- **modified**：已跟踪文件被修改（需`git add`添加到暂存区）。
- **Changes to be committed**：暂存区待提交的文件（需`git commit`提交到本地仓库）。
- **nothing to commit, working tree clean**：工作区和暂存区无变更（当前版本干净）。


### 2.4 git reset - 撤销暂存区/本地仓库的变更
#### 功能定义
回退暂存区或本地仓库的版本，支持撤销`git add`的内容、删除未提交的本地修改，或回滚到历史版本（需谨慎使用）。

#### 核心用法
| 指令 | 作用 | 场景说明 | 风险等级 |
|------|------|----------|----------|
| `git reset HEAD 文件名` | 撤销单个文件的暂存 | 误将文件加入暂存区，需移除（如`git reset HEAD index.js`） | 低（仅操作暂存区） |
| `git reset HEAD .` | 撤销所有文件的暂存 | 暂存区添加错误，需清空暂存区 | 低 |
| `git reset --hard HEAD` | 丢弃工作区所有未提交修改 | 本地修改无需保留，恢复到最近一次提交状态 | 中（会删除未提交的本地代码） |
| `git reset --hard 版本号` | 回滚到指定历史版本 | 需丢弃当前版本到历史版本之间的所有变更（如`git reset --hard a1b2c3d`） | 高（会删除指定版本后的所有记录） |

#### 注意
- `--hard`参数会**永久删除未提交的本地修改或历史版本**，执行前需确认是否需要备份。
- 版本号可通过`git log`查看（取前7位即可）。


## 三、版本历史查询与对比（追溯变更）
### 3.1 git log - 查看提交历史记录
#### 功能定义
展示本地仓库的所有提交记录，包含提交者、时间、版本号、提交描述等信息，支持筛选和格式化输出。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git log` | 查看完整历史 | 按时间倒序展示（最新提交在最前） |
| `git log --oneline` | 简洁展示历史 | 每条记录仅显示“版本号前7位+提交描述”（常用） |
| `git log -n 5` | 查看最近n次提交 | 如`git log -n 3`查看最近3次提交 |
| `git log --author="用户名"` | 筛选指定作者的提交 | 多人协作时，查看某个人的修改记录 |
| `git log --since="2024-01-01" --until="2024-01-31"` | 按时间范围筛选 | 查看1月份的所有提交 |
| `git log 分支1..分支2` | 查看两分支的差异提交 | 如`git log main..dev`查看dev比main多的提交 |

#### 示例
```bash
# 简洁查看最近5次提交
git log --oneline -n 5
# 输出格式：
# a1b2c3d (HEAD -> main) fix: 修复登录bug
# e4f5g6h feat: 新增用户注册功能
# ...
```


### 3.2 git diff - 对比文件的变更内容
#### 功能定义
对比不同版本/区域（工作区、暂存区、本地仓库）之间的文件差异，展示具体修改的行（新增/删除/修改）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git diff` | 对比工作区与暂存区 | 查看未`git add`的修改内容（哪些地方被改了） |
| `git diff --cached` | 对比暂存区与本地仓库 | 查看已`git add`但未`git commit`的内容 |
| `git diff 版本号1 版本号2` | 对比两个历史版本 | 查看两个版本之间的所有变更（如`git diff a1b2c3d e4f5g6h`） |
| `git diff 分支1 分支2` | 对比两个分支 | 查看分支1和分支2的差异（如`git diff main dev`） |
| `git diff 文件名` | 对比单个文件的变更 | 仅查看指定文件的修改（如`git diff src/index.js`） |

#### 输出解读
- `+`开头的行：新增内容
- `-`开头的行：删除内容
- 无符号的行：未修改的上下文（方便定位位置）


### 3.3 git reflog - 查看所有操作历史（含已删除的版本）
#### 功能定义
记录本地Git的所有操作（包括`git reset`、`git commit`、`git checkout`等），即使通过`git reset --hard`删除了历史版本，也能通过`git reflog`找到对应的版本号，用于**恢复误删的版本**。

#### 核心用法
```bash
git reflog
# 输出格式（包含操作类型、版本号、操作描述）：
# a1b2c3d (HEAD -> main) HEAD@{0}: reset: moving to a1b2c3d
# e4f5g6h HEAD@{1}: commit: feat: 新增用户注册功能
# ...
```

#### 场景说明
- 当执行`git reset --hard`后发现误删了需要的版本，可通过`git reflog`找到该版本的ID，再执行`git reset --hard 版本ID`恢复。


## 四、分支管理（多人协作与功能隔离核心）
### 4.1 git branch - 查看/创建/删除分支
#### 功能定义
分支是Git的核心特性，用于隔离不同功能的开发（如“开发分支”“测试分支”“bug修复分支”）。`git branch`用于管理分支的基础操作：查看、创建、删除。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git branch` | 查看本地所有分支 | 当前分支前会有`*`标记（如`* main`） |
| `git branch -r` | 查看远程所有分支 | 需先执行`git fetch`同步远程分支信息 |
| `git branch -a` | 查看本地+远程所有分支 | 远程分支以`remotes/`开头（如`remotes/origin/main`） |
| `git branch 分支名` | 创建新分支 | 基于当前分支创建（如`git branch dev`基于main创建dev分支） |
| `git branch -d 分支名` | 删除本地分支 | 需先切换到其他分支（如`git checkout main`后删除dev） |
| `git branch -D 分支名` | 强制删除本地分支 | 分支有未合并的变更时，用`-D`强制删除（需谨慎） |

#### 分支命名规范（推荐）
- `main`/`master`：主分支（生产环境代码，禁止直接修改）
- `dev`：开发分支（团队共用，集成各功能分支的代码）
- `feat/功能名`：功能分支（如`feat/login`开发登录功能）
- `fix/bug描述`：bug修复分支（如`fix/login-encrypt`修复登录加密bug）
- `release/版本号`：发布分支（如`release/v1.0.0`用于版本测试）


### 4.2 git checkout - 切换分支/恢复文件
#### 功能定义
有两个核心用途：1. 切换到已存在的分支；2. 恢复工作区的文件到指定版本（撤销未提交的修改）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git checkout 分支名` | 切换到指定分支 | 如`git checkout dev`切换到dev分支（切换前需提交或暂存本地修改） |
| `git checkout -b 分支名` | 创建并切换到新分支 | 简化“`git branch 分支名` + `git checkout 分支名`”（常用） |
| `git checkout 版本号 文件名` | 恢复文件到历史版本 | 如`git checkout a1b2c3d src/index.js`，将index.js恢复到a1b2c3d版本的状态 |
| `git checkout -- 文件名` | 撤销工作区修改 | 如`git checkout -- index.js`，丢弃index.js未`git add`的修改（不可恢复） |

#### 注意
- 切换分支时，若工作区有未提交的修改，Git会阻止切换（避免修改丢失），需先`git commit`提交或`git stash`暂存。


### 4.3 git switch - 切换/创建分支（Git 2.23+新增，替代git checkout）
#### 功能定义
Git 2.23版本后新增的指令，专门用于**分支切换**，语法更清晰（避免`git checkout`的多用途混淆）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git switch 分支名` | 切换到已存在的分支 | 等价于`git checkout 分支名`（如`git switch dev`） |
| `git switch -c 分支名` | 创建并切换到新分支 | 等价于`git checkout -b 分支名`（如`git switch -c feat/pay`） |


### 4.4 git merge - 合并分支到当前分支
#### 功能定义
将指定分支的代码合并到**当前所在分支**（如将`feat/login`分支的代码合并到`dev`分支），用于集成功能或修复bug。

#### 核心用法
```bash
# 1. 先切换到目标分支（如要将dev合并到main，先切到main）
git checkout main
# 2. 执行合并（合并dev分支到当前的main分支）
git merge dev
```

#### 合并冲突处理
- **冲突场景**：两个分支修改了同一文件的同一行（如main分支和dev分支都修改了index.js的第10行），Git无法自动判断保留哪一个，会提示“Conflict”。
- **解决步骤**：
  1. 打开冲突文件，文件中会用`<<<<<<< HEAD`（当前分支内容）、`=======`（待合并分支内容）、`>>>>>>> 分支名`标记冲突位置。
  2. 手动修改冲突内容（保留需要的代码，删除冲突标记）。
  3. 执行`git add 冲突文件名`标记冲突已解决。
  4. 执行`git commit`完成合并（无需额外描述，Git会自动生成合并提交信息）。


### 4.5 git rebase - 变基合并（更整洁的提交历史）
#### 功能定义
与`git merge`类似，用于合并分支，但会“改写提交历史”：将当前分支的所有提交，重新基于目标分支的最新版本创建新的提交，使提交历史呈线性（无合并节点），更易追溯。

#### 核心用法
```bash
# 1. 切换到需要合并的分支（如feat/login）
git checkout feat/login
# 2. 基于dev分支变基（将feat/login的提交重新基于dev的最新版本）
git rebase dev
# 3. 若有冲突，解决后执行以下指令继续变基
git add 冲突文件名
git rebase --continue
# 4. 变基完成后，切换到dev分支，合并feat/login（此时无冲突，直接快进合并）
git checkout dev
git merge feat/login
```

#### 场景对比
| 合并方式 | 优点 | 缺点 | 适用场景 |
|----------|------|------|----------|
| `git merge` | 保留原始提交历史，安全 | 提交历史有合并节点，较杂乱 | 多人协作的公共分支（如dev、main） |
| `git rebase` | 提交历史线性整洁，易追溯 | 改写历史，不适合已推送到远程的公共分支 | 个人开发的功能分支（如feat/*、fix/*） |

#### 注意
- 不要对**已推送到远程的公共分支**（如dev、main）执行`git rebase`，会导致团队其他成员的历史记录混乱。


## 五、远程仓库交互（多人协作核心）
### 5.1 git remote - 管理远程仓库地址
#### 功能定义
关联本地仓库与远程仓库（如GitHub、GitLab、Gitee），支持查看、添加、修改、删除远程仓库地址。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git remote` | 查看远程仓库名称 | 默认远程仓库名称为`origin`（克隆时自动设置） |
| `git remote -v` | 查看远程仓库详细地址 | 显示“fetch（拉取）”和“push（推送）”地址 |
| `git remote add 远程名 远程地址` | 添加远程仓库 | 如`git remote add origin https://github.com/yourname/yourrepo.git` |
| `git remote set-url 远程名 新地址` | 修改远程仓库地址 | 远程地址变更时使用（如HTTPS转SSH） |
| `git remote rm 远程名` | 删除远程仓库关联 | 解除本地与某个远程仓库的关联 |

#### 远程地址格式
- **HTTPS**：`https://github.com/yourname/yourrepo.git`（每次推送需输入账号密码，或配置凭据缓存）
- **SSH**：`git@github.com:yourname/yourrepo.git`（需提前配置SSH密钥，无需重复输入密码，推荐）


### 5.2 git clone - 克隆远程仓库到本地
#### 功能定义
将远程仓库的完整代码（含所有分支和版本历史）下载到本地，生成一个与远程仓库关联的本地仓库（自动设置`origin`远程地址）。

#### 核心用法
```bash
# 1. HTTPS方式克隆（需输入账号密码）
git clone https://github.com/yourname/yourrepo.git
# 2. SSH方式克隆（需提前配置SSH密钥）
git clone git@github.com:yourname/yourrepo.git
# 3. 克隆并指定本地目录名（默认目录名为仓库名）
git clone https://github.com/yourname/yourrepo.git my-project
```

#### 场景说明
- 适用于**首次获取远程项目**（如加入新团队、开始开发开源项目）。
- 克隆后，本地仓库会自动关联远程`origin`，可直接执行`git pull`/`git push`。


### 5.3 git pull - 拉取远程仓库的最新代码
#### 功能定义
从远程仓库拉取指定分支的最新代码，合并到本地当前分支（等价于`git fetch` + `git merge`），确保本地代码与远程同步（多人协作前必做，避免冲突）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git pull` | 拉取远程对应分支的代码 | 本地当前分支与远程分支同名时使用（如本地main拉取远程main） |
| `git pull 远程名 远程分支:本地分支` | 拉取指定远程分支到本地分支 | 如`git pull origin dev:my-dev`（将远程dev拉取到本地my-dev分支） |
| `git pull --rebase` | 变基拉取 | 拉取远程代码时用`rebase`合并（而非`merge`），保持提交历史整洁 |

#### 注意
- 拉取前需确保本地工作区干净（无未提交的修改），或先`git stash`暂存修改，避免冲突。


### 5.4 git push - 将本地代码推送到远程仓库
#### 功能定义
将本地仓库的提交（`git commit`后的内容）推送到远程仓库的指定分支，实现本地代码与远程同步（多人协作时，完成功能后需推送代码供他人使用）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git push` | 推送本地当前分支到远程对应分支 | 本地分支与远程分支已关联（如`git push origin main`的简化） |
| `git push 远程名 本地分支:远程分支` | 推送本地分支到指定远程分支 | 如`git push origin dev:dev`（本地dev推送到远程dev） |
| `git push -u 远程名 本地分支` | 推送并关联分支 | 首次推送本地新分支时使用（后续可直接`git push`） |
| `git push --force` | 强制推送 | 本地改写历史后（如`git rebase`），远程分支有冲突时强制覆盖（需谨慎，仅个人分支使用） |
| `git push --force-with-lease` | 安全强制推送 | 比`--force`安全：仅当远程分支未被他人修改时才强制推送（推荐） |

#### 常见错误处理
- **error: failed to push some refs**：本地代码落后于远程（他人已推送新代码），需先`git pull`同步远程代码，解决冲突后再`git push`。
- **fatal: Could not read from remote repository**：SSH密钥配置错误或远程地址错误，检查`git remote -v`和SSH密钥。


### 5.5 git fetch - 拉取远程仓库的最新信息（不合并）
#### 功能定义
从远程仓库拉取最新的分支信息和版本记录，但**不合并到本地分支**（仅更新本地的远程分支缓存，如`remotes/origin/dev`），用于查看远程变更而不影响本地代码。

#### 核心用法
```bash
# 1. 拉取所有远程分支的最新信息
git fetch origin
# 2. 拉取指定远程分支的信息
git fetch origin dev
# 3. 查看远程分支与本地分支的差异
git diff main origin/main
# 4. 合并远程分支到本地（在确认差异后执行）
git merge origin/main
```

#### 场景说明
- 多人协作时，想先查看远程分支的变更（不直接合并），避免`git pull`自动合并带来的冲突，可先用`git fetch`，再用`git diff`查看差异，最后手动`git merge`。


## 六、暂存工作区（临时保存修改）
### 6.1 git stash - 暂存工作区未提交的修改
#### 功能定义
当需要切换分支或拉取远程代码，但本地有未提交的修改（不想提交也不想删除）时，可通过`git stash`将修改暂存到“暂存栈”，使工作区恢复干净状态；后续可通过`git stash pop`恢复暂存的修改。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git stash` | 暂存当前工作区修改 | 暂存所有未`git add`和已`git add`的修改（生成一个暂存记录） |
| `git stash save "暂存描述"` | 暂存并添加描述 | 方便区分多个暂存记录（如`git stash save "未完成的登录功能"`） |
| `git stash list` | 查看所有暂存记录 | 显示暂存栈中的所有记录（如`stash@{0}: On dev: 未完成的登录功能`） |
| `git stash pop` | 恢复最近一次暂存并删除记录 | 恢复后，暂存记录从栈中删除（常用） |
| `git stash apply 暂存ID` | 恢复指定暂存（不删除记录） | 如`git stash apply stash@{1}`恢复第2条暂存记录，记录仍保留 |
| `git stash drop 暂存ID` | 删除指定暂存记录 | 暂存不再需要时删除（如`git stash drop stash@{0}`） |
| `git stash clear` | 清空所有暂存记录 | 删除暂存栈中的所有记录（需谨慎） |

#### 场景示例
```bash
# 1. 本地有未提交的修改，需要切换到main分支修复bug
git stash save "dev分支未完成的支付功能"
# 2. 切换到main分支
git checkout main
# 3. 修复bug后，切换回dev分支
git checkout dev
# 4. 恢复暂存的修改，继续开发
git stash pop
```


## 七、标签管理（版本发布标记）
### 7.1 git tag - 创建/查看/删除标签（版本标记）
#### 功能定义
为重要的版本（如发布版本`v1.0.0`、`v1.1.0`）创建标签，标签是固定的版本标记（不可移动，不同于分支），方便后续追溯和回滚到发布版本。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git tag` | 查看本地所有标签 | 按字母顺序展示标签 |
| `git tag -a v1.0.0 -m "版本1.0.0发布"` | 创建带描述的标签 | `-a`指定标签类型（annotated，含作者、时间、描述），`-m`添加描述 |
| `git tag v1.0.0 版本号` | 为历史版本创建标签 | 如`git tag v1.0.0 a1b2c3d`，给a1b2c3d版本打标签 |
| `git tag -d v1.0.0` | 删除本地标签 | 移除不需要的标签 |
| `git show v1.0.0` | 查看标签详情 | 显示标签对应的版本、提交信息、修改内容 |

### 7.2 git push 标签 - 推送标签到远程仓库
#### 功能定义
标签默认仅存储在本地，需手动推送到远程仓库，供团队其他成员查看发布版本。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git push origin v1.0.0` | 推送单个标签到远程 | 推送v1.0.0标签到远程origin |
| `git push origin --tags` | 推送所有本地标签到远程 | 一次性推送所有未推送的标签 |
| `git push origin :refs/tags/v1.0.0` | 删除远程标签 | 先本地删除标签，再执行此指令删除远程标签 |


## 八、高频进阶指令（提升效率）
### 8.1 git cherry-pick - 选择性合并单个提交
#### 功能定义
从其他分支中“挑选”单个或多个指定的提交，合并到当前分支（无需合并整个分支），适用于**跨分支复用代码**（如将dev分支的某个bug修复提交，合并到main分支）。

#### 核心用法
```bash
# 1. 先在dev分支查看需要挑选的提交版本号（假设为a1b2c3d）
git checkout dev
git log --oneline
# 2. 切换到需要合并的目标分支（如main）
git checkout main
# 3. 挑选a1b2c3d提交到main分支
git cherry-pick a1b2c3d
# 4. 若有冲突，解决后执行
git add 冲突文件名
git cherry-pick --continue
# 5. 若想放弃挑选，执行
git cherry-pick --abort
```

#### 场景说明
- main分支有一个bug，而dev分支已修复该bug（对应提交a1b2c3d），此时无需合并整个dev分支，只需`git cherry-pick a1b2c3d`将修复提交合并到main。


### 8.2 git clean - 清理工作区的未跟踪文件
#### 功能定义
删除工作区中“未被Git跟踪”的文件（如编译生成的`dist`目录、日志文件、IDE配置文件等），保持工作区整洁（需谨慎，删除后不可恢复）。

#### 核心用法
| 指令 | 作用 | 场景说明 |
|------|------|----------|
| `git clean -n` | 预览要删除的文件 | 仅显示会删除的文件，不实际执行（安全验证） |
| `git clean -f` | 强制删除未跟踪文件 | 删除所有未被Git跟踪的文件（不含目录） |
| `git clean -fd` | 强制删除未跟踪文件和目录 | 如删除`dist/`、`node_modules/`等未跟踪目录 |
| `git clean -fx` | 删除未跟踪文件和.gitignore中指定的文件 | 连`.gitignore`中忽略的文件也一并删除（如`node_modules`） |

#### 注意
- 执行前建议先`git status`确认未跟踪文件，避免误删重要内容。


### 8.3 git revert - 撤销指定提交（生成新提交）
#### 功能定义
与`git reset`不同，`git revert`通过**生成一个新的提交**来撤销指定提交的内容（不修改历史记录），适用于**已推送到远程的公共分支**（如main、dev），避免改写历史导致团队混乱。

#### 核心用法
```bash
# 1. 查看需要撤销的提交版本号（假设为a1b2c3d）
git log --oneline
# 2. 撤销a1b2c3d提交（生成新提交）
git revert a1b2c3d
# 3. 若有冲突，解决后执行
git add 冲突文件名
git revert --continue
```

#### 场景对比
| 撤销方式 | 核心区别 | 适用场景 |
|----------|----------|----------|
| `git reset --hard` | 改写历史记录，删除指定提交后的所有记录 | 本地未推送的提交，需彻底删除历史 |
| `git revert` | 生成新提交，保留历史记录 | 已推送的公共分支，需安全撤销提交 |


## 九、常用Git配置与别名（提升效率）
### 9.1 配置常用指令别名（简化输入）
通过`git config`配置别名，将常用的长指令简化为短指令（如`git st`替代`git status`），提升操作效率。

#### 核心配置
```bash
# 全局配置别名（所有项目生效）
git config --global alias.st status          # git st → git status
git config --global alias.co checkout        # git co → git checkout
git config --global alias.br branch          # git br → git branch
git config --global alias.ci commit          # git ci → git commit
git config --global alias.unstage 'reset HEAD' # git unstage 文件名 → git reset HEAD 文件名
git config --global alias.last 'log -1 HEAD' # git last → 查看最近一次提交
git config --global alias.lg 'log --oneline --graph --decorate' # git lg → 图形化展示提交历史
```

#### 使用示例
```bash
git st          # 等价于 git status
git co dev      # 等价于 git checkout dev
git lg          # 等价于 git log --oneline --graph --decorate（直观查看分支合并历史）
```


### 9.2 配置Git忽略文件（.gitignore）
#### 功能定义
创建`.gitignore`文件，指定Git不需要跟踪的文件/目录（如编译产物、依赖包、日志文件等），避免这些文件被误提交到仓库。

#### 常见`.gitignore`内容（前端项目示例）
```bash
# 依赖包目录
node_modules/
# 编译产物目录
dist/
build/
# 日志文件
logs/
*.log
# IDE配置文件
.idea/
.vscode/
# 操作系统文件
.DS_Store # Mac
Thumbs.db # Windows
# 环境变量文件
.env
.env.local
```

#### 注意
- `.gitignore`文件需提交到Git仓库（`git add .gitignore && git commit -m "docs: add .gitignore"`），供团队其他成员共用。
- 若已误将文件提交到仓库，需先删除仓库中的文件，再添加到`.gitignore`（如`git rm --cached node_modules/`）。