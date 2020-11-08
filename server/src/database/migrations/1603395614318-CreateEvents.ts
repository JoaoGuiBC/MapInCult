import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEvents1603395614318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'year',
            type: 'integer',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 15,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 15,
          },
          {
            name: 'link',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
