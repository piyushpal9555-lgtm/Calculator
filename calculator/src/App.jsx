
import styles from  './App.module.css' ;
import Display from './Components/Display.jsx';
import ButtonsContainer from './Components/ButtonsContainer.jsx'; 
import { useState } from 'react';

function App() {
  let [calVal, setCalVal] = useState("0");
  

  return ( 
    
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
<ButtonsContainer calVal={calVal} setCalVal={setCalVal} />

</div>

      
    
      
  );
  
}

export default App
