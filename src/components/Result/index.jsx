

// eslint-disable-next-line react/prop-types
const Result = ({ imc, classification }) => {
  return (
    <div className="result">
      <h2>Seu IMC é {imc}, o que indica que seu peso está na categoria de {classification}</h2>
    </div>
  );
};

export default Result;