migrate((db) => {
  const collection = new Collection({
    "id": "0wxksli8u1e664n",
    "created": "2023-07-02 13:15:22.037Z",
    "updated": "2023-07-02 13:15:22.037Z",
    "name": "coinInstances",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ey2qioau",
        "name": "yearOfIssue",
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
        "id": "rbw6r1jh",
        "name": "obverseImage",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "ulril3wq",
        "name": "reverseImage",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "d2jggnng",
        "name": "edgeImage",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("0wxksli8u1e664n");

  return dao.deleteCollection(collection);
})
