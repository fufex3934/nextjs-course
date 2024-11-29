
'use client';
import Link from "next/link"
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <Link href='/dashboard'>Dashboard</Link>
      <button onClick={()=>router.push('/dashboard')}>Dashboard</button>
    </div>
  )
}

export default Home