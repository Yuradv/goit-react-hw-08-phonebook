import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, saveContacts, filterContacts } from "redux/contactsSlice";
import { getContacts, getFilter } from 'redux/contactsSlice';
import Form from "./Form";
import Contacts from "./Contacts";
import Filter from "./Filter";
import Container from "./Container";
import shortid from 'shortid';
import Notiflix from 'notiflix';



export default function App()  {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const saveContact = ( name, number) => {
    const contactData = {
      id: shortid.generate(),
      name,
      number,
      };
    
      if (contacts.find((contactData) => contactData.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(saveContacts(contactData));
      }
    }

  const onChangeFilter = (event) => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const deleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={saveContact} />
        <hr/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}/>
      </Container>
  )

    }