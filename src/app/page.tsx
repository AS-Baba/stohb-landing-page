import {Header} from "@/app/_components/ui/header";

export default function Home() {
  return (
      <>
          <Header></Header>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <h1 className="text-3xl font-[700] text-emerald-700 antialiased">Hello world, Welcome to Stohb</h1>
              <p>Loading...</p>
          </div>
      </>

  );
}
