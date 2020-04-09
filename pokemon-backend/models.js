const { Sequelize } = require("sequelize");

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    define: {
      underscored: true,
    },
  });
} else {
  sequelize = new Sequelize({
    database: "pokemon_db",
    dialect: "postgres",
    define: {
      underscored: true,
    },
  });
}

class Pokemon extends Sequelize.Model {}
class Move extends Sequelize.Model {}
class User extends Sequelize.Model {}

User.init(
  {
    username: Sequelize.STRING,
    password_digest: Sequelize.STRING,
    rank: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

Pokemon.init(
  {
    name: Sequelize.STRING,
    frontImage: Sequelize.STRING,
    backImage: Sequelize.STRING,
    health: Sequelize.INTEGER,
    current_health: Sequelize.INTEGER,
    level: Sequelize.INTEGER,
    total_experience: Sequelize.INTEGER,
    current_experience: Sequelize.INTEGER,
    fullyEvolved: Sequelize.BOOLEAN,
    type: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "pokemon",
  }
);

Move.init(
  {
    name: Sequelize.TEXT,
    attack: Sequelize.INTEGER,
    animation: Sequelize.STRING,
    type: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "move",
  }
);

User.hasMany(Pokemon, { onDelete: "cascade" });
Pokemon.belongsTo(User);
Pokemon.hasMany(Move, { onDelete: "cascade" });
Move.belongsTo(Pokemon);

module.exports = {
  Pokemon,
  Move,
  User,
  sequelize,
};