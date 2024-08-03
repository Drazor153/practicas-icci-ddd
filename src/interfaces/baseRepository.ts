import { Insertable, Selectable } from 'kysely';

export interface BaseKyselyRepository<T> {
  find(): Promise<Selectable<T>[]>;
  save(data: Insertable<T>): Promise<Selectable<T>>;
}
