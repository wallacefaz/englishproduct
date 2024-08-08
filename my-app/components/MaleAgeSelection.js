// components/MaleAgeSelection.js
import React from 'react';

const MaleAgeSelection = ({ onSelectAge }) => {
  return (
    <div className="age-selection-container">
      <img className="logo" src="https://github.com/fireprojectx/totalenglish/blob/main/images/logototalenglish.PNG?raw=true" alt="Logo" />
      <div className="progress-bar-container">
        <div style={{ width: '66%' }}></div> {/* Ajuste a largura conforme necessário */}
      </div>
      <h2>¿Cuál es su edad?</h2>
      <p>Utilizamos su edad solo para personalizar su plan.</p>
      <div className="age-options">
        <div className="age-option" onClick={() => onSelectAge('18-29')}>
          <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/male/1829.webp" alt="18-29" />
          <p>18-29</p>
        </div>
        <div className="age-option" onClick={() => onSelectAge('30-39')}>
          <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/male/2939.webp" alt="30-39" />
          <p>30-39</p>
        </div>
        <div className="age-option" onClick={() => onSelectAge('40-49')}>
          <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/male/3949.webp" alt="40-49" />
          <p>40-49</p>
        </div>
        <div className="age-option" onClick={() => onSelectAge('50+')}>
          <img src="https://raw.githubusercontent.com/fireprojectx/totalenglish/main/images/male/50%2B.webp" alt="50+" />
          <p>50+</p>
        </div>
      </div>
      <p className="terms">Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.</p>
    </div>
  );
};

export default MaleAgeSelection;

