migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6duxpqo2wuo2wis")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6duxpqo2wuo2wis")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
