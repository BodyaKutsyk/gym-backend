import { RequestHandler } from 'express';
import { clientService } from '../services/client.service.js';
import { ApiError } from '../exceptions/api.error.js';
import { ClientType } from '../types/client.type.js';

const getAll: RequestHandler = async (req, res) => {
  const clients = await clientService.getAll();

  res.send(clients);
};

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const client = await clientService.get(id);

  if (!client) {
    throw ApiError.notFound();
  }

  await clientService.remove(id);
  res.sendStatus(204);
};

const add: RequestHandler = async (req, res) => {
  const { firstName, lastName, phone, birthDate } = req.body as ClientType;

  if (!firstName || !lastName || !phone || !birthDate) {
    throw ApiError.badRequest('Not all credentials are provided!');
  }

  await clientService.add({ firstName, lastName, phone, birthDate });
  res.sendStatus(202);
};

const updatePrivilege: RequestHandler = async (req, res) => {
  const { coachId, discountId, subscriptionId, additionalServiceId } =
    req.body as ClientType;
  const { id } = req.params;

  console.log(id, coachId);

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const client = await clientService.get(id);

  if (!client) {
    throw ApiError.notFound();
  }

  if (coachId) {
    await client.update({ coachId }, { where: { id } });
    res.sendStatus(204);

    return;
  }

  if (discountId) {
    await client.update({ discountId }, { where: { id } });
    res.sendStatus(204);

    return;
  }
  if (subscriptionId) {
    await client.update({ subscriptionId }, { where: { id } });
    res.sendStatus(204);

    return;
  }
  if (additionalServiceId) {
    await client.update({ additionalServiceId }, { where: { id } });
    res.sendStatus(204);

    return;
  }
};

const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phone, birthDate } = req.body as ClientType;

  if (!id || !firstName || !lastName || !phone || !birthDate) {
    throw ApiError.badRequest('Not all data is provided for update!');
  }

  const client = await clientService.get(id);

  if (!client) {
    throw ApiError.notFound();
  }

  await clientService.update({ id, firstName, lastName, phone, birthDate });
  res.sendStatus(204);
};

export const clientController = {
  getAll,
  remove,
  add,
  updatePrivilege,
  update,
};
