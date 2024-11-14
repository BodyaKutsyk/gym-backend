import { AdditionalService } from '../models/additionalService.model.js';
import { Client } from '../models/client.model.js';
import { Coach } from '../models/coach.model.js';
import { Discount } from '../models/discount.model.js';
import { Subscription } from '../models/subscription.model.js';
import { ClientType } from '../types/client.type.js';

const getAll = async () => {
  return await Client.findAll({
    include: [
      {
        model: Discount,
        // required: true,
      },
      {
        model: Coach,
        // required: true,
      },
      {
        model: AdditionalService,
        // required: true,
      },
      {
        model: Subscription,
        // required: true,
      },
    ],
  });
};

const get = async (id: string) => {
  return await Client.findByPk(id);
};

const remove = async (id: string) => {
  return await Client.destroy({ where: { id } });
};

const add = async (client: ClientType) => {
  return await Client.create(client);
};

const update = async (client: ClientType) => {
  return await Client.update({ ...client }, { where: { id: client.id } });
};

export const clientService = { get, getAll, remove, add, update };
