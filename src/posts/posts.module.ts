import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
