import PropTypes from 'prop-types';
import styles from './FirmFactCard.module.scss';

const FirmFactCard = ({ children, variant = "default" }) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {children}
    </div>
  );
};

FirmFactCard.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'border']).isRequired,
};

export default FirmFactCard;