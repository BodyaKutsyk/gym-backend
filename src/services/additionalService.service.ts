import { AdditionalService } from '../models/additionalService.model.js';
import { AdditionalServiceType } from '../types/additionalService.type.js';

const getAll = async () => {
  return await AdditionalService.findAll();
};

const get = async (id: string) => {
  return await AdditionalService.findByPk(id);
};

const remove = async (id: string) => {
  return await AdditionalService.destroy({ where: { id } });
};

const create = async (service: AdditionalServiceType) => {
  return await AdditionalService.create(service);
};

const update = async (service: AdditionalServiceType) => {
  return await AdditionalService.update(
    { ...service },
    { where: { id: service.id } },
  );
};

export const extraService = { get, getAll, create, remove, update };
