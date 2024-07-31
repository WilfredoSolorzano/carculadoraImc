
import styles from './tablaInfo.module.css'; // Importa el archivo CSS como un módulo


// eslint-disable-next-line react/prop-types
  const TablaInfo = ({ highlightedClassification }) => {
    const classificationRows = [
      { range: 'Abaixo de 18.5', classification: 'Abaixo do peso', description: 'Você está abaixo do peso ideal. É recomendável buscar orientação médica para melhorar sua saúde e nutrição.' },
      { range: '18.5 - 24.9', classification: 'Peso normal', description: 'Você está dentro da faixa de peso saudável. Continue mantendo uma dieta equilibrada e hábitos saudáveis.' },
      { range: '25.0 - 29.9', classification: 'Sobrepeso', description: 'Você está acima do peso ideal. É aconselhável buscar orientação para melhorar sua alimentação e estilo de vida.' },
      { range: '30.0 - 34.9', classification: 'Obesidade grau 1', description: 'Você está com obesidade grau 1. É importante procurar ajuda médica para desenvolver um plano de controle de peso.' },
      { range: '35.0 - 39.9', classification: 'Obesidade grau 2', description: 'Você está com obesidade grau 2. A intervenção médica é recomendada para gerenciar sua saúde e peso.' },
      { range: '40.0 e acima', classification: 'Obesidade grau 3', description: 'Você está com obesidade grau 3. É crucial buscar orientação médica imediata para tratar e gerenciar sua condição.' }
    ];

    return (
      <div className={styles.infoTable}>
        <h2>Classificação do IMC</h2>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {classificationRows.map((row, index) => (
              <tr
                key={index}
                className={highlightedClassification === row.classification ? styles.highlight : ''}
              >
                <td>{row.range}</td>
                <td>{row.classification}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaInfo;
