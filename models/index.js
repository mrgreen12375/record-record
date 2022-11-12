const User = require('./User');
const Genre = require('./Genre');
const Album = require('./Album');

Genre.hasMany(Album, {
  foreignKey: 'genre_id',
});

Album.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

Album.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Genre, Album };