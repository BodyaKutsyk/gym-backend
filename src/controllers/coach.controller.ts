import { RequestHandler } from 'express';
import { coachService } from '../services/coach.service.js';
import { ApiError } from '../exceptions/api.error.js';
import { CoachType } from '../types/coach.type.js';

const getAll: RequestHandler = async (req, res) => {
  const coaches = await coachService.getAll();

  if (!coaches) {
    throw ApiError.notFound();
  }

  res.send(coaches);
};

const create: RequestHandler = async (req, res) => {
  const { firstName, lastName, phone, specialization } = req.body as CoachType;

  if (!firstName || !lastName || !phone || !specialization) {
    throw ApiError.badRequest('Not all credentials are provided!');
  }

  await coachService.create({ firstName, lastName, phone, specialization });
  res.sendStatus(201);
};

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw ApiError.badRequest('Id is not provided!');
  }

  const coach = await coachService.get(id);

  if (!coach) {
    throw ApiError.notFound();
  }

  await coachService.remove(id);
  res.sendStatus(204);
};

const update: RequestHandler = async (req, res) => {
  const { specialization, firstName, lastName, phone } = req.body as CoachType;
  const { id } = req.params;

  if (!firstName || !lastName || !phone || !specialization || !id) {
    throw ApiError.badRequest('Not all credentials are provided!');
  }

  const coach = await coachService.get(id);

  if (!coach) {
    throw ApiError.notFound();
  }

  await coachService.update({ id, firstName, lastName, phone, specialization });
  res.sendStatus(204);
};

export const coachController = { getAll, create, remove, update };
