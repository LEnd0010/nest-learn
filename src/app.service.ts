import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { //使用Injectable 修饰 则这个对象会变成 可以插入的 容器/组件
  getHello(): string {
    return 'Hello World!';
  }
}
