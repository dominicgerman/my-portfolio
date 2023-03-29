migrate((db) => {
  const collection = new Collection({
    "id": "7qsy4an0z4lde27",
    "created": "2023-03-29 20:00:44.684Z",
    "updated": "2023-03-29 20:00:44.684Z",
    "name": "about",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "raimtr1z",
        "name": "heading",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("7qsy4an0z4lde27");

  return dao.deleteCollection(collection);
})
