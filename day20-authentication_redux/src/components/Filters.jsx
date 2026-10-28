import React from 'react';

const Filters = ({filterProducts}) => {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input & Action Button Group */}
        <div className="flex items-center gap-3 w-full md:w-2/3">
          <div className="relative w-full">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <input onChange={(e)=>filterProducts(e.target.value)}
              type="text" 
             
              placeholder="Search products by title..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <button 
            
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm rounded-xl transition duration-200 shadow-md shadow-blue-600/20 flex-shrink-0"
          >
            Search
          </button>
        </div>

        {/* Category Dropdown Selection */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <label className="text-xs font-medium text-slate-400 whitespace-nowrap uppercase tracking-wider">
            Category:
          </label>

          <div className="relative w-full md:w-48">
            <select 
             
              className="w-full appearance-none bg-slate-950 border border-slate-800 text-slate-200 text-sm py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="beauty">Beauty</option>
              <option value="groceries">Groceries</option>
              <option value="furniture">Furniture</option>
            </select>
            
            {/* Custom Arrow Icon for Select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filters;