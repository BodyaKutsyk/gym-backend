import { RequestHandler } from 'express';
import { extraService } from '../services/additionalService.service.js';
import { ApiError } from '../exceptions/api.error.js';
import { AdditionalServiceType } from '../types/additionalService.type.js';

const getAll: RequestHandler = async (req, res) => {
  const services = await extraService.getAll();

  res.send(services);
};

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const service = extraService.get(id);

  if (!service) {
    throw ApiError.notFound();
  }

  await extraService.remove(id);
  res.sendStatus(204);
};

const create: RequestHandler = async (req, res) => {
  const { name, description, price } = req.body as AdditionalServiceType;

  if (!name || !description || !price) {
    throw ApiError.badRequest('Not all parameters are provided!');
  }

  await extraService.create({ name, description, price });
  res.sendStatus(202);
};

const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body as AdditionalServiceType;

  if (!id || !name || !description || !price) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const service = await extraService.get(id);

  if (!service) {
    throw ApiError.notFound();
  }

  await extraService.update({ id, name, description, price });
  res.sendStatus(204);
};

export const additionalServiceController = { getAll, remove, create, update };
