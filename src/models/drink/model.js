'use strict';

const drinkModel = (sequelize, DataTypes) => sequelize.define('Drinks', {
  Beer: {
    type: DataTypes.ENUM('Amber Ale', 'Brown Ale', 'Doppelbock', 'IPA', 'Pilsner', 'Porter', 'Stout'),
    required: false,
  },
  Mixed_Drink: {
    type: DataTypes.ENUM('Cosmo', 'Daiquiri', 'Irish Coffee', 'Mai Tai', 'Martini', 'Old-Fashioned'),
    required: false,
  },
  Non_Alcoholic: {
    type: DataTypes.ENUM('Arnold Palmer', 'Chai', 'Coffee', 'Horchata', 'Tea', 'Water'),
    required: false,
  },
});

module.exports = drinkModel;
