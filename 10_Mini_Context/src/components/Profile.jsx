import React,{useContext} from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);

    if (!user) return <div>Please Login</div>
    
    return <div style={{ backgroundColor: 'pink', color: 'black', fontWeight: 'bolder' }}>Welcome {user.username} </div>
}

export default Profile;