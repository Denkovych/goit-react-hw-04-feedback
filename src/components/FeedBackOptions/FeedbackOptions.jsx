import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export{FeedbackOptions};

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options?.map(option => (
        <li key={option} className={style.item}>
          <button
            className={style.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
