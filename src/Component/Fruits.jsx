import React, { useState } from 'react';

function Fruits() {
const [text, setText] = useState('');
const [enregistre, setEnregistre] = useState([]);
const [visible, setVisible] 
= useState([]);
const Ajouter = () => {
    if(text.trim() === '') return;
  setEnregistre([...enregistre, text]);
  setText('');//rest input
 };
  const ShowList = ()=> {
    setVisible(enregistre);
  };

  return (
    <div style={{ pading: '20px',
        fontFamily: 'Arial'}}>

      <h1>creer une liste</h1>
      <input type="text"
      placeholder="ajputer un element"  value={text}  
        onChange={(e) => setText(e.target.value)}
        
      /><br></br>
      <button onClick={Ajouter}>Ajouter</button>
         <button onClick={ShowList}>Afficher la liste</button>
         <h2> liste  des Fruits</h2>
       <ul>
        {visible.map((item, index)=>(<li key={index}>{item}

        </li>))}
        </ul> 
    </div>
  );
}

export default Fruits;
