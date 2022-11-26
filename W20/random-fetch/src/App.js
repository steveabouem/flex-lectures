import { useCallback, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import './App.css';
import User from './components/User';

const initialUInfo = {username: '', avatar: 'https://cdn-icons-png.flaticon.com/512/477/477196.png', email: '', address: '', email: ''};
export default function App() {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState(initialUInfo);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://random-data-api.com/api/v2/users?size=10',
      withCredentials: false,
    }).then(({data}) => {
      setData(data);
    });
  };

  const addItem = function() {
    if (!newUser) return;
    setData([{...newUser, id: uuidv4()}, ...data ]);
    setNewUser(initialUInfo);
  };

  const deleteItem = function(id) {
    setData(data.filter(item => item.id !== id));
  };

  const textChanged = (event, category) => {
    setNewUser({...newUser, [category]: event.target.value});
  };

  return (
    <div className="App">
      <Header content="Random Users" />
      <div className='input-form'>
        <div>
          <label>username</label>
          <input disabled={false} id="username" name="username" value={newUser.username} onChange={(e) => textChanged(e, 'username')} />
        </div>
        <div>
          <label>address</label>
          <input disabled={false} id="address" name="address" value={newUser.address} onChange={(e) => textChanged(e, 'address')} />
        </div>
        <div>
          <label>email</label>
          <input disabled={false} id="email" name="email" value={newUser.email} onChange={(e) => textChanged(e, 'email')} />
        </div>
        <button id="addUser" onClick={addItem}>Add Item</button>
      </div>

      <button type="button" onClick={getData}>Fetch</button>
      <ul id='users'>
        {data.map( (u, i) => (
          <User 
            key={i}  id={u.id} username={u.username}
            avatar={u.avatar} address={u?.address?.street_address || u.address} 
            email={u.email}  
            delete={() => deleteItem(u.id)}
          />
        ))}
      </ul>
    </div>
  );
};