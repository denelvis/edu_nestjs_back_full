import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@example.com", description: "email" })
  readonly email: string;
  @ApiProperty({ example: "123", description: "password" })
  readonly password: string;
}
