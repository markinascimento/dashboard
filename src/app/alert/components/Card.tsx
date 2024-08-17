// -> NextJS
import Image from 'next/image';

// -> Icons lib
import { MoveRight } from 'lucide-react';

// -> Utils
import { cn } from '@/shared/utils/cn';

// -> Components
import { NewsWriter } from './NewsWriter';

// -> Images
import techTitansImage from '@/assets/images/tech-titans.svg';

export function Card({ isNew = false }: { isNew?: boolean }) {
  return (
    <section className='flex flex-col bg-white p-4 rounded-2xl shadow-lg lg:flex-row lg:justify-between'>
      <div className='flex items-start gap-4'>
        <Image src={techTitansImage} alt='Imagem com um grupo de engenheiros'/>

        <div className='flex flex-col items-start h-full gap-1 justify-between'>
          <strong className='text-sm'> Tech Titans Clash in Epic Showdown </strong>
          <p className='text-xs text-zinc-600'>
            In a high-stakes battle for the international market, industry giants 
            are locking horns over the future of technology. 
          </p>

          <NewsWriter className='hidden lg:flex' />
        </div>
      </div>

      <div className= 'flex flex-col gap-2 mt-2 lg:min-w-[220px]'>
        <NewsWriter className='flex lg:hidden' />
        
        <div className={cn(
          "flex items-center justify-end h-full lg:flex-col",
          isNew && 'justify-between'
        )}>
          {isNew && (
            <button 
              className='min-h-4 min-w-4 bg-red-500 rounded-full sm:px-5 sm:py-1.5 sm:text-sm'
            >
              <strong className='hidden text-sm text-white xs sm:block'> Breaking News! </strong>
            </button>
          )}

          <button className='flex gap-6 px-4 py-1.5 rounded-full bg-royal-blue-500 col-span-2 text-white'>
            <strong className='tracking-[2px]'> READ MORE </strong>

            <MoveRight />
          </button>
        </div>
      </div>
    </section>
  )
}
