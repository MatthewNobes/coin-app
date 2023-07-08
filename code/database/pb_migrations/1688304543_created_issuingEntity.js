migrate((db) => {
  const collection = new Collection({
    "id": "t6cyc1n7mxvj4hp",
    "created": "2023-07-02 13:29:03.326Z",
    "updated": "2023-07-02 13:29:03.326Z",
    "name": "issuingEntity",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f6ffwxd9",
        "name": "name",
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
        "id": "n3wr15ue",
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
        "id": "70subnup",
        "name": "startDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "l8weekat",
        "name": "endDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "rntjnqlc",
        "name": "website",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("t6cyc1n7mxvj4hp");

  return dao.deleteCollection(collection);
})
