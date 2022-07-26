import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  Observable } from 'rxjs';
import { FeedAnonim } from 'src/feed/models/anonim.interface';
import { FeedPost } from 'src/feed/models/post.interface';
import { FeedRoom } from 'src/feed/models/room.interface';
import { FeedService } from 'src/feed/services/feed.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AnonimService } from './anonim.service';



@Controller('feed_anonim')

    export class AnonimController {
        constructor(private feedService : FeedService) {}
    
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

@Controller('anonim')
export class AnonimsController {
        constructor(private anonimService : AnonimService) {}

        @Post('post')
        create_User(@Body() feedAnonim: FeedAnonim):Observable<FeedAnonim>{
            
            return this.anonimService.createUser(feedAnonim);
        }

        @Get()
        FindAll(): Promise<FeedAnonim[]>{
            return this.anonimService.findAllUsers();
        }


        @Delete(':id')
        delete( @Param('id') id: number): Observable<DeleteResult>{
            return this.anonimService.deleteUser(id);
        }
}