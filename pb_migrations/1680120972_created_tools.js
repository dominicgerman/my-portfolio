migrate((db) => {
  const collection = new Collection({
    "id": "6duxpqo2wuo2wis",
    "created": "2023-03-29 20:16:12.572Z",
    "updated": "2023-03-29 20:16:12.572Z",
    "name": "tools",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpswufly",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6duxpqo2wuo2wis");

  return dao.deleteCollection(collection);
})
