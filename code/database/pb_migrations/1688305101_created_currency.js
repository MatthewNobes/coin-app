migrate((db) => {
  const collection = new Collection({
    "id": "23puwbtuppjsib7",
    "created": "2023-07-02 13:38:21.873Z",
    "updated": "2023-07-02 13:38:21.873Z",
    "name": "currency",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lselxnnk",
        "name": "name",
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
        "id": "djasyt9p",
        "name": "description",
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
        "id": "z3skxwj0",
        "name": "code",
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
  const collection = dao.findCollectionByNameOrId("23puwbtuppjsib7");

  return dao.deleteCollection(collection);
})
