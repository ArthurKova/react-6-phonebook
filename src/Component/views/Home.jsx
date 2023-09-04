import React, { useState } from 'react';
import ContactForm from 'Component/NewContactForm';
import ContactList from 'Component/ContactList/';
import Filter from 'Component/Filter/';
import { useGetAllPhonebookQuery } from 'redux/phonebook/phonebookApi';
import { useAddNewContactMutation } from 'redux/phonebook/phonebookApi';
import { useDeleteContactMutation } from 'redux/phonebook/phonebookApi';

const Homepage = () => {
  const [filter, setFilter] = useState('');
  const { data } = useGetAllPhonebookQuery();
  const [addNewContact] = useAddNewContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const handleInputFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredContacts = () => {
    const filterRequest = filter.toLowerCase();
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(filterRequest)
    );
  };

  return (
    <>
      <ContactForm addNewContact={addNewContact} />
      <Filter handleInputChange={handleInputFilterChange} />
      <ContactList contacts={filtredContacts()} deleteContact={deleteContact} />
    </>
  );
};

export default Homepage;
