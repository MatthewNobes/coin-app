migrate((db) => {
  const collection = new Collection({
    "id": "tofnxkbssa8j0u3",
    "created": "2023-07-02 13:03:52.868Z",
    "updated": "2023-07-02 13:03:52.868Z",
    "name": "coinMetadata",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uwblm41g",
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
        "id": "ecthpwof",
        "name": "faceValue",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "wth3d4xw",
        "name": "yearsOfIssue",
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
  const collection = dao.findCollectionByNameOrId("tofnxkbssa8j0u3");

  return dao.deleteCollection(collection);
})
