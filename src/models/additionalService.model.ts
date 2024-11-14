import { DataTypes, Model } from 'sequelize';
import { AdditionalServiceType } from '../types/additionalService.type.js';
import { sequelize } from '../utils/db.js';

export interface AdditionalServiceInstance
  extends Model<AdditionalServiceType>,
    AdditionalServiceType {}

export const AdditionalService = sequelize.define<AdditionalServiceInstance>(
  'additionalService',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
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
    tableName: 'additional_services',
  },
);

//additional belongs to Customer
//Customer has one additional
