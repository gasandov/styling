import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import styles from './Button.module.scss';

const Button = ({ children, disabled = false, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} disabled={disabled}>
      {variant === 'icon' && (
        <span>
          <MdSearch className={styles.icon} size={24} />
        </span>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired, 
  variant: PropTypes.oneOf(['default', 'icon']).isRequired,
};

export default Button;