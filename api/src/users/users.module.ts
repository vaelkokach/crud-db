import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from 'src/feed/models/post.entity';
import { FeedRoomEntity } from 'src/feed/models/room.entity';
import { FeedUserEntity } from 'src/feed/models/user.entity';
import { FeedService } from 'src/feed/services/feed.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([FeedPostEntity]),
    TypeOrmModule.forFeature([FeedRoomEntity]),
    TypeOrmModule.forFeature([FeedUserEntity]),
],
  providers: [FeedService, UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
