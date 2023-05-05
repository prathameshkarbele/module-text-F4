// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// const LoginPage1 = () => {
//   const dispatch = useDispatch();
//   const Navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

// console.log("username", username, "password", password)

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         })
//       })
//       .then(response => response.json())
//       .then(console.log);
//       // console.log('Response:', error.response);
     
    
                  




//       if (response.status === 200) {
//         const user = await response.json();
//         dispatch({ type: 'LOGIN_SUCCESS', payload: user });
//         Navigate('profile');
//       } else {
//         const { error } = await response.json();
//         setError(error);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage1;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log("username", username, "password", password)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
      // .then(response => response.json())
      // .then(console.log);
     

      if (response.status === 200) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        navigate('/profile');
        console.log("user...", user)
        
      }
       else if(response.status === 400){
        // const { error } = await response.json();
        setError("Invalid UserName or Password")
        // setError(true);
        console.log("error", error)
      }
    } catch (error) {
      console.log(error);
      // setError(true)
    }
  };

  return (
    <div>
      
     
     
      <form onSubmit={handleSubmit} >
      <h1>Login Page</h1>
      
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error">{error}</p>}
        <br></br>
        <button  type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage1;