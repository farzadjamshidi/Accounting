import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePriceColumnInConsumerToDoublePrecision1702417407742 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.query(
      `ALTER TABLE public.consumer
          ALTER COLUMN price TYPE double precision;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
  }

}
