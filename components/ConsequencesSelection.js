// components/ConsequencesSelection.js
import React, { useState } from 'react';
import '../styles/styles.css';

const ConsequencesSelection = ({ onSelectConsequences }) => {
  const [selectedConsequences, setSelectedConsequences] = useState([]);

  const handleCheckboxChange = (consequence) => {
    if (selectedConsequences.includes(consequence)) {
      setSelectedConsequences(selectedConsequences.filter(c => c !== consequence));
    } else {
      setSelectedConsequences([...selectedConsequences, consequence]);
    }
  };

  return (
    <div className="consequences-selection-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <h2>¿Cuáles son, en su opinión, las consecuencias negativas de no hablar inglés?</h2>
      <p>Seleccione una o más opciones para avanzar</p>
      <div className="consequences-options">
        {[
          { label: "Limitación en la carrera", emoji: "📉" },
          { label: "Dificultades en los viajes", emoji: "✈️" },
          { label: "Acceso restringido a información", emoji: "📚" },
          { label: "Networking perjudicado", emoji: "🌐" },
          { label: "Entretenimiento limitado", emoji: "🎬" },
          { label: "Desventaja en tecnología", emoji: "💻" },
          { label: "Pérdida de autonomía", emoji: "🚨" },
          { label: "Baja autoestima y confianza", emoji: "😞" }
        ].map(consequence => (
          <div className="consequence-option" key={consequence.label}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(consequence.label)}
                checked={selectedConsequences.includes(consequence.label)}
              />
              <span className="emoji">{consequence.emoji}</span>
              <p>{consequence.label}</p>
            </label>
          </div>
        ))}
      </div>
      <button className="continue-button" onClick={() => onSelectConsequences(selectedConsequences)}>
        Continuar
      </button>
      <p className="terms">
        Al hacer clic en continuar, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.
      </p>
    </div>
  );
};

export default ConsequencesSelection;




