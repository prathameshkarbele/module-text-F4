import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import fetch from 'node-fetch';

const ProfilePage1 = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // console.log("user profile............", user)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user.id}`);
        const data = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchUser();
    }
  }, [user, dispatch]);

  return (
    <div className='profile'>
      <h2>Profile Page</h2>
      {user && (
        <div className='info'>
           
           <h3>id: <span>{user.id}</span></h3>
           <h3>Name: <span>{user.firstName}</span></h3>
           <h3>Email: <span>{user.email}</span></h3>
           <h3>Phone: <span>{user.phone}</span></h3>
        </div>
      )}
    </div>
  );
};

export default ProfilePage1