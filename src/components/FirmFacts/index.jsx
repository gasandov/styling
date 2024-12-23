import Button from '../Button';
import FirmFactCard from '../FirmFactCard';
import styles from './FirmFacts.module.scss';

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Firm Facts</h1>
        <hr />
        <div className={styles.gridContainer}>
          <FirmFactCard className={styles.right}>
            <Button variant="icon">This is a two line button that terminates with...</Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button>This is a one line button</Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button variant="icon">This is a two line button that terminates with...</Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button variant="icon">This is a two line button that terminates with...</Button>
          </FirmFactCard>
          <FirmFactCard>
            <Button variant="icon" disabled>This is a two line button that terminates with...</Button>
          </FirmFactCard>
          <FirmFactCard variant="border">
            <Button variant="icon">This is a two line button that terminates with...</Button>
          </FirmFactCard>
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;