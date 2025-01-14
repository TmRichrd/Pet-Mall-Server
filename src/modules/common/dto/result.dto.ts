import { ApiProperty } from '@nestjs/swagger';

export class resultDto {
  @ApiProperty({ description: '返回数据', example: {} })
  readonly data?: any;

  @ApiProperty({ description: '状态码', example: 200 })
  readonly statusCode: number;

  @ApiProperty({ description: '返回消息', example: '请求成功' })
  readonly message: string;
}
