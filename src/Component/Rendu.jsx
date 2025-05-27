import React, { useState} from "react";
function Afficher11(){
 const [text, setText]= useState('');
 const[message, setMessage]= useState('');
 const Click = ()=> {
    
        if( text.length>3){
            setMessage(`vous avez saisir:${text}`);
        
        } else{
            setMessage(
                'Erreur: le message doit cpntenir au moin 3 caractaire'
            )
        }}
    
    const Changer=(e)=>{setText(e.target.value)}
    return(
        <div>
            <h3>test rendu if else</h3>
            <input type="text" value={text} onChange={Changer} 
            placeholder="saisis un message"/>
            <button onClick={Click}>Envoyer</button>
            <p>{message}</p>
        </div>
    );
 }
 export default Afficher11