import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CreateRoom() {
  const [name, setName] = useState('');
  const [key, setKey] = useState<string | null>(null);
  // const navigate = useNavigate();

  // const handleCreateRoom = () => {
  //   // navigate(`/room/${roomId}?name=${encodeURIComponent(name)}`);
  // };

  const handlePrivateRoom = () => {
    if (key) {
      setKey(null);
      return;
    }
    const roomId = uuidv4().slice(0, 6);
    setKey(roomId);
  };

  const handleCopyKey = () => {
    if (key) {
      navigator.clipboard.writeText(key);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-lg text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex flex-center gap-2">
        <input
          type="checkbox"
          id="private"
          className="w-6 h-6 cursor-pointer"
          onChange={handlePrivateRoom}
        />
        <label htmlFor="private">Private Room</label>
      </div>

      {key && (
        <div className="flex flex-center justify-center gap-4">
          <span>{key}</span>
          <button
            onClick={handleCopyKey}
            className="text-gray-100 hover:underline active:text-blue-600 transition cursor-pointer"
          >
            Copy Access Key
          </button>
        </div>
      )}

      <button
        onClick={() => {}}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg transition cursor-pointer"
      >
        Create Room
      </button>
    </div>
  );
}

export default CreateRoom;
