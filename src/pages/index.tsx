import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-focus from-30% to-focus-dark'>
      <div className=''>
        <h1 className='text-primary text-6xl tracking-widest'>
          PomodoroBlocker
        </h1>
        <p className='text-primary'>There is nothing here.</p>
      </div>
    </main>
  );
}
