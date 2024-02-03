/* eslint-disable strict */

import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async createUser(payload: { email: string; name: string }): Promise<User> {
    return await this.userRepository.createUser(payload);
  }

  async getUserById(payload: { id: string }): Promise<User> {
    return await this.userRepository.getUserById(payload);
  }

  async deleteUserById(payload: { id: string }): Promise<User> {
    return await this.userRepository.deleteUserById(payload);
  }
}
