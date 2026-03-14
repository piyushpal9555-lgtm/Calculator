import styles from './ButtonsContainer.module.css';
const ButtonsContainer = ({ calVal, setCalVal }) => {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '='];
  
  const handleButtonClick = (name) => {
    if (name === 'C') {
      setCalVal('0');
    } else if (name === '=') {
      try {
        setCalVal(String(eval(calVal)));
      } catch (e) {
        setCalVal('Error');
      }
    } else {
      setCalVal(calVal === '0' ? name : calVal + name);
    }
  };
  
  return (
    <div className={styles.buttons}>
      {buttonNames.map((name, index) => (
        <button key={index} className={styles.button} onClick={() => handleButtonClick(name)}>
          {name}
        </button>
      ))}
      
    </div>
  );
};

export default ButtonsContainer;