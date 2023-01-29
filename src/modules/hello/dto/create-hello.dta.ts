import { IsInt,IsString } from 'class-validator'; //缺少相关模块则   npm i class-validator 进行安装

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number

    @IsString()
    readonly breed: string;
}