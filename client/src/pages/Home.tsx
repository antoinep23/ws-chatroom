import { useState } from 'react';
import CreateRoom from '../components/CreateRoom';
import JoinRoom from '../components/JoinRoom';

export default function Home() {
  const [isChoiceMade, setIsChoiceMade] = useState(false);
  const [choice, setChoice] = useState<null | 'create' | 'join'>(null);

  const handleSelectCreate = () => {
    setIsChoiceMade(true);
    setChoice('create');
  };

  const handleSelectJoin = () => {
    setIsChoiceMade(true);
    setChoice('join');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-50 px-4">
      <h1 className="text-5xl font-bold mb-10 text-center">
        💬 Realtime Chatroom App
      </h1>

      {!isChoiceMade && (
        <div className="flex gap-6">
          <button
            onClick={handleSelectCreate}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg transition cursor-pointer"
          >
            Create a room
          </button>

          <button
            onClick={handleSelectJoin}
            className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-xl text-lg transition cursor-pointer"
          >
            Join a room
          </button>
        </div>
      )}

      {isChoiceMade && choice !== null ? (
        choice === 'create' ? (
          <CreateRoom />
        ) : (
          <JoinRoom />
        )
      ) : null}
    </div>
  );
}
