const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folders')
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, folder_id) {
    return knex.from('folders').select('*').where('folder_id', folder_id).first()
  },
  deleteFolder(knex, folder_id) {
    return knex('folders')
      .where({ folder_id })
      .delete()
  },
  updateFolder(knex, folder_id, newFoldersFields) {
    return knex('folders')
      .where({ folder_id })
      .update(newFoldersFields)
  },
}

module.exports = FoldersService