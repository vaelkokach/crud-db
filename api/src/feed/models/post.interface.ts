import { FeedRoomEntity } from "./room.entity";

export interface FeedPost{
    id?: number;
    body?: string;
    createdAt?: Date;
    room?:FeedRoomEntity;
}