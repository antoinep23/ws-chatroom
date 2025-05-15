import { API_BASE_URL } from './constants';

export async function createRoom(key: string | null) {
  try {
    const response = await fetch(API_BASE_URL + '/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key }),
    });

    if (!response.ok) {
      throw new Error('Failed to create room');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
}
