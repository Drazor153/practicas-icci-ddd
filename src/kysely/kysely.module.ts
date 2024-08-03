import { Global, Module } from '@nestjs/common';
import { SqliteDialect } from 'kysely';
import SQLite from 'better-sqlite3';

import { Database } from './database';
import { SqliteOptions } from './sqliteOptions';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';

@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (options: SqliteOptions) => {
        const dialect = new SqliteDialect({
          database: new SQLite(options.filename || ':memory:'),
        });
        return new Database({
          dialect,
        });
      },
    },
  ],
})
export class KyselyModule extends ConfigurableDatabaseModule {}
