import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FeedPost } from 'src/feed/models/post.interface';
import { FeedRoom } from 'src/feed/models/room.interface';
import { FeedUser } from 'src/feed/models/user.interface';
import { FeedService } from 'src/feed/services/feed.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UsersService } from './users.service';

@Controller('feed_users')
export class UsersPostController {
    
    
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
            return this.feedService.findRoomPosts(id, feedRoom);//
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

@Controller('users')
export class UsersController {
        constructor(private userService : UsersService) {}

        @Post('post')
        create_Post(@Body() feedUser: FeedUser):Observable<FeedUser>{
            
            return this.userService.createUser(feedUser);
        }

        @Get()
        FindAll(): Promise<FeedUser[]>{
            return this.userService.findAllUsers();
        }

        @Put(':id')
        update(
            @Param('id') id: number,
            @Body() feedUser: FeedUser
        ): Observable<UpdateResult>{
            return this.userService.updateUser(id, feedUser)
        }

        @Delete(':id')
        delete( @Param('id') id: number): Observable<DeleteResult>{
            return this.userService.deleteUser(id);
        }
}