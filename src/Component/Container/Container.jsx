import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.page__box}>{children}</div>;
};

export default Container;
