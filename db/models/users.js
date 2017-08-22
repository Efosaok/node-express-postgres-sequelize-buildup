module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      types: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      types: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return Users;
};
