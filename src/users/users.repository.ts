import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(payload: { email: string; name: string }): Promise<User> {
    return await this.prisma.user.create({ data: payload });
  }

  async getUserById(payload: { id: string }): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async updateUserById(payload: Partial<User>): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: payload.id,
      },
      data: payload,
    });
  }

  async deleteUserById(payload: { id: string }): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where: {
          id: payload.id,
        },
      });
    } catch (error) {
      throw new HttpException('Failed to delete user', HttpStatus.BAD_REQUEST);
    }
  }
}
