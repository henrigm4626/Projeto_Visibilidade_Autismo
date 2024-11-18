'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className='h-screen bg-cinza'>
      {/* Header */}
      <header className="bg-customBlue px-12 py-4 flex justify-between">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <button
          className="rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white"
          onClick={() => router.push('/habilidades_sociais_1')} 
        >
          Iniciar teste
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-white text-center py-12 px-12">
        <h1 className="text-4xl font-bold text-darkPurple mb-4">
          Sua carreira profissional começa aqui!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Conheça suas habilidades e explore seu potencial no mercado de trabalho. 
          Este formulário de autoconhecimento foi criado para auxiliar pessoas autistas 
          em sua jornada profissional.
        </p>
        <button
          className="rounded-full bg-primaryPurple text-white px-6 py-3 hover:bg-darkPurple"
          onClick={() => router.push('/habilidades_sociais_1')}
        >
          Iniciar teste
        </button>
      </section>

      {/* Differentials Section */}
      <section className="bg-cinza py-16 px-12">
        <h3 className="text-base font-bold text-start text-primaryPurple">
          Descubra como a Altest pode te ajudar
        </h3>
        <h2 className="text-3xl font-bold text-start text-darkPurple mb-12">
          Nossos diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-star ">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex mb-4">
              <Image src="/icon1.svg" alt="Icon 1" width={40} height={40} />
            </div>
            <h3 className="text-xl text-darkPurple font-semibold mb-2">Identifique seus talentos</h3>
            <p className="text-gray-600 ">
              Descubra suas aptidões e áreas de interesse para encontrar a carreira ideal.
            </p>
          </div>
          <div className="text-start">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex mb-4">
              <Image src="/icon1.svg" alt="Icon 2" width={40} height={40} />
            </div>
            <h3 className="text-xl text-darkPurple font-semibold mb-2">Controle suas emoções</h3>
            <p className="text-gray-600 ">
              Aprenda a lidar com suas emoções e reações em diferentes situações, especialmente no ambiente de trabalho.
            </p>
          </div>
          <div className="text-start">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex mb-4">
              <Image src="/icon2.svg" alt="Icon 3" width={40} height={40} />
            </div>
            <h3 className="text-xl text-darkPurple font-semibold mb-2">Aprimore sua comunicação</h3>
            <p className="text-gray-600 ">
              Desenvolva habilidades de comunicação eficazes para interagir melhor com colegas e líderes.
            </p>
          </div>
          <div className="text-start">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex mb-4">
              <Image src="/icon2.svg" alt="Icon 4" width={40} height={40} />
            </div>
            <h3 className="text-xl text-darkPurple font-semibold mb-2">Alcance sua independência</h3>
            <p className="text-gray-600 ">
              Fortaleça sua autonomia e autoconfiança para tomar decisões e alcançar seus objetivos profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-darkPurple text-white justify-center flex justify-between px-12 py-4">
        <h2 className="text-3xl font-bold">
          Que tal iniciar sua jornada de autoconhecimento?
        </h2>
        <button 
          className="rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white"
          onClick={() => router.push('/habilidades_sociais_1')} 
        >
          Iniciar teste
        </button>
      </section>
      <footer className='bg-cinza px-12 py-8 flex justify-between'>
        <Image
            src="/logoFooter.svg"
            alt="logo"
            width={180}
            height={38}
            priority
          />
        <div className='flex gap-2'>
          <Image
              src="/facebookLogo.svg"
              alt="logo"
              width={13}
              height={25}
              priority
            />
          <Image
              src="/instagramLogo.svg"
              alt="logo"
              width={25}
              height={25}
              priority
            />
          <Image
              src="/youtubeLogo.svg"
              alt="logo"
              width={35}
              height={25}
              priority
            />
        </div>
      </footer>
    </div>
  );
}
