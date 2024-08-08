// components/DurationIssue.js
import React from 'react';

const durations = [
  "Solo en los últimos meses",
  "Desde hace algunos años",
  "Toda mi vida",
  "No estoy seguro"
];

const DurationIssue = ({ onSelectDuration }) => {
  return (
    <div className="duration-issue-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '90%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Desde cuándo NO hablar inglés ha sido un problema?</h2>
      <div className="duration-options">
        {durations.map((duration, index) => (
          <div key={index} className="duration-option" onClick={() => onSelectDuration(duration)}>
            <p>{duration}</p>
            <span>➡️</span>
          </div>
        ))}
      </div>
      <p className="terms">
        Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.
      </p>
    </div>
  );
};

export default DurationIssue;
