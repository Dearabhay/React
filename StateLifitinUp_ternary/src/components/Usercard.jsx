import React from 'react';

const Login = ({user}) => {
  return (
    <div className="p-4 flex flex-col gap-4 border-gray-400 border rounded bg-white">
        <div className="w-50 h-60 rounded overflow-hidden">
            <img className="h-full w-full" src={user.image} alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-pink-500 bg-grey-600 border rounded p-2">Name : {user.name}</h1>
            <p>{user.email}</p>
        </div>
        <button className="p-2 bg-blue-600 border rounded text-white cursor-pointer">Delete</button>
    </div>
  );
}
export default Login;