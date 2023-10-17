import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = ({ action }) => {
  const [city, setCity] = useState('');
  return (
    <form
      className={styles.pickCityForm}
      onSubmit={e => {
        e.preventDefault();
        action(city);
        setCity('');
      }}>
      <label>
        <TextInput
          placeholder='Enter city name....'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;
