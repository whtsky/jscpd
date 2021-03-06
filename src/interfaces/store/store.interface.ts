import { IStoreValue } from './store-value.interface';

export interface IStore<TValue extends IStoreValue> {
  connect(): void;

  init(values: { [key: string]: TValue }): void;

  get(key: string): TValue;

  set(key: string, value: TValue): void;

  update(key: string, value: TValue): void;

  delete(key: string): void;

  has(key: string): boolean;

  count(): number;

  hasKeys(keys: string[]): boolean[];

  getAll(): { [key: string]: TValue };

  getAllByKeys(keys: string[]): TValue[];

  close(): void;
}
