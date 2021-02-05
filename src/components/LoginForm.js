import { useState } from "react"
import axios from 'axios'
const LoginForm = () => {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')
 const handleSubmit = async (e) => {
  e.preventDefault();

  const authObject = {
   'Project-ID': 'b63a0db0-a3ed-4111-8d8c-0e708eef715f',
   'User-Name': username,
   'User-secret': password
  }
  try {
   //username / password => chat engine => give messages
   await axios.get('https://api.chatengine.io/chats', { headers: authObject })
   localStorage.setItem('username', username)
   localStorage.setItem('password', password)
   window.location.reload();
   // works out -> logged in
  } catch (error) {
   // error -> try with new username...
   setError('Oops, incorrect credentials.')
  }

 }
 return (
  <div className='wrapper'>
   <div className="form">
    <h1 className="title">Chat Application</h1>
    <form onSubmit={handleSubmit}>
     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input'
      placeholder='Username' required />
     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input'
      placeholder='password' required />
     <div align='center'>
      <button type="submit" className='button'>
       <span>Start chatting</span>
      </button>
     </div>
     <h2 className='error'>{error}</h2>
    </form>
   </div>
  </div>
 )
}

export default LoginForm
