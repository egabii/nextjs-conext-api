import Head from 'next/head';
import Link from 'next/link';
import { useCountContext } from '../context/countContext';

export default function Home() {
  const [count, setCount] = useCountContext();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/about">
          <a>About</a>
        </Link>

        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Contar
        </button>
      </main>
    </div>
  );
}