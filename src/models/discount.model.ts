import { DataTypes, Model } from 'sequelize';
import { DiscountType } from '../types/discount.type.js';
import { sequelize } from '../utils/db.js';

export interface DiscountInstance extends Model<DiscountType>, DiscountType {}

export const Discount = sequelize.define<DiscountInstance>(
  'discount',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'discounts',
  },
);

//disc belongs to Customer
//Customer has one disc
