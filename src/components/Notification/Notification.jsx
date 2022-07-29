
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p>{message}</p>;
}
export {Notification};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};



