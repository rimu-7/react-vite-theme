import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-secondary)] text-[var(--color-primary)] transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>

        {/* Message */}
        <p className="text-lg font-medium animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
