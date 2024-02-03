import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './services/prisma.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TracingMiddleware } from './middlewares/tracing.middleware';

@Module({
  imports: [ConfigModule.forRoot(), PostsModule, UsersModule],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TracingMiddleware).forRoutes('*');
  }
}
