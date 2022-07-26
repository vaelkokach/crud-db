import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import { FeedRoomEntity } from '../models/room.entity';
import { FeedRoom } from '../models/room.interface';


@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>,
        @InjectRepository(FeedRoomEntity)
        private readonly feedRoomRepository: Repository<FeedPostEntity>
    ) {}

    createPost(feedPost: FeedPost): Observable<FeedPost> {
        // return this.feedPostRepository.save(feedPost);
        return from(this.feedPostRepository.save(feedPost));//rxjs observable
    }


    async findAllPosts(): Promise<FeedPost[]>{
        return await this.feedPostRepository.find();
    }


     async findRoomPosts(id: number, feedRoom: FeedRoom): Promise<FeedPost[]>{
        return await this.feedPostRepository.find({
           relations:['room'],
           relationLoadStrategy:'query',
           where: {
            room: {id: id}
           }
         });
    }
    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
        return from(this.feedPostRepository.update(id, feedPost))
    }
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.feedPostRepository.delete(id));
    }
    createRoom(feedRoom: FeedRoom): Observable<FeedRoom> {
        return from(this.feedRoomRepository.save(feedRoom));//rxjs observable
    }
}
