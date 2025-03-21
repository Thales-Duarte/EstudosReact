import React from 'react'
import './MyForms.css'
import { useState } from 'react'

const MyForms = ({user}) => {
    const [name, setName] = useState(user? user.name : '');
    const [email, setEmail] = useState(user? user.email : '')   ;

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault() 
        console.log('Formulário enviado!') 
        console.log(name, email, bio, role)

        setName('');
        setEmail('');
        setBio('');
    };

    const[bio, setBio] = useState(user? user.bio : '');
    const[role, setRoale] = useState(user? user.role : 'user');



    

  return (
    <div>
        {/* <!-- Formulario --> */}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" onChange={handleName} value={name}/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <br />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <br />
            </div>
            <br />
            {/* <!-- Textarea --> */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do Usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <br />
            {/* <!-- Select --> */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="admin">Administrador</option>
                    <option value="dev">Desenvolvedor</option>
                    <option value="tester">Testador</option>
                </select>

            </label>
           
    


            <input type="submit" value="Enviar" />
            
            
        </form>
    </div>
  )
}

export default MyForms