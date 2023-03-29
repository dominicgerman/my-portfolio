migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("reix7new0sc5222")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("reix7new0sc5222")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
