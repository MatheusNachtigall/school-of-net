import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Video } from "./Video";

@Entity("watchers")
export class Watcher {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ default: Date.now() })
  created_at: Date;

  @ManyToMany(() => Video, (video) => video.watchers)
  @JoinTable({
    name: "video_watcher",
    joinColumn: {
      name: "video_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "watcher_id",
      referencedColumnName: "id",
    },
  })
  videos: Video[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
