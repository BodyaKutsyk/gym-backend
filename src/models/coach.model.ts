import { DataTypes, Model } from 'sequelize';
import { CoachType } from '../types/coach.type.js';
import { sequelize } from '../utils/db.js';

export interface CoachInstance extends Model<CoachType>, CoachType {}

export const Coach = sequelize.define<CoachInstance>(
  'coach',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'coaches',
  },
);

//coach belongs to Customer
//Customer has one Coach
