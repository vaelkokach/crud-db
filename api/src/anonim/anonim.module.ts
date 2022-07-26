import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedAnonimEntity } from 'src/feed/models/anonim.entity';
import { FeedPostEntity } from 'src/feed/models/post.entity';
import { FeedRoomEntity } from 'src/feed/models/room.entity';
import { FeedService } from 'src/feed/services/feed.service';
import { AnonimController } from './anonim.controller';
import { AnonimService } from './anonim.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([FeedPostEntity]),
    TypeOrmModule.forFeature([FeedRoomEntity]),
    TypeOrmModule.forFeature([FeedAnonimEntity]),
],
  providers: [FeedService, AnonimService],
  controllers: [AnonimController]
})
export class AnonimModule {}
