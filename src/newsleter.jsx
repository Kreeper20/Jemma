import { useState } from 'react';

export default function Newsletter({ showModal, setShowModal }) {
  
return (
  <>
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors text-xl cursor-pointer"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <div className="flex justify-center">
                    <iframe className='w-full h-48 sm:h-56 lg:h-64 border border-gray-200 rounded-lg'
                      scrolling="no"
                      src="https://jemmadigital.substack.com/embed"
                      
                      title="Subscribe to Newsletter"
                    />
                  </div>

                  <p className="text-gray-400 text-xs mt-4 text-center">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            )}
    </>
  );
}