migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // remove
  collection.schema.removeField("fijgokgd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fijgokgd",
    "name": "content",
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
})
