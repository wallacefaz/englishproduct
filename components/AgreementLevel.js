// components/AgreementLevel.js
import React from 'react';

const AgreementLevel = ({ onSelectAgreement }) => {
  return (
    <div className="agreement-level-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '85%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Está de acuerdo con la siguiente afirmación?</h2>
      <p>"Hablar inglés tiene el poder de llevar mi vida al siguiente nivel..."</p>
      <div className="agreement-options">
        <div className="agreement-option" onClick={() => onSelectAgreement('Totalmente en desacuerdo')}>
          <p>Estoy totalmente en desacuerdo</p>
          <span>&#x27A1;</span> {/* Esta seta é a seta que está sendo usada */}
        </div>
        <div className="agreement-option" onClick={() => onSelectAgreement('Un poco en desacuerdo')}>
          <p>Estoy un poco en desacuerdo</p>
          <span>&#x27A1;</span>
        </div>
        <div className="agreement-option" onClick={() => onSelectAgreement('Un poco de acuerdo')}>
          <p>Estoy un poco de acuerdo</p>
          <span>&#x27A1;</span>
        </div>
        <div className="agreement-option" onClick={() => onSelectAgreement('Totalmente de acuerdo')}>
          <p>Estoy totalmente de acuerdo</p>
          <span>&#x27A1;</span>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default AgreementLevel;

