import React, { useState } from 'react';

function Afficher13() {
const [text, setText] = useState('');
const [valide, setValide] = useState(false);
const [estValide, setestValide] 
= useState(false);
const Click = () => {
  setValide(true);
  setestValide(text.length > 3);
  };

  return (
    <div>
      <h3>test Avec &&</h3>
      <input
        type="text"  value={text}  
        onChange={e => setText(e.target.value)}
        placeholder="Saisis un message"
      />
      <button onClick={Click}>Envoyer</button>

      {/* le message sera affiché seulement après validation */}
 {valide && estValide && <p>Message : 
  {text}</p>}
 {valide && !estValide &&
 (<p> Erreur : le message doit contenir au moins 3 caractères.</p>   )}
    </div>
  );
}

export default Afficher13;
