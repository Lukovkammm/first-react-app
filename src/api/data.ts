import { Product, ResponseData } from '../common/models';

const url = 'https://reqres.in/api/products';

export const getAllProducts = async (
  page?: string
): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(`${url}${page ? '?page=' + page : ''}`, {
      method: 'GET',
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const searchProduct = async (
  name: string | undefined
): Promise<ResponseData | undefined> => {
  try {
    const response = await fetch(`${url}${name ? '?name=' + name : ''}`, {
      method: 'GET',
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.error((error as Error).message);
  }
};

export const getProductById = async (
  id: string | undefined
): Promise<{ data: Product } | undefined> => {
  try {
    const response = await fetch(`${url}/${id}`, { method: 'GET' });
    const products = await response.json();
    return products;
  } catch (error) {
    console.error((error as Error).message);
  }
};
