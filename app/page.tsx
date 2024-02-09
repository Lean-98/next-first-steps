import Link from 'next/link'
import style from '../app/components/active-link/ActiveLink.module.css'

export default function Home() {
  return (
    <main className='flex flex-col items-center p-24'>
      <span className='text-5xl'>Hola Mundo!</span>

      <Link className={style.link} href={'/about'}>
        About Page
      </Link>
    </main>
  )
}
