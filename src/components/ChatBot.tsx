import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          <div className="bg-black p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-96 bg-gray-50">
            <div className="mb-4 text-sm">
              Hello! How can we help you today?
            </div>
            <textarea 
              className="w-full p-2 border rounded-lg"
              placeholder="Type your message..."
              rows={3}
            />
            <button className="mt-2 bg-[#c5ff00] text-black px-4 py-2 rounded-lg w-full hover:bg-[#a3d600] transition-colors">
              Send Message
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#c5ff00] text-black p-4 rounded-full shadow-lg hover:bg-[#a3d600] transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}