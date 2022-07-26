import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedRoom } from '../models/room.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService : FeedService) {}

    @Post()
    create(@Body() feedPost: FeedPost): Observable<FeedPost> { 
        // return this.feedService.createPost(post)
        return from(this.feedService.createPost(feedPost));
    }

    @Post('post')
    create_Post(@Body() feedPost: FeedPost):Observable<FeedPost>{
        
        return this.feedService.createPost(feedPost);
    }

    @Post('room')
    create_Room(@Body() feedRoom: FeedRoom):Observable<FeedRoom>{
        
        return this.feedService.createRoom(feedRoom);
    }


    @Get()
    FindAll(): Promise<FeedPost[]>{
        return this.feedService.findAllPosts();
    }


    @Get(':id')
    FindRoomPosts(
        @Param('id') id: number,
         @Body() feedRoom: FeedRoom
         ): Promise<FeedPost[]>{
        return this.feedService.findRoomPosts(id, feedRoom);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() feedPost: FeedPost
    ): Observable<UpdateResult>{
        return this.feedService.updatePost(id, feedPost)
    }

    @Delete(':id')
    delete( @Param('id') id: number): Observable<DeleteResult>{
        return this.feedService.deletePost(id);
    }

    
}