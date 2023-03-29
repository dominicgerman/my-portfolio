migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wba6wzdk",
    "name": "tools",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
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
        "Sanity",
        "Wordpress",
        "Git",
        "Docker",
        "Cypress",
        "Jest"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dq0f442gjptfg1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wba6wzdk",
    "name": "tools",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 6,
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
        "Sanity",
        "Wordpress",
        "Git",
        "Docker",
        "Cypress",
        "Jest"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
