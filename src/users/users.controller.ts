import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';
import { User } from '@prisma/client';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Tracer } from 'src/decorators/trace.decorator';

@ApiTags('Users Endpoints')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body() payload: CreateUserDTO,
  ): Promise<User | HttpException> {
    return await this.usersService.createUser(payload);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @Tracer()
  async getUserById(@Param() params: { id: string }) {
    await this.usersService.simulateRandomTimeoutAsync();
    return await this.usersService.getUserById(params);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  async deleteUserById(@Param() params: { id: string }) {
    return await this.usersService.deleteUserById(params);
  }
}
