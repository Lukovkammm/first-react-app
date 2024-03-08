import './Detail.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getProductById } from '../../api/data';
import { Product } from '../../common/models';
import Loader from '../loader/Loader';

function Detail() {
  const [hasError, hasErrorChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<Product | undefined>();

  const { productId } = useParams();

  if (isNaN(Number(productId))) {
    throw new Error('Product with such id is not exist!');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getProductById(productId);
      setIsLoading(false);
      setDetails(response?.data);
    }

    setIsLoading(true);
    fetchData();
  }, [productId]);

  const makeFakeError = () => {
    hasErrorChange(true);
  };

  if (hasError) {
    throw new Error('Not real error!');
  }

  const tmpl = (
    <div id="contact">
      <div id="contact_info">
        <img style={{ background: details?.color }} />
        <div>
          <h1>{details?.name}</h1>
          <div>
            <p>
              <span>Pantone: </span>
              {details?.pantone_value}
            </p>
            <p>
              <span>Year: </span>
              {details?.year}
            </p>
          </div>
        </div>
      </div>
      <div id="contact_description">
        <h2>Details: </h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam,
          explicabo tenetur suscipit accusantium magnam. Asperiores sit quasi
          minima laborum consequatur excepturi id suscipit. Neque natus fugiat
          repudiandae sint beatae.
        </div>
        {/* <ul>
          {details?.result.properties?.films?.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul> */}
      </div>
      <div className="btns">
        <button onClick={makeFakeError}>Error</button>
        <Link to={`/${location.search}`}>Close</Link>
      </div>
    </div>
  );

  return <div id="detail">{isLoading ? <Loader /> : tmpl}</div>;
}

export default Detail;
