import React, { useState } from 'react';

function User() {
const [user, setUser] = useState(
    { name:'',
        email:'',
        password:''});
const [enregistre, setEnregistre] = useState([]);
const [visible, setVisible] = useState([]);
const Changer = (e) => { setUser({ ...user, [e.target.name]:e.target.value,}); };
const AjouterUser = ()=>{if ( !user.name || !user.email || !user.password){
alert('Tous les champs sont obligatoirest') 
return; 
    }
    setEnregistre([...enregistre, user]);
    setUser({name: '', email: '', password:''})
};
  const ShowList = ()=> {
    setVisible(enregistre);
  };
 return (
    <div style={{ pading: '20px',
        fontFamily: 'Arial'}}>
    <input type="text" name="name"
      placeholder="Nom"  value={user.name}  
        onChange={Changer}/><br></br>
      <input type="email" name="email" placeholder="email"  value={user.email} 
      onChange={Changer}/> <br></br>
       <input type="password" name="password" placeholder="password"  value={user.password} 
      onChange={Changer}   />  <br></br>     
        <button onClick={AjouterUser}>Ajouter</button>
<button onClick={ShowList}>Afficher la liste</button>
      <h2> liste  des utilisateur</h2>
     <ul>
        {visible.map((u, index)=>(<li key={index}>{u.name}({u.email})
 </li>))}
        </ul> 
    </div>
  );
}

export default User;