import { createContext } from 'react';
import { ResponseData } from '../common/models';

interface ProductContext {
  search: string | undefined;
  data: ResponseData | undefined;
}

export const ProductContext = createContext<ProductContext>(
  {} as ProductContext
);
