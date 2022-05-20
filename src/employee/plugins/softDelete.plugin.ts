import mongoose, { CallbackError, MongooseError, QueryOptions, SaveOptions } from 'mongoose';

export const softDeletePlugin = (schema: mongoose.Schema) => {
  schema.add({
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  });

  //define list of all types of queries that can trigger the find method
  const findQueries = [
    'count',
    'find',
    'findOne',
    'findOneAndDelete',
    'findOneAndRemove',
    'findOneAndUpdate',
    'update',
    'updateOne',
    'updateMany',
  ];

  findQueries.forEach((type) => {
    //define and run pre hook method when any of the list find queries is used
    schema.pre(
      type,
      async function (this, next: (err?: CallbackError) => void) {
        //proceed to the next method if the isDeleted filter is set
        if (this.getFilter().isDeleted == true) {
          return next();
        }
        //automatically set isDeleted filter to false if not set by user
        this.setQuery({ ...this.getFilter(), isDeleted: false });
        next();
      },
    );
  });

  //define static custom method to find all documents that were soft-deleted
  schema.static('findAllSoftDeleted', async function ( options?: QueryOptions) {
    return this.find({ isDeleted: true, ...options }, {}, {limit: 10});
  });

  //define static custom method to find only document with id which was soft-deleted
  schema.static('findSoftDeletedById', async function (id: string) {
    return this.find({ _id: id, isDeleted: true });
  });


  //define static cutom method to restore only soft-deleted document which matches the given id
  schema.static('restoreSoftDeletedById', async function (id: string) {
    const deletedDocument = await this.findOne({ isDeleted: true, id: id });

    //if document is not found, revert to user
    if (!deletedDocument) {
      return Error('deleted document not found');
    }

    //override and make mongoose to think that the doc is not deleted
    deletedDocument.$isDeleted(false);
    deletedDocument.isDeleted = false;
    deletedDocument.deletedAt = null;
    
    //save and return updated document
    return await deletedDocument.save().catch((e: MongooseError) => {
      throw new Error(e?.name + ' ' + e?.message);
    });
  });


  //define static custom method to restore all soft-deleted documents in collection
  schema.static('restoreAllSoftDeleted', async function (query) {
    const updatedQuery = {
      ...query,
      isDeleted: true,
    };
    const deletedTemplates = await this.find(updatedQuery);
    if (!deletedTemplates) {
      return Error('element not found');
    }
    let restored = 0;
    for (const deletedTemplate of deletedTemplates) {
      if (deletedTemplate.isDeleted) {
        //override and make mongoose to think that the doc is not deleted
        deletedTemplate.$isDeleted(false);
        deletedTemplate.isDeleted = false;
        deletedTemplate.deletedAt = null;
        await deletedTemplate
          .save()
          .then(() => restored++)
          .catch((e: MongooseError) => {
            throw new Error(e?.name + ' ' + e?.message);
          });
      }
    }
    return { restored };
  });


  //define static custom method to soft-delete document by id
  schema.static('softDeleteById', async function (id, options?: SaveOptions) {
    const document = await this.findById(id);

    if (!document) {
      return { message: 'Document not found' };
    }
    document.$isDeleted(true);
    document.isDeleted = true;
    document.deletedAt = new Date();

    return await document.save(options).catch((e: MongooseError) => {
      throw new Error(e?.name + ' ' + e?.message);
    });
  });


  //define custom method to soft-delete all documents that matches the given query
  schema.static('softDelete', async function (query, options?: SaveOptions) {
    const templates = await this.find(query);
    if (!templates) {
      return Error('Element not found');
    }
    let deleted = 0;
    for (const template of templates) {
      if (!template.isDeleted) {
        //override and make mongoose to think that the doc is deleted
        template.$isDeleted(true);
        template.isDeleted = true;
        template.deletedAt = new Date();
        await template
          .save(options)
          .then(() => deleted++)
          .catch((e: Error) => {
            throw new Error(e?.name + ' ' + e?.message);
          });
      }
    }
    return { deleted };
  });
};
