import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_user')
export class FeedUserEntity{
@PrimaryGeneratedColumn("uuid")
id: number;

@Column({default: ''})
name: string;

@Column({default: ''})
email: string;

@Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
RegisterAt: Date;
}