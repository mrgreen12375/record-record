const User = require('./User');
const Genre = require('./Genre');
const Albums = require('./Album');

Genre.hasMany(Albums, {
  foreignKey: 'genre_id',
});

Albums.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Genre, Albums };