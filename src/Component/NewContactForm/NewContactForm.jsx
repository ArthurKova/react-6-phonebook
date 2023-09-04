import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './NewContactForm.module.css';
import * as api from '../features/phonebookFeatures';

const ContactForm = ({ addNewContact, addNewPrivateContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, 'Must be 1 characters or more')
        .required('Required')
        .matches(/[a-zA-Z]/, 'Name can only contain Latin letters.'),
      phone: Yup.string()
        .matches('^[0-9]+$', 'Phone phone is not valid')
        .min(8, 'Must contain 8-16 digits')
        .max(16, 'Must contain 18-16 digits'),
    }),

    onSubmit: ({ name, phone }, { resetForm }) => {
      const titleCase = api.toTitleCase(name);
      const splitedNumber = api.phoneNumberAutoFormat(phone);

      if (addNewContact) {
        addNewContact({ name: titleCase, phone: splitedNumber });
      } else {
        addNewPrivateContact({ name: titleCase, number: splitedNumber });
      }

      resetForm();
      api.toastMsg();
    },
  });

  return (
    <>
      <h1>Add new contact</h1>
      <form onSubmit={formik.handleSubmit} className={s.newcontact__form}>
        <div className={s.box}>
          <label htmlFor="name" className={s.newcontact__label}>
            Name
          </label>
          <input
            className={s.newcontact__input}
            autoComplete="off"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="john snow"
          />
          {formik.errors.name ? (
            <div className={s.namemsg}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className={s.box}>
          <label htmlFor="phone" className={s.newcontact__label}>
            Phone
          </label>
          <input
            className={s.newcontact__input}
            autoComplete="off"
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="1234567890"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={s.phonemsg}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <button type="submit" className={s.newcontact__btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
