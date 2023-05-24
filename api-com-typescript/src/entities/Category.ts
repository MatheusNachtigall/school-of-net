import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Video } from "./Video";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ default: Date.now() })
  created_at: Date;

  @OneToMany(() => Video, (video) => video.categories)
  videos: Video[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
