import { Coach } from '../models/coach.model.js';
import { CoachType } from '../types/coach.type.js';

const getAll = async () => {
  return await Coach.findAll();
};

const get = async (id: string) => {
  return await Coach.findByPk(id);
};

const create = async (coach: CoachType) => {
  return await Coach.create(coach);
};

const remove = async (id: string) => {
  return await Coach.destroy({ where: { id } });
};

const update = async (coach: Partial<CoachType>) => {
  return await Coach.update({ ...coach }, { where: { id: coach.id } });
};

export const coachService = { getAll, get, create, remove, update };
