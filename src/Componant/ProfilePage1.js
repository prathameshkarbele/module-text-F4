import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import fetch from 'node-fetch';

const ProfilePage1 = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(`https://dummyjson.com/users/${user.id}`);
  //       const data = await response.json();
  //       dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };

  //   if (user) {
  //     fetchUser();
  //   }
  // }, [user, dispatch]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user.id}`);
        const data = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);

  return (
    <div className='profile'>
      <h2>Profile Page</h2>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div className='info'>
           <img src={user.image} alt='not show'></img>
           <h3>id: <span>{user.id}</span></h3>
           <h3>Name: <span>{user.firstName}</span></h3>
           <h3>MiddleName: <span>{user.maidenName}</span></h3>
           <h3>LastName: <span>{user.lastName}</span></h3>
           <h3>Email: <span>{user.email}</span></h3>
           <h3>Username: <span>{user.username}</span></h3>
           <h3>Phone: <span>{user.phone}</span></h3>
           <h3>Age: <span>{user.age}</span></h3>
           <h3>Birtdate: <span>{user.birthDate}</span></h3>
           <h3>gender: <span>{user.gender}</span></h3>
           <h3>Address: <span>{user.address?.address}, {user.address?.city}, {user.address?.state}, {user.address?.postalCode}</span></h3>
           <h3>Company: <span>{user.company?.name}</span></h3>
           <h3>departMent: <span>{user.company?.department}</span></h3>
           <h3>domain: <span>{user.domain}</span></h3>
           <h3>Height: <span>{user.height}</span></h3>
           <h3>Univercity: <span>{user.university}</span></h3>
           <h3>UserAgent: <span>{user.userAgent}</span></h3>
        </div>
      )}
    </div>
  );
};

export default ProfilePage1;