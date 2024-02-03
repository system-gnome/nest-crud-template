/* eslint-disable strict */

import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '@prisma/client';
import { Tracer } from 'src/decorators/trace.decorator';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async createUser(payload: { email: string; name: string }): Promise<User> {
    return await this.userRepository.createUser(payload);
  }

  @Tracer()
  async getUserById(payload: { id: string }): Promise<User> {
    return await this.userRepository.getUserById(payload);
  }

  async deleteUserById(payload: { id: string }): Promise<User> {
    return await this.userRepository.deleteUserById(payload);
  }
  async simulateRandomTimeoutAsync() {
    console.log('Simulated Async - START');

    const randomDuration = Math.random() * 4000 + 1000; // between 1000ms and 5000ms
    await new Promise((resolve) => setTimeout(resolve, randomDuration));

    console.log('Simulated Async - END');
  }
}
