import { RequestHandler } from 'express';
import { ApiError } from '../exceptions/api.error.js';
import { subscriptionService } from '../services/subscription.service.js';
import { SubscriptionType } from '../types/subscription.type.js';

const getAll: RequestHandler = async (req, res) => {
  const subscriptions = await subscriptionService.getAll();

  res.send(subscriptions);
};

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const subscription = await subscriptionService.get(id);

  if (!subscription) {
    throw ApiError.notFound();
  }

  await subscriptionService.remove(id);
  res.sendStatus(204);
};

const create: RequestHandler = async (req, res) => {
  const { type, price, duration } = req.body as SubscriptionType;

  if (!type || !price || !duration) {
    throw ApiError.badRequest('Not all subscription parameters are provided!');
  }

  await subscriptionService.create({ type, price, duration });
  res.sendStatus(202);
};

const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { type, duration, price } = req.body as SubscriptionType;

  if (!id || !type || !price || !duration) {
    throw ApiError.badRequest('Not all subscription parameters are provided!');
  }

  const subscription = await subscriptionService.get(id);

  if (!subscription) {
    throw ApiError.notFound();
  }

  await subscriptionService.update({ id, type, price, duration });

  res.sendStatus(202);
};

export const subscriptionController = { getAll, remove, create, update };
