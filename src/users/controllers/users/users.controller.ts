import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./../../dtos/CreateUser.dto";
import { UsersService } from "../../../users/services/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
}
