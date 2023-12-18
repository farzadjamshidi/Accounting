import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePriceColumnInExpenseToDoublePrecision1702417430683 implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.query(
      `ALTER TABLE public.expense
        ALTER COLUMN price TYPE double precision;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
  }

}
