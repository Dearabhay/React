import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-xs w-full bg-slate-900 border border-slate-800/80 rounded-2xl shadow-xl overflow-hidden animate-pulse flex flex-col justify-between">
      
      {/* Image Container Skeleton */}
      <div className="relative bg-slate-950/60 h-52 flex items-center justify-center p-4">
        {/* Placeholder for Product Image */}
        <div className="w-28 h-28 bg-slate-800 rounded-xl"></div>
        
        {/* Placeholder for Stock Badge */}
        <div className="absolute top-3 right-3 h-5 w-20 bg-slate-800 rounded-full"></div>
      </div>

      {/* Content Section Skeleton */}
      <div className="p-5 space-y-4">
        
        {/* Brand & Title Skeletons */}
        <div className="space-y-2">
          {/* Brand */}
          <div className="h-3 w-16 bg-slate-800 rounded"></div>
          {/* Title */}
          <div className="h-5 w-4/5 bg-slate-800 rounded"></div>
        </div>

        {/* Price Section Skeleton */}
        <div className="flex items-center space-x-2 pt-1">
          {/* Discounted Price */}
          <div className="h-6 w-20 bg-slate-800 rounded"></div>
          {/* Original Price */}
          <div className="h-4 w-12 bg-slate-800/60 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-10 w-full bg-slate-800 rounded-xl"></div>
      </div>

    </div>
  );
};

export default ProductCardSkeleton;