// components/ReasonSelection.js
import React, { useState } from 'react';
import '../styles/styles.css';

const ReasonSelection = ({ onSelectReasons }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);

  const handleCheckboxChange = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(r => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  return (
    <div className="reason-selection-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <h2>¿Por qué cree que aún no habla inglés?</h2>
      <p>Seleccione una o más opciones para avanzar</p>
      <div className="reason-options">
        {[
          { label: "Nunca encontré un método que me gustara", emoji: "🔍" },
          { label: "Los cursos son muy caros", emoji: "💰" },
          { label: "Los cursos son muy lentos", emoji: "🐌" },
          { label: "Los cursos que intenté eran monótonos", emoji: "😴" },
          { label: "Me falta motivación", emoji: "💪" },
          { label: "Creo que hablar inglés es muy difícil", emoji: "😓" }
        ].map(reason => (
          <div className="reason-option" key={reason.label}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(reason.label)}
                checked={selectedReasons.includes(reason.label)}
              />
              <span className="emoji">{reason.emoji}</span>
              <p>{reason.label}</p>
            </label>
          </div>
        ))}
      </div>
      <button className="continue-button" onClick={() => onSelectReasons(selectedReasons)}>
        Continuar
      </button>
      <p className="terms">
        Al hacer clic en continuar, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.
      </p>
    </div>
  );
};

export default ReasonSelection;





