migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("reix7new0sc5222")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3ql8fzo",
    "name": "url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("reix7new0sc5222")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3ql8fzo",
    "name": "field",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
