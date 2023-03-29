migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrct8dgt",
    "name": "subheading",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i09azcnq",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  // remove
  collection.schema.removeField("zrct8dgt")

  // remove
  collection.schema.removeField("i09azcnq")

  return dao.saveCollection(collection)
})
