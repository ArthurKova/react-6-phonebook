import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import operations from 'redux/user/auth-operation';

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      email: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(/[a-zA-Z]/, 'Name can only contain Latin letters.'),
      password: Yup.string()
        .required('No password provided.')
        .min(4, 'Password is too short - should be 8 chars minimum.'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: ({ userName, password, email }, { resetForm }) => {
      dispatch(operations.register({ name: userName, email, password }));
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={s.signup__form}>
      <div className={s.box}>
        <label htmlFor="userName" className={s.signup__label}>
          Name
        </label>
        <input
          className={s.signup__input}
          autoComplete="off"
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.errors.userName ? (
          <div className={s.namemsg}>{formik.errors.userName}</div>
        ) : null}
      </div>

      <div className={s.box}>
        <label htmlFor="email" className={s.signup__label}>
          Email
        </label>
        <input
          className={s.signup__email}
          autoComplete="off"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={s.namemsg}>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className={s.box}>
        <label htmlFor="password" className={s.signup__label}>
          Password
        </label>
        <input
          className={s.signup__password}
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={s.namemsg}>{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className={s.signup__btn}>
        Log In
      </button>
    </form>
  );
};

export default SignUp;
