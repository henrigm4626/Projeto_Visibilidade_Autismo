"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto bg-white py-24 flex flex-col lg:flex-row justify-between gap-6 px-12">
        <div className="text-start">
          <h1 className="text-4xl font-bold text-darkPurple mb-4">
            Sua carreira profissional começa aqui!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Conheça suas habilidades e explore seu potencial no mercado de
            trabalho. Este formulário de autoconhecimento foi criado para
            auxiliar pessoas autistas em sua jornada profissional.
          </p>
          <button
            className="rounded-full bg-primaryPurple text-white px-6 py-3  font-bold hover:bg-darkPurple"
            onClick={() => router.push("/forms")}
          >
            Iniciar teste
          </button>
        </div>
        <Image
          src="/girlWithComputer.svg"
          alt="logo"
          width={571}
          height={324}
          priority
        />
      </section>

      {/* Differentials Section */}
      <section className="bg-cinza py-24 px-12 ">
        <div className="max-w-screen-2xl mx-auto">
          <h3 className="text-base font-bold text-start text-primaryPurple">
            Descubra como a Altest pode te ajudar
          </h3>
          <h2 className="text-3xl font-bold text-start text-darkPurple mb-12">
            Nossos diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto pt-8">
            <div className="text-star ">
              <div className="mb-4 w-full mx-auto w-20 flex">
                <Image
                  src="/icon1.svg"
                  alt="Icon 1"
                  width={30}
                  height={30}
                  className="self-start"
                />
              </div>
              <h3 className="text-xl text-darkPurple font-semibold mb-2">
                Identifique seus talentos
              </h3>
              <p className="text-gray-600 ">
                Descubra suas aptidões e áreas de interesse para encontrar a
                carreira ideal.
              </p>
            </div>
            <div className="text-start">
              <div className="mb-4 w-full mx-auto w-20 flex">
                <Image src="/icon1.svg" alt="Icon 2" width={30} height={30} />
              </div>
              <h3 className="text-xl text-darkPurple font-semibold mb-2">
                Controle suas emoções
              </h3>
              <p className="text-gray-600 ">
                Aprenda a lidar com suas emoções e reações em diferentes
                situações, especialmente no ambiente de trabalho.
              </p>
            </div>
            <div className="text-start">
              <div className="mb-4 w-full mx-auto w-20 flex">
                <Image src="/icon2.svg" alt="Icon 3" width={30} height={30} />
              </div>
              <h3 className="text-xl text-darkPurple font-semibold mb-2">
                Aprimore sua comunicação
              </h3>
              <p className="text-gray-600 ">
                Desenvolva habilidades de comunicação eficazes para interagir
                melhor com colegas e líderes.
              </p>
            </div>
            <div className="text-start">
              <div className="mb-4 w-full mx-auto w-20 flex">
                <Image src="/icon2.svg" alt="Icon 4" width={30} height={30} />
              </div>
              <h3 className="text-xl text-darkPurple font-semibold mb-2">
                Alcance sua independência
              </h3>
              <p className="text-gray-600 ">
                Fortaleça sua autonomia e autoconfiança para tomar decisões e
                alcançar seus objetivos profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-darkPurple text-white px-12 py-6">
        <div className="max-w-screen-2xl mx-auto justify-between align-center flex">
          <h2 className="text-3xl font-bold">
            Que tal iniciar sua jornada de autoconhecimento?
          </h2>
          <button
            className="rounded-full bg-primaryPurple p-2 hover:bg-darkPurple text-white font-bold px-6"
            onClick={() => router.push("/habilidades_sociais_1")}
          >
            Iniciar teste
          </button>
        </div>
      </section>
    </div>
  );
}
