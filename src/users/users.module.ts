import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersController } from "./controllers/users/users.controller";
import { UsersService } from "./services/users/users.service";
import { User } from "./users.model";
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
