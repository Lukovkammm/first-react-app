export interface SWData {
  count: number;
  next: string | null;
  previous: string | null;
  results: SWPerson[];
}

export interface SWPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  id?: string;
}

const url = 'https://swapi.dev/api/people';

export const getMainData = async (
  search?: string,
  page?: number
): Promise<SWData> => {
  console.log('Page: ', page);
  try {
    const searchParam = search ? '?search=' + search.toLowerCase() : '';
    const pageParam = page ? (searchParam ? '&page=' : '?page=') + page : '';
    const response = await fetch(`${url}${searchParam}${pageParam}`, {
      method: 'GET',
    });
    const data: SWData = await response.json();
    const updatedResults = data.results.map((item) => {
      const id = item.url
        .split('/')
        .find((item) => item && !isNaN(Number(item)));
      return { ...item, id };
    });

    return { ...data, results: updatedResults };
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getPersonDataById = async (
  id: string | undefined
): Promise<SWPerson> => {
  try {
    if (id === undefined) throw new Error('Person is not defined!');

    const response = await fetch(`${url}/${id}`, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`HTTP error with status: ${response.status}!`);
    }

    const data: SWPerson = await response.json();
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
