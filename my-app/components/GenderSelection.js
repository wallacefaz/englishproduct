// components/GenderSelection.js
import React from 'react';

const GenderSelection = ({ onSelectGender }) => {
  return (
    <div className="gender-selection-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '33%' }}></div>
      </div>
      <h2>Plan de Aprendizaje Acelerado</h2>
      <p>Seleccione su género para continuar. El cuestionario toma unos pocos minutos.</p>
      <div className="gender-options">
        <div className="gender-option" onClick={() => onSelectGender('Male')}>
          <img src="https://github.com/fireprojectx/totalenglish/raw/main/images/boj5z-1.webp" alt="Hombre" />
          <p>Hombre</p>
        </div>
        <div className="gender-option" onClick={() => onSelectGender('Female')}>
          <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/nyc1e-2.webp" alt="Mujer" />
          <p>Mujer</p>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default GenderSelection;
