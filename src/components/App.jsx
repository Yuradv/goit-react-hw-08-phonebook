import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
// import { useFetchContactsQuery } from 'redux/contacts/contactsApi';

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Container from './Container';
import { fetchContacts } from 'redux/contacts/contactsApi';
import { PulseLoader } from 'react-spinners';

export default function App() {
  // const { data, isFetching } = useFetchContactsQuery();
  // const contacts = data;
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const getVisibleContacts = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <hr />

      <h2>Contacts</h2>
      <Filter value={filter} />
      {isLoading && <PulseLoader color="#ed9121" size={30} />}
      {contacts.length === 0 && (
        <h2
          style={{
            marginTop: '50px',
            color: '#ed9121',
            textDecoration: 'underline',
          }}
        >
          There are no contacts
        </h2>
      )}
      <Contacts contacts={getVisibleContacts()} />
    </Container>
  );
}
