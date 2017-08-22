module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define('Admins', {
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
      defaultValue: 'Admin',
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return Admins;
};
