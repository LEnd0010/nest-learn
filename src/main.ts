import { NestFactory } from '@nestjs/core'; //创建一个实例
import {DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() { //这里是es6+ 的语法  通过同步的方式去写异步的方法
  const app = await NestFactory.create(AppModule); //通过实例去创建一个AppModule 的模块 ->对应的文件 app.module.ts 

  // 设置swagger 文档相关配置
  const swaggerOptions = new DocumentBuilder() //生成文档
  .setTitle('nest-starter api document') //取名字
  .setDescription('this is nest starterproject api document') //描述信息
  .setVersion('1.0') //给他一个版本号
  .addBearerAuth() //持有者身份验证
  .build(); //创建
  const document = SwaggerModule.createDocument(app,swaggerOptions); //创建document文档 到app容器上 
  SwaggerModule.setup('doc',app, document) //通过服务访问的路径是doc

  await app.listen(3000); //端口位置
}
bootstrap(); //执行方法 将服务启动
