'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div>
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
      <section className="bg-lightGray text-center py-12 px-6">
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
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-darkPurple mb-12">
          Descubra como a Altest pode te ajudar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
              <Image src="/icon1.svg" alt="Icon 1" width={40} height={40} />
            </div>
            <h3 className="text-xl text-primaryPurple font-semibold mb-2">Identifique seus talentos</h3>
            <p className="text-gray-600">
              Descubra suas aptidões e áreas de interesse para encontrar a carreira ideal.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
              <Image src="/icon2.svg" alt="Icon 2" width={40} height={40} />
            </div>
            <h3 className="text-xl text-primaryPurple font-semibold mb-2">Controle suas emoções</h3>
            <p className="text-gray-600">
              Aprenda a lidar com suas emoções e reações em diferentes situações, especialmente no ambiente de trabalho.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
              <Image src="/icon3.svg" alt="Icon 3" width={40} height={40} />
            </div>
            <h3 className="text-xl text-primaryPurple font-semibold mb-2">Aprimore sua comunicação</h3>
            <p className="text-gray-600">
              Desenvolva habilidades de comunicação eficazes para interagir melhor com colegas e líderes.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-lightPurple p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
              <Image src="/icon4.svg" alt="Icon 4" width={40} height={40} />
            </div>
            <h3 className="text-xl text-primaryPurple font-semibold mb-2">Alcance sua independência</h3>
            <p className="text-gray-600">
              Fortaleça sua autonomia e autoconfiança para tomar decisões e alcançar seus objetivos profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primaryPurple text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Que tal iniciar sua jornada de autoconhecimento?
        </h2>
        <button 
          className="rounded-full bg-darkPurple px-6 py-3 hover:bg-lightPurple"
          onClick={() => router.push('/habilidades_sociais_1')} 
        >
          Iniciar teste
        </button>
      </section>
    </div>
  );
}
