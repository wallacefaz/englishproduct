// components/FeelingsPage.js
import React from 'react';
import '../styles/styles.css';

const FeelingsPage = ({ onSelectFeelings }) => {
  const feelingsOptions = [
    { label: "Siempre", emoji: "😢" },
    { label: "Algunas veces", emoji: "🙂" },
    { label: "Raramente", emoji: "😊" },
    { label: "Nunca", emoji: "😃" }
  ];

  return (
    <div className="feelings-page-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <h2>¿Se siente culpable o avergonzado por no hablar inglés?</h2>
      <div className="feelings-options">
        {feelingsOptions.map(option => (
          <div className="feelings-option" key={option.label} onClick={() => onSelectFeelings(option.label)}>
            <span className="emoji">{option.emoji}</span>
            <p>{option.label}</p>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
      <p className="terms">
        Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.
      </p>
    </div>
  );
};

export default FeelingsPage;

