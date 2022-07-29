import PropTypes from 'prop-types';
import style from './Statistics.module.css';

  function Statistics(props) {
  

  return (
    <ul>
      {Object.keys(props).map((propName, i) => (
        <li key={i} className={style.item}>
          {propName.toUpperCase()}: {props[propName]}
        </li>
      ))}
    </ul>
  );
}

export {Statistics}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};