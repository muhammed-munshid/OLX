import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../Components/Login/Login';
import { AuthContext } from '../Store/Context';

function LoginPage() {
  const { user } = useContext(AuthContext);
  const history = useHistory()
  return (
    <div>
   {user ? history.push('/') : <Login />}
    </div>
  );
}

export default LoginPage;
