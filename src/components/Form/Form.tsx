import { useState } from 'react';
import type { SearchType } from '../../types';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import Alert from '../Alert/Alert';

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });

  const [alert, setAlert] = useState('');

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios');
      return;
    }
    fetchWeather(search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="">Ciudad:</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="">Pais:</label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  );
}
