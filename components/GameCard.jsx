import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const GameCard = ({ game }) => {
  if(game.length == 0) return <p>Loading</p>;
  const winner = game.scoreTeam1 < game.scoreTeam2;
  return (
    <div className='rounded-md col-span-2 md:col-span-1 mx-2 bg-white text-gray-700 border border-gray-250'>
      <Link href={`/game/${game.slug}`}>
        <div className='flex pl-6 py-8'>
          <div className='flex flex-col w-3/4 text-lg text-indigo-900 font-semibold border-r border-gray-300 pr-6'>
            <div className='flex justify-between pb-2'>
              <div className='flex justify-around'>
                <Image
                  alt={game.team1.shortName}
                  unoptimized
                  width="30"
                  height="30"
                  className='align-middle rounded-full'
                  src={game.team1.photo.url}
                />
                <span className='px-2' style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>{game.team1.name}</span>
                <span className='text-gray-400 font-medium'>{`(${game.team1.shortName})`}</span>
              </div>
              
              <span style={{whiteSpace: 'nowrap'}}>{winner || "> " }{game.scoreTeam1}</span>
            </div>
            <div className='flex justify-between pt-2'>
              <div className='flex justify-around'>
              <Image
                  alt={game.team2.shortName}
                  unoptimized
                  width="30"
                  height="30"
                  className='align-middle rounded-full'
                  src={game.team2.photo.url}
                />
                <span className='px-2' style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>{game.team2.name}</span>
                <span className='text-gray-400 font-medium'>{`(${game.team2.shortName})`}</span>
              </div>
              <span style={{whiteSpace: 'nowrap'}}>{!winner || "> "}{game.scoreTeam2}</span>
            </div>
          </div>
          
          <div className='w-1/4 my-auto text-sm'>
              <span className='text-center text-gray-500 block'>{game.gameState}</span>
          </div>
        </div>
      </Link>
      

    </div>
  
  )
}

export default GameCard