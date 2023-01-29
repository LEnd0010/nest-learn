//给予一个实例 以下的设置都需要到目录下的 controller 中进行导入
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole { //定义一个枚举
    Admin = 'Admin',
    User = 'User',
}

export class Hello {
    @ApiProperty({example: 'Kitty', description:'The name of the Cat'})
    name:string;

    @ApiProperty({example:1, description:'The age of the Cat'})
    age:number

    @ApiProperty({
        example:'Maine Coon', //展示案例
        description:'The breed of the Cat', //描述
    })
    breed:string

    @ApiProperty({enum:UserRole}) //调用枚举
    role:UserRole;

    @ApiProperty({ example:10})
    id:number
}