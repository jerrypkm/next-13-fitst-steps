import { Navbar } from "../ui";

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>    
      <Navbar></Navbar>
      <main className='flex flex-col items-center p-24'>
        <h1 className="text-2xl">Hola mundo</h1>
        {children}
      </main>
    </>

  );
}