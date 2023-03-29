migrate((db) => {
  const collection = new Collection({
    "id": "8dq0f442gjptfg1",
    "created": "2023-03-29 14:16:06.956Z",
    "updated": "2023-03-29 14:16:06.956Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "da6512uy",
        "name": "title",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1");

  return dao.deleteCollection(collection);
})
