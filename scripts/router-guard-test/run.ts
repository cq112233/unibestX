// 先跑垫片，再动态导入被测模块——静态 import 会被提升到垫片之前
await import('./shim.ts');

const { failures, runGuardCases, runUrlCases } = await import('./cases.ts');

runUrlCases();
runGuardCases();

if (failures.length > 0) {
  console.error(`\n❌ ${failures.length} 条失败`);
  process.exitCode = 1;
} else {
  console.log('\n✅ 全部通过');
}
