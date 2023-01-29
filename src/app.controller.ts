import { Controller, Get } from '@nestjs/common'; //需要什么请求 从这个包里面进行导入 即可
import { AppService } from './app.service';

@Controller() //被这个装饰器装饰的类 就叫控制器
export class AppController {
  constructor(private readonly appService: AppService) {} //这里是将AppService 注入

  @Get() //他所控制的某一个请求的方法 get 就用get  post 就用post 等等
  getHello(): string {
    return this.appService.getHello();
  }
}
