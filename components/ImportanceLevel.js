// components/ImportanceLevel.js
import React from 'react';

const ImportanceLevel = ({ onSelectImportance }) => {
  return (
    <div className="importance-level-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '75%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Cuál es el nivel de importancia que tiene para usted hablar inglés?</h2>
      <div className="importance-options">
        <div className="importance-option" onClick={() => onSelectImportance('Poco importante')}>
          <p>Poco importante</p>
          <span>➡</span>
        </div>
        <div className="importance-option" onClick={() => onSelectImportance('Importante')}>
          <p>Importante</p>
          <span>➡</span>
        </div>
        <div className="importance-option" onClick={() => onSelectImportance('Fundamental')}>
          <p>Fundamental</p>
          <span>➡</span>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default ImportanceLevel;


