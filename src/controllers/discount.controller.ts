import { RequestHandler } from 'express';
import { discountService } from '../services/discount.service.js';
import { ApiError } from '../exceptions/api.error.js';
import { DiscountType } from '../types/discount.type.js';

const getAll: RequestHandler = async (req, res) => {
  const discounts = await discountService.getAll();

  res.send(discounts);
};

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const discount = await discountService.get(id);

  if (!discount) {
    throw ApiError.notFound();
  }

  await discountService.remove(id);
  res.send(204);
};

const create: RequestHandler = async (req, res) => {
  const { percentage, condition } = req.body as DiscountType;

  if (!percentage || !condition) {
    throw ApiError.badRequest('Percantage or condition is not provided');
  }

  await discountService.add({ percentage, condition });
  res.sendStatus(201);
};

const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { percentage, condition } = req.body as DiscountType;

  if (!id) {
    throw ApiError.notFound();
  }

  if (!id || !percentage || !condition) {
    throw ApiError.notFound();
  }

  const discount = await discountService.get(id);

  if (!discount) {
    throw ApiError.notFound();
  }

  await discountService.update({ id, percentage, condition });
  res.sendStatus(204);
};

export const discountController = { getAll, remove, create, update };
