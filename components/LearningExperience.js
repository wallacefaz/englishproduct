// components/LearningExperience.js
import React from 'react';

const LearningExperience = ({ onSelectExperience }) => {
  return (
    <div className="learning-experience-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '50%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Ha intentado aprender inglés?</h2>
      <div className="learning-experience-options">
        <div className="learning-experience-option" onClick={() => onSelectExperience('Nunca he intentado')}>
          <span role="img" aria-label="Nunca he intentado">😃</span>
          <p>Nunca he intentado</p>
        </div>
        <div className="learning-experience-option" onClick={() => onSelectExperience('Intenté una vez')}>
          <span role="img" aria-label="Intenté una vez">🙂</span>
          <p>Intenté una vez</p>
        </div>
        <div className="learning-experience-option" onClick={() => onSelectExperience('Intenté algunas veces')}>
          <span role="img" aria-label="Intenté algunas veces">😔</span>
          <p>Intenté algunas veces</p>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default LearningExperience;

