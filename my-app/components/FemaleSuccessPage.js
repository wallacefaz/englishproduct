// components/FemaleSuccessPage.js
import React from 'react';

const FemaleSuccessPage = ({ onContinue }) => {
  return (
    <div className="success-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '100%' }}></div>
      </div>
      <h2>12.459 mujeres</h2>
      <p>Están utilizando neurociencia para hablar inglés en tiempo récord.</p>
      <div className="success-image">
        <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/female.webp" alt="Mujeres" />
      </div>
      <button className="continue-button" onClick={onContinue}>Continuar</button>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default FemaleSuccessPage;
