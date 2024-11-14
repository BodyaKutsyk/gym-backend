import { DataTypes, Model } from 'sequelize';
import { SubscriptionType } from '../types/subscription.type.js';
import { sequelize } from '../utils/db.js';

export interface SubscriptionInstance
  extends Model<SubscriptionType>,
    SubscriptionType {}

export const Subscription = sequelize.define<SubscriptionInstance>(
  'subscription',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'subscriptions',
  },
);

//Subs belongs to Customer
//Customer has one Subs
