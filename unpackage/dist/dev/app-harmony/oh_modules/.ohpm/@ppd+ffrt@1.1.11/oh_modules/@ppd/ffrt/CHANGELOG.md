# Changelog

## v1.0.0

对外提供FFRT C++接口，具体接口如下：

- cpp/condition_variable.h
- cpp/mutex.h
- cpp/queue.h
- cpp/sleep.h
- cpp/task.h

## v1.0.1

- 指定接口文件目录headerPath

## v1.0.2

- 更新README.md文件中的使用方法。

## v1.0.3

- README.md中新增适用SDK版本信息。

## v1.0.4

- cpp/queue.h新增获取主队列接口`get_main_queue()`

## v1.0.5

- 统一路径为`"ffrt/cpp/xxx.h"`

## v1.0.6

- ffrt.h新增loop.h头文件

## v1.0.7

- 修改最低兼容SDK版本为API 12。
- C++头文件增加doxygen注释。
- 更改`@ppd/ffrt`为纯头文件har包，去除二进制内容，建议从此版本开始使用。

## v1.0.8

- 增加cpp/shared_mutex.h读写锁头文件。

## v1.0.9

- 增加FFRT C++接口使用指南文档链接。

## v1.1.0

- 增加FFRT JobPartner并发范式C++接口。

## v1.1.1

- 队列任务支持以线程模式运行。

## v1.1.2

- 增加FFRT JobRing并发范式C++接口。
- JobPartner代码优化。

## v1.1.3

- 增加FFRT task_handle拷贝构造和拷贝赋值接口。

## v1.1.4

- 修改`useNormalizedOHMUrl`配置。

## v1.1.5

- 增加动态加载so功能，适配二进制前向兼容。
- 增加so适配ohpm递归依赖解析。

## v1.1.6

- 更新readme.md

## v1.1.7

- 解决`job_partner`在特定场景下和协程上下文冲突的问题。
- 更新Doxygen注释。

## v1.1.8

- fiber 接口改为运行时动态加载，适配二进制前向兼容。

## v1.1.9

- 修正C++头文件中@param、@tparam与函数形参/模板形参名不一致的问题（cpp/queue.h、cpp/task.h、cpp/pattern/job_partner.h）。
- cpp/pattern/job_utils.h模板参数`multi_consumer`重命名为`MultiConsumer`，与配对的`MultiProducer`命名风格统一。
- 清理cpp/pattern/job_ring.h中未使用的局部变量，清理cpp/queue.h中void函数多余的return。

## v1.1.10

- 解决`job_partner`在push失败的场景下出现协程上下文被破坏的问题。

## v1.1.11

- 修正cpp/pattern/job_utils.h中`mpmc_queue`槽位序列号的读取内存序（relaxed→acquire），消除多生产者/多消费者跨线程投递的数据竞争。
- 修正cpp/pattern/job_ring.h中`job_ring::wait()`协助路径处理完任务后未唤醒等待者、可能导致并发等待永久阻塞的问题。
- 修正cpp/pattern/job_partner.h中`job_partner::submit`任务计数自增的内存序（relaxed），使其脱离不在同步链上的不必要同步；任务副作用由`done_one`→`all_done`同步链保证。
- 统一cpp/pattern/job_ring.h中`token`、`num`的内存序：`num` 维持 release/acquire 配对，`token.load` 保留 relaxed（仅作 flush 快速路径判断，互斥由 token CAS 保证）。
- 优化cpp/pattern/job_utils.h中`ref_obj::ptr`拷贝/移动赋值的引用计数顺序，改为先增新引用、后释旧引用的写法。
- job_utils.h 中 FFRT_API_LOG/TRACE 占位符采用 plain variadic 签名，修复 Clang 16+ `-Wgnu-zero-variadic-macro-arguments` 触发的 `-Werror` 构建失败（同步自上游）。
