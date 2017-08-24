module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define('Admins', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Admin',
    },
  }, {
    classMethods: {
      associate: (/* models */) => {
        // associations can be defined here
      },
    },
  });
  return Admins;
};
