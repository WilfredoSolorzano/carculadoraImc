

import styles from './EntradaDados.module.css';
// eslint-disable-next-line react/prop-types
const EntradaDados = ({ label, value, onChange, required }) => (
  <div className={styles['entrada-dados']}>
    <label>
      {label}
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
        required={required}
        min="0" 
        className={styles.input}
      />
    </label>
  </div>
);

export default EntradaDados;
