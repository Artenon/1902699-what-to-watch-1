import { CSSProperties } from 'react';
import { useAppSelector } from '../../hooks';

const styles: CSSProperties = {
  position: 'fixed',
  top: '30px',
  right: '50%',
  transform: 'translateX(50%)',
  padding: '10px',
  backgroundColor: '#d96666',
  color: 'white',
  borderRadius: '5px',
  zIndex: '10',
  animation: 'animateErrorMessage 0.5s'
};

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (
    error
      ? <div className="error-message" style={styles}>{error}</div>
      : null
  );
}

export default ErrorMessage;
