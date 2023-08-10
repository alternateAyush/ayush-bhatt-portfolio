import Image from 'next/image'
import ProfileSection from '@/components/ProfileSection'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <ProfileSection/>
    </main>
  )
}
