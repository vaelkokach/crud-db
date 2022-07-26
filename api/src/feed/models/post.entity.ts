import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FeedRoomEntity } from "./room.entity";

@Entity('feed_post')
export class FeedPostEntity{
@PrimaryGeneratedColumn("uuid")
id: number;

@Column({default: ''})
body: string;

@Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
createAt: Date;

@ManyToOne (() => FeedRoomEntity, feed_room=>feed_room.posts)
room:FeedRoomEntity;
}