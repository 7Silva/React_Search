import songs from '../songs.json';
import { useState } from 'react';

export default function HomePage() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null),
    filteredSongs = songs.filter(song => song.title.toLowerCase().includes(selectedSong || ''));

  return (
    <div className='flex flex-col justify-center items-center '>
      <input
        onChange={(e) => { setSelectedSong(e.target.value.toLowerCase()) }}
        className='border border-zinc-400 p-2 rounded-lg placeholder:text-zinc-400 mb-10 mt-10 bg-zinc-900 focus:outline-none focus:border-zinc-500'
        placeholder='Search for a song...'
        type="text"
      />

      <div className='grid grid-cols-3 gap-4'>
        {filteredSongs.map(song => (
          <div className='bg-zinc-800 rounded-xl p-5 shadow-lg' key={song.id}>
            <p>{song.title}</p>
            <span className='text-zinc-500'>{song.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}