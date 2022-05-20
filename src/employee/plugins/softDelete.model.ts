import { Document, SaveOptions } from 'mongoose';
import * as mongoose from 'mongoose';

export interface SoftDeleteModel<T extends Document> extends mongoose.Model<T> {
  findAllSoftDeleted(): Promise<T[]>;
  restoreAllSoftDeleted(query: Record<string, any>): Promise<{ restored: number }>;
  softDelete(
    query: Record<string, any>,
    options?: SaveOptions,
  ): Promise<{ deleted: number }>;
  findSoftDeletedById(id : string): Promise<T>;
  restoreSoftDeletedById(id : string): Promise<T>;
  softDeleteById(id : string): Promise<T>;
}
