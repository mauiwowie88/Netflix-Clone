import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/auth">Login</Link>
      <h1 className="text-2xl text-green-500">Hello world!</h1>
    </>
  )
}
