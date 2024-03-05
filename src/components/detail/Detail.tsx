import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { SWPerson, getPersonDataById } from '../../api/data';
import './Detail.css';
import Button from '../button/Button';
import Loader from '../loader/Loader';

function Detail() {
  const [hasError, hasErrorChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<SWPerson | null>(null);
  const location = useLocation();

  const { peopleId } = useParams();

  if (isNaN(Number(peopleId))) {
    throw new Error('Person with such id is not exist!');
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getPersonDataById(peopleId);
      setIsLoading(false);
      setDetails(data);
    }

    setIsLoading(true);
    fetchData();
  }, [peopleId]);

  const makeFakeError = () => {
    hasErrorChange(true);
  };

  if (hasError) {
    throw new Error('Not real error!');
  }

  const tmpl = (
    <div id="contact">
      <div id="contact_info">
        <img />
        <div>
          <h1>{details?.name}</h1>
          <div>
            <p>
              <span>Birth: </span>
              {details?.birth_year}
            </p>
            <p>
              <span>Gender: </span>
              {details?.gender}
            </p>
            <p>
              <span>Height: </span>
              {details?.height}
            </p>
            <p>
              <span>Mass: </span>
              {details?.mass}
            </p>
            <p>
              <span>Hair color: </span>
              {details?.hair_color}
            </p>
            <p>
              <span>Eye color: </span>
              {details?.eye_color}
            </p>
          </div>
        </div>
      </div>
      <div id="contact_description">
        <h2>Films: </h2>
        <ul>{details?.films?.map((film) => <li key={film}>{film}</li>)}</ul>
      </div>
      <div className="btns">
        <Button content="Error" handleClick={makeFakeError} />
        <Link to={`/${location.search}`}>Close</Link>
      </div>
    </div>
  );

  return <div id="detail">{isLoading ? <Loader /> : tmpl}</div>;
}

export default Detail;
