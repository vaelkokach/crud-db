import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_anonim')
export class FeedAnonimEntity{
@PrimaryGeneratedColumn("uuid")
id: number;

@Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
RegisterAt: Date;
}