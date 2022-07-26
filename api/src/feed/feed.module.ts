import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/post.entity';
import { FeedRoomEntity } from './models/room.entity';

@Module({
    imports : [
        TypeOrmModule.forFeature([FeedPostEntity]),
        TypeOrmModule.forFeature([FeedRoomEntity])
    ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
