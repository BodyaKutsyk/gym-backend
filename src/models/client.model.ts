import { DataTypes, Model } from 'sequelize';
import { ClientType } from '../types/client.type.js';
import { sequelize } from '../utils/db.js';
import { Coach } from './coach.model.js';
import { Discount } from './discount.model.js';
import { AdditionalService } from './additionalService.model.js';
import { Subscription } from './subscription.model.js';

export interface ClientInstance extends Model<ClientType>, ClientType {}

export const Client = sequelize.define<ClientInstance>(
  'client',
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'clients',
  },
);

Client.belongsTo(Coach);
Coach.hasMany(Client);

Client.belongsTo(Discount);
Discount.hasMany(Client);

Client.belongsTo(AdditionalService);
AdditionalService.hasMany(Client);

Client.belongsTo(Subscription);
Subscription.hasMany(Client);
