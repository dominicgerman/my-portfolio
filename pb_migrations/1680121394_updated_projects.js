migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lu0znwtd",
    "name": "project_tools",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6duxpqo2wuo2wis",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // remove
  collection.schema.removeField("lu0znwtd")

  return dao.saveCollection(collection)
})
