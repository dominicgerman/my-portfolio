migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  collection.name = "pages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27")

  collection.name = "page"

  return dao.saveCollection(collection)
})
