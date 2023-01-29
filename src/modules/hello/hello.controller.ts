import { Controller, Get, Post, Patch, Query, Delete, Body, Param, Headers } from '@nestjs/common'
import { ApiResponse, ApiTags, ApiQuery, ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger'; //导入相关的swagger请求
import { type } from 'os';
import {Hello, UserRole} from './classes/hello' //将我们的实例导入
import { HelloService } from './hello.service'

@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello') // 这个结点 我们取名叫做hello 对应的url
export class HelloController { //helloController 控制器
    constructor(private readonly helloService: HelloService) { } //helloService将这个服务进行注入
    // 以下是对应的控制器内部的 方法
    // 查询
    // @Get()
    // fetch(@Query() { id }, @Headers('token') token): string { //Query 查询参数
    //     console.log(token)
    //     return this.helloService.fetch(id);
    // }
    @Get()
    //请求过程中要传输的参数 告诉文档 让文档生成
    @ApiQuery({name:'name', required:false}) //required 是否必传 默认是必传
    @ApiQuery({name:'role', enum:UserRole}) //:'调用实例中的哪个',对应的属性 enum 枚举
    @ApiQuery({name:'id',example:1}) //提示输入词
    @ApiResponse({ //返回
        status:200, //状态码
        description:'get....', //描述
        type:Hello //指明类型
    })
    fetch(@Query() { id }, @Headers('token') token): string { //Query 查询参数
        console.log(token)
        return this.helloService.fetch(id);
    }

    //创建
    @Post()
    save(@Body() { message }): string { //body 请求体内部的参数
        return this.helloService.save(message);
    }

    //更新
    @Patch(':id') 
    update(@Param() { id }, @Body() { message }): string {
        return this.helloService.update(id, message);
    }

    //删除
    @Delete()
    remove(@Query() { id }): string {
        return this.helloService.remove(id)
    }
}