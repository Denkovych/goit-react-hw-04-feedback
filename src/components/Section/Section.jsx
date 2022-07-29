import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={style.section}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>{children}</div>
    </div>
  );
}
export {Section}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};