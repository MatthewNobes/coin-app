migrate((db) => {
  const collection = new Collection({
    "id": "3cwvx71mx76txut",
    "created": "2023-07-02 13:18:46.096Z",
    "updated": "2023-07-02 13:18:46.096Z",
    "name": "conditions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmvr0o6t",
        "name": "conditionShort",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cpzlarrc",
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
        "id": "cis5wkji",
        "name": "conditionLong",
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
  const collection = dao.findCollectionByNameOrId("3cwvx71mx76txut");

  return dao.deleteCollection(collection);
})
