import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  published: string,
  price: number,
  author: string,
  img: string,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
