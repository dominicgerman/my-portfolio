migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjvxtzd1",
    "name": "page_links",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "reix7new0sc5222",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // remove
  collection.schema.removeField("mjvxtzd1")

  return dao.saveCollection(collection)
})
