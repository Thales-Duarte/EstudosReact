import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias","Maria"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 20},
        {id: 2, name: "Pedro", age: 21},
        {id: 3, name: "Josias", age: 22},
        {id: 4, name: "Maria", age: 23},
    ]);


    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * users.length);
        const randomId = users[randomIndex].id;
        setUsers((prevUsers) => {
            console.log(randomIndex);
            console.log(prevUsers);
            return prevUsers.filter((user) => user.id !== randomId);
        }
    )};

             

  return (
    <div>
        <div>List Render</div>
        <div>
            <ul>
                {list.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <ul>
                {users.map((user) => (<li key={user.id}> {user.name} - {user.age}</li>))}
            </ul>
            <br />
            <button onClick={deleteRandom}>Delete random user</button>
            <button>Adicionar</button>
        </div>

    </div>

  );
};

export default ListRender