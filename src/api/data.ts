import { CardData } from '../common/card/Card';
import { getParamName } from '../common/utils';
import { SearchBy } from '../interface/common';

const url = 'https://api.punkapi.com/v2/beers';

export const getMainData = async (
  searchBy?: SearchBy,
  value?: string
): Promise<CardData[]> => {
  let fullUrl = url;
  if (searchBy && value) {
    const paramName = getParamName(searchBy);
    fullUrl = `${url}?${paramName}=${value}`;
  }

  try {
    const response = await fetch(fullUrl, { method: 'GET' });
    const data: CardData[] = await response.json();
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
