import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller'; //获取Controller 
import { HelloService } from './hello.service'; //获取Service

@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {} //导出模块方法
