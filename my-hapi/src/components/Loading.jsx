import React from 'react';

function Loading() {
    return (
        <div className="h-screen flex items-center justify-center" role="status">
            <div className="w-6 h-6 rounded-full animate-pulse bg-orange"></div>
            <div className="w-6 h-6 rounded-full animate-pulse bg-orange mx-2"></div>
            <div className="w-6 h-6 rounded-full animate-pulse bg-orange"></div>
        </div>
    );
}

export default Loading;
