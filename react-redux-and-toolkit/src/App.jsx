import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './features/counterSlice';

const App = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  console.log(count);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
     
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center space-y-6">
        
      
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          Redux Counter App
        </h1>

       
        <div className="bg-gray-50 border border-gray-100 rounded-xl py-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-1">
            Current Count
          </span>
          <span className="text-5xl font-black text-blue-600">
            {count}
          </span>
        </div>

        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => dispatch(decrement())}
            className="w-full py-3 bg-red-50 text-red-600 font-semibold rounded-xl border border-red-100 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 shadow-sm"
          >
            Decrement
          </button>
          
          <button 
            onClick={() => dispatch(increment())}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md shadow-blue-200"
          >
            Increment
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;