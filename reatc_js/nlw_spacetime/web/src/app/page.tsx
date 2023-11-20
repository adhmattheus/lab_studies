import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile';
import { Signin } from '@/components/Signin'
import { cookies } from 'next/headers';

export default function Home() {

  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 ">

      <div className="bg-[url(../assets/bg-stars.svg)] bg-coverflex flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden  border-r border-white/10 ">

        <div className="absolute right-0 top-1/2 h-[288px] w-[522px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {isAuthenticated ? <Profile /> : <Signin />}
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>

    </main>
  )
}