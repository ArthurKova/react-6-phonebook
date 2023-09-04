import NewContactForm from '../NewContactForm';
import ContactList from 'Component/ContactList/ContactList';
import {
  useAddNewPrivateContactMutation,
  useGetAllPrivateContactsQuery,
  useDeletePrivateContactMutation,
} from 'redux/privateContacts/privateContactsApi';

const Contacts = () => {
  const [addNewPrivateContact] = useAddNewPrivateContactMutation();
  const { data } = useGetAllPrivateContactsQuery();
  const [deleteContact] = useDeletePrivateContactMutation();

  return (
    <div>
      <NewContactForm addNewPrivateContact={addNewPrivateContact} />
      <ContactList contacts={data} deleteContact={deleteContact} />
    </div>
  );
};

export default Contacts;
