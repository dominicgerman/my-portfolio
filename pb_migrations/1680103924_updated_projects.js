migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qumpe9uw",
    "name": "short_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wba6wzdk",
    "name": "tools",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "HTML",
        "CSS",
        "JS",
        "TS",
        "React",
        "Vite",
        "Next",
        "Tailwind",
        "SASS",
        "PHP",
        "Node",
        "Express",
        "GraphQL",
        "Redux",
        "MongoDB",
        "Postgres",
        "SQLite",
        "Pocketbase",
        "Firebase",
        "Supabase",
        "Git",
        "Docker",
        "Cypress",
        "Jest"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ah5zfoko",
    "name": "source_code",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdculm8h",
    "name": "live_site",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iaezgkke",
    "name": "image_path",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // remove
  collection.schema.removeField("qumpe9uw")

  // remove
  collection.schema.removeField("wba6wzdk")

  // remove
  collection.schema.removeField("ah5zfoko")

  // remove
  collection.schema.removeField("zdculm8h")

  // remove
  collection.schema.removeField("iaezgkke")

  return dao.saveCollection(collection)
})
