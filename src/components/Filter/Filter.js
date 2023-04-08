import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter }) {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        onChange={onChangeFilter}
        value={filter}
        className={s.input}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
