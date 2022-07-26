import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { FeedAnonimEntity } from 'src/feed/models/anonim.entity';
import { FeedAnonim } from 'src/feed/models/anonim.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AnonimService {

    constructor(
        @InjectRepository(FeedAnonimEntity)
        private readonly feedAnonimRepository: Repository<FeedAnonimEntity>
) {}


createUser(feedAnonim: FeedAnonim): Observable<FeedAnonimEntity> {
    // return this.feedPostRepository.save(feedPost);
    return from(this.feedAnonimRepository.save(feedAnonim));//rxjs observable
}


async findAllUsers(): Promise<FeedAnonim[]>{
    return await this.feedAnonimRepository.find();
}


updateUser(id: number, feedAnonim: FeedAnonim): Observable<UpdateResult> {
    return from(this.feedAnonimRepository.update(id, feedAnonim))
}
deleteUser(id: number): Observable<DeleteResult>{
    return from(this.feedAnonimRepository.delete(id));
}
}




