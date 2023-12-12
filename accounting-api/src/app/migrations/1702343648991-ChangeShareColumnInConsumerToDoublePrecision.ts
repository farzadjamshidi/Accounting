import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeShareColumnInConsumerToDoublePrecision1702343648991 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.query(
      `ALTER TABLE public.consumer
        ALTER COLUMN share TYPE double precision;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
  }

}
