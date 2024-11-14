import { Subscription } from '../models/subscription.model.js';
import { SubscriptionType } from '../types/subscription.type.js';

const getAll = async () => {
  return await Subscription.findAll();
};

const get = async (id: string) => {
  return await Subscription.findByPk(id);
};

const remove = async (id: string) => {
  return await Subscription.destroy({ where: { id } });
};

const create = async (subscription: SubscriptionType) => {
  return await Subscription.create(subscription);
};

const update = async (subscription: SubscriptionType) => {
  return await Subscription.update(
    { ...subscription },
    { where: { id: subscription.id } },
  );
};

export const subscriptionService = { get, getAll, remove, create, update };
