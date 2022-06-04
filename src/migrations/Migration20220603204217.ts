import { Migration } from '@mikro-orm/migrations';

export class Migration20220603204217 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" alter column "created_at" drop default;');
    this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" alter column "created_at" type timestamptz using ("created_at"::timestamptz);');
    this.addSql('alter table "post" alter column "created_at" set default \'2022-06-03 20:41:43.797821+00\';');
  }

}
