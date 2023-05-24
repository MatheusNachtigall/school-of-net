import { MigrationInterface, QueryRunner } from "typeorm";

export class default1684876553933 implements MigrationInterface {
    name = 'default1684876553933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "video_watcher" ("video_id" character varying NOT NULL, "watcher_id" character varying NOT NULL, CONSTRAINT "PK_c603bc87165f03a1d90f1a88ccf" PRIMARY KEY ("video_id", "watcher_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc557d0d02d995f3a33929798c" ON "video_watcher" ("video_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_645e167a3e787f360cd35fbcc7" ON "video_watcher" ("watcher_id") `);
        await queryRunner.query(`ALTER TABLE "video_watcher" ADD CONSTRAINT "FK_bc557d0d02d995f3a33929798c4" FOREIGN KEY ("video_id") REFERENCES "watchers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "video_watcher" ADD CONSTRAINT "FK_645e167a3e787f360cd35fbcc7e" FOREIGN KEY ("watcher_id") REFERENCES "videos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video_watcher" DROP CONSTRAINT "FK_645e167a3e787f360cd35fbcc7e"`);
        await queryRunner.query(`ALTER TABLE "video_watcher" DROP CONSTRAINT "FK_bc557d0d02d995f3a33929798c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_645e167a3e787f360cd35fbcc7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc557d0d02d995f3a33929798c"`);
        await queryRunner.query(`DROP TABLE "video_watcher"`);
    }

}
