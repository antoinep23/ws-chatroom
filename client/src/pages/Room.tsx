import { useParams, useSearchParams } from 'react-router-dom';

export default function Room() {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Room : {roomId}</h1>
      <p className="text-lg">Welcome, {name} 👋</p>
    </div>
  );
}
