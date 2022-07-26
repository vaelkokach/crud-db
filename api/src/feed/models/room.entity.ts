import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FeedPostEntity } from "./post.entity";

@Entity('feed_room')
export class FeedRoomEntity{
@PrimaryGeneratedColumn("uuid")
id: number;

@Column({default: ''})
name: string;

@Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
createAt: Date;

@OneToMany( ()=> FeedPostEntity, feed_post =>feed_post.room,{cascade:true})
posts: FeedPostEntity[];

}