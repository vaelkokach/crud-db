import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { FeedUserEntity } from 'src/feed/models/user.entity';
import { FeedUser } from 'src/feed/models/user.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(FeedUserEntity)
        private readonly feedUserRepository: Repository<FeedUserEntity>
) {}

createUser(feedUser: FeedUser): Observable<FeedUser> {
    // return this.feedPostRepository.save(feedPost);
    return from(this.feedUserRepository.save(feedUser));//rxjs observable
}


async findAllUsers(): Promise<FeedUser[]>{
    return await this.feedUserRepository.find();
}



updateUser(id: number, feedUser: FeedUser): Observable<UpdateResult> {
    return from(this.feedUserRepository.update(id, feedUser))
}
deleteUser(id: number): Observable<DeleteResult>{
    return from(this.feedUserRepository.delete(id));
}
}