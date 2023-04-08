import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Container from './Container';
import { PulseLoader } from 'react-spinners';



export default function App() {
  const { data, isFetching} = useFetchContactsQuery();
  const contacts = data;
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <hr />

      <h2>Contacts</h2>
      <Filter value={filter} />
      {isFetching && <PulseLoader color="#ed9121" size={30} />}
      {data && <Contacts contacts={getVisibleContacts()} />}
    </Container>
  );
}
