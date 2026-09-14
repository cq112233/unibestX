## 分包 :
只需把'/uni_modules/e-chart/components'目录拷贝到子包即可  
而'/uni_modules/e-chart/static/app'并不会编译到小程序中, 仅在原生APP通过web-view的方式引入  
[static目录的条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)