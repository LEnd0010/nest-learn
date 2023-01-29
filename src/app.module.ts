import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module'; //模块方法导入(需要先导出)

@Module({ //装饰器 Module 装饰器
  imports: [HelloModule], //用于导入对应的我们写的依赖模块
  controllers: [AppController], //控制器
  providers: [AppService], //服务
})
export class AppModule {} //这是一个类 真正起作用的是Module  整体就是一个模块 APP模块
