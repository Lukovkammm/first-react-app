import { SearchBy } from '../interface/common';

export const getParamName = (searchBy: SearchBy): string => {
  switch (searchBy) {
    case SearchBy.Name:
      return 'beer_name';
    case SearchBy.Food:
      return 'food';
  }
};
