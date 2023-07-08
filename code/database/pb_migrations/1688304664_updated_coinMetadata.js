migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tofnxkbssa8j0u3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8o75lqhd",
    "name": "issuingEntity",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t6cyc1n7mxvj4hp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tofnxkbssa8j0u3")

  // remove
  collection.schema.removeField("8o75lqhd")

  return dao.saveCollection(collection)
})
