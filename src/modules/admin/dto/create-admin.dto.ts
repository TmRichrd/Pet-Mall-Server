import { ApiProperty } from "@nestjs/swagger";
import { Ref } from "@typegoose/typegoose";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Pet } from "src/modules/pet/models/pet.model";
export class CreateAdminDto {
  @ApiProperty({ description: "账号", example: "xxxxx@xx.com" })
  @IsNotEmpty({ message: "账号不能为空" })
  account: string;

  @ApiProperty({ description: "密码", example: "123456" })
  @IsNotEmpty({ message: "密码不能为空" })
  password: string;

  @ApiProperty({ description: "用户名", example: "张三" })
  @IsNotEmpty({ message: "用户名不能为空" })
  username: string;

  @ApiProperty({ description: "用户头像", example: "http://xxx.com" })
  @IsNotEmpty({ message: "头像不能为空" })
  avatar: string;

  @ApiProperty({ description: "角色ID", example: "61c3e579784cc8141af1d50f" })
  @IsNotEmpty({ message: "角色不能为空" })
  roleId: string;

  @ApiProperty({ description: "手机号", example: "17612345678" })
  @IsPhoneNumber("CN", { message: "手机格式不正确" })
  phone: string;

  @ApiProperty({ description: "密码盐", example: "oia4" })
  password_salt: string

  @ApiProperty({ description: "所属店铺Id" })
  @IsNotEmpty({ message: "店铺id不能为空" })
  petDetail: Ref<Pet>;

  @ApiProperty({ description: "是否删除", required: false, default: false })
  is_delete?: boolean

  @ApiProperty({ description: "启用/禁用", required: false, default: true })
  status?: boolean;

}

export class LoginDto {
  @ApiProperty({ description: "账号", example: "1084491297@qq.com" })
  @IsNotEmpty()
  readonly account: string;

  @ApiProperty({ description: "密码", example: "1234565" })
  @IsNotEmpty()
  readonly password: string;
}