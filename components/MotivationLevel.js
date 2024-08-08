// components/MotivationLevel.js
import React from 'react';

const MotivationLevel = ({ onSelectMotivation }) => {
  return (
    <div className="motivation-level-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '90%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Por qué motivo necesita hablar inglés?</h2>
      <div className="motivation-options">
        <div className="motivation-option" onClick={() => onSelectMotivation('Cuestiones profesionales')}>
          <p>💼 Cuestiones profesionales</p>
          <span>&#x27A1;</span> {/* Esta seta é a seta que está sendo usada */}
        </div>
        <div className="motivation-option" onClick={() => onSelectMotivation('Viaje')}>
          <p>✈️ Viaje</p>
          <span>&#x27A1;</span>
        </div>
        <div className="motivation-option" onClick={() => onSelectMotivation('Orgullo personal')}>
          <p>🏆 Orgullo personal</p>
          <span>&#x27A1;</span>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default MotivationLevel;



