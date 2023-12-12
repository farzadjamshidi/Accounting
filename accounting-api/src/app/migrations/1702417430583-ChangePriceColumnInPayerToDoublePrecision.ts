import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePriceColumnInPayerToDoublePrecision1702417430583 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.query(
      `ALTER TABLE public.payer
          ALTER COLUMN price TYPE double precision;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
  }

}
