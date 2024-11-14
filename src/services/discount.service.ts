import { Discount } from '../models/discount.model.js';
import { DiscountType } from '../types/discount.type.js';

const getAll = async () => {
  return await Discount.findAll();
};

const get = async (id: string) => {
  return await Discount.findByPk(id);
};

const remove = async (id: string) => {
  return await Discount.destroy({ where: { id } });
};

const add = async (discount: DiscountType) => {
  return await Discount.create(discount);
};

const update = async (discount: DiscountType) => {
  return await Discount.update({ ...discount }, { where: { id: discount.id } });
};

export const discountService = { getAll, get, remove, add, update };
