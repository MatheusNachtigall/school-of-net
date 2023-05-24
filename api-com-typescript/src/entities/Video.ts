import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
import { Watcher } from "./Watcher";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, (room) => room.videos)
  @JoinColumn({ name: "category_id" })
  categories: Category;

  @ManyToMany(() => Watcher, (watcher) => watcher.videos)
  watchers: Watcher;

  @Column()
  duration: Number;

  @CreateDateColumn({ default: Date.now() })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
