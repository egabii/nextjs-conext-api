import Head from 'next/head';
import Link from 'next/link';
import { useCountContext } from '../../context/countContext';
 

export default function About() {
  const [count, setCount] = useCountContext();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>I am the about page</p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Contar
        </button>
      </main>
    </div>
  )
}
