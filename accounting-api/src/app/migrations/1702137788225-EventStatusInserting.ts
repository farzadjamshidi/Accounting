import { MigrationInterface, QueryRunner } from "typeorm";

export class EventStatusInserting1702137788225 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.query(
      `INSERT INTO public.event_status(
          id, name)
          VALUES (1, 'New'), (2, 'Completed');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
  }

}
