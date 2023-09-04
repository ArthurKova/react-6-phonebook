import s from './ContactList.module.css';
import propTypes from 'prop-types';
import { toastContactSucces } from 'Component/features/phonebookFeatures';

const ContactList = ({ contacts, deleteContact }) => {
  const deleteElement = id => {
    deleteContact(id);
    toastContactSucces();
  };

  if (contacts?.length === 0) {
    return <h1>No contacts yet</h1>;
  }

  return (
    <ul className={s.page__list}>
      {contacts?.map(contact => {
        const { name, phone, id, number } = contact;
        return (
          <li key={id} className={s.page__item}>
            <p className={s.text}>
              {name}: <br /> {phone || number}
            </p>
            <button
              onClick={() => deleteElement(id)}
              className={s.page__button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContacts: propTypes.array,
  deleteContact: propTypes.func,
};

export default ContactList;
