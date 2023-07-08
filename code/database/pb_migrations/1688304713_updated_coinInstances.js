migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wxksli8u1e664n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vp56pkoa",
    "name": "coinID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "tofnxkbssa8j0u3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yiad3tj6",
    "name": "condition",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3cwvx71mx76txut",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wxksli8u1e664n")

  // remove
  collection.schema.removeField("vp56pkoa")

  // remove
  collection.schema.removeField("yiad3tj6")

  return dao.saveCollection(collection)
})
