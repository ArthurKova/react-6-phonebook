import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './LogIn.module.css';
import { useDispatch } from 'react-redux';
import operations from 'redux/user/auth-operation';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .required('No password provided.')
        .min(4, 'Password is too short - should be 8 chars minimum.'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(operations.logIn(values));
      resetForm();
      navigate('/contacts');
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={s.login__form}>
      <div className={s.box}>
        <label htmlFor="email" className={s.login__label}>
          Email
        </label>
        <input
          className={s.login__email}
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
        <label htmlFor="password" className={s.login__label}>
          Password
        </label>
        <input
          className={s.login__input}
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={s.phonemsg}>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit" className={s.login__btn}>
        Log In
      </button>
    </form>
  );
};

export default LogIn;
