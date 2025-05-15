import { useState } from 'react';

function JoinRoom() {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-lg text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Room ID"
        className="px-4 py-2 rounded-lg text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {}}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg transition cursor-pointer"
      >
        Join Room
      </button>
    </div>
  );
}

export default JoinRoom;
