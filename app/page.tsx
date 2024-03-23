import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between pt-24">
      <Image src="/maintenance.svg" width={200} height={200} alt="EnginetifAI" />
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8 text-red-primary">EnginetifAI</h1>
        <p className="text-lg mt-4 text-gray-500 px-6 text-justify">
          Start of a journey to develop AI powered Inventory Management System.
        </p>
      </header>
      <footer className="absolute bottom-0 mt-8">
        <Image src={"/wave.svg"} width={2990} height={1068} alt="Waves" />
      </footer>
    </main>  
  );
}
