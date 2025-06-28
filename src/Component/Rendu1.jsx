import React, { useState} from "react";
function Afficher12(){
 const [text, setText]= useState('');
 const[valide, setValide]= useState(null);
 const Click = ()=> {setValide
   (text.length>3);};
   const Changer=(e)=>{setText(e.target.value)} 
    return(
        <div>
            <h3>test operation ternaire</h3>
            <input type="text" value={text} onChange={Changer} 
            placeholder="saisis un message"/>
            <button onClick={Click}>valide</button>
            {valide !==null &&(<p>{valide ? `vous avez saisir :${text}`:
            'Erreur: le message doit contenir au moin 3 caractaire'}</p>)}
        </div>
    );
 }
 export default Afficher12