import { ConfigurableModuleBuilder } from '@nestjs/common';
import { SqliteOptions } from './sqliteOptions';

export const {
  ConfigurableModuleClass: ConfigurableDatabaseModule,
  MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<SqliteOptions>()
  .setClassMethodName('forRoot')
  .build();
