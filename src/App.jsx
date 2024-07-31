import { useState } from 'react';
import Header from './components/Header';
import EntradaDados from './components/EntradaDados';
import CalculateButton from './components/CalculateButton';
import Result from './components/Result';
import TablaInfo from './components/TablaInfo';


const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');
  const [error, setError] = useState('');
  const [highlightedClassification, setHighlightedClassification] = useState('');

  const calculateIMC = () => {
    if (!height || !weight || height.length < 3 || weight.length < 2) {
      setError('Insira pelo menos três dígitos para altura e dois dígitos para peso.');
      return;
    }
    
    setError('');
    
    const heightInMeters = height / 100;
    const imcValue = weight / (heightInMeters * heightInMeters);
    const formattedIMC = imcValue.toFixed(1);
    setImc(formattedIMC);
    classifyIMC(imcValue);
  };

  const classifyIMC = (imcValue) => {
    let classification = '';
    if (imcValue < 18.5) {
      classification = 'Abaixo do peso';
    } else if (imcValue >= 18.5 && imcValue < 24.9) {
      classification = 'Peso normal';
    } else if (imcValue >= 25 && imcValue < 29.9) {
      classification = 'Sobrepeso';
    } else if (imcValue >= 30 && imcValue < 34.9) {
      classification = 'Obesidade grau 1';
    } else if (imcValue >= 35 && imcValue < 39.9) {
      classification = 'Obesidade grau 2';
    } else {
      classification = 'Obesidade grau 3';
    }
    setClassification(classification);
    setHighlightedClassification(classification);
  };

  return (
    <div className="imc-calculator container">
       <Header />
      <h1>Calculadora de IMC</h1>
      <EntradaDados 
        label="Altura (cm):" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        required 
      />
      <EntradaDados 
        label="Peso (kg):" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        required 
      />
      <CalculateButton onClick={calculateIMC} />
      {error && <div className="error-message">{error}</div>}
      {imc && (
        <>
          <Result imc={imc} classification={classification} />
          <TablaInfo highlightedClassification={highlightedClassification} />
        </>
      )}
    </div>
  );
};

export default App;