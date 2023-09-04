import s from './Filter.module.css';
import propTypes from 'prop-types';

const Filter = ({ filter, handleInputChange }) => {
  return (
    <label className={s.filter__label}>
      Find contact by name
      <input
        className={s.filter__input}
        type="text"
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleInputChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  handleInputChange: propTypes.func,
};

export default Filter;
