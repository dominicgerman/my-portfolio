migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
