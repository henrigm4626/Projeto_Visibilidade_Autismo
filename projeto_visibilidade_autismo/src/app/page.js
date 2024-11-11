import Image from "next/image";

export default function Home() {
  return (
    <header className="bg-customBlue px-12 py-4 flex justify-between">
      <Image
          src="/Logo.svg"
          alt="logo"
          width={180}
          height={38}
          priority
        />
      <button className="rounded-full bg-primaryPurple p-2 hover:bg-darkPurple">Iniciar teste</button>
    </header>
  );
}
