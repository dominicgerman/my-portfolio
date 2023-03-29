migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ak4plwga",
    "name": "long_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // remove
  collection.schema.removeField("ak4plwga")

  return dao.saveCollection(collection)
})
