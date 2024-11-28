'use client'; // Ensures this component runs in the browser
import Image from 'next/image';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';
import { useRouter } from 'next/navigation';

export default function HabilidadesSociais() {
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
      </header>

      {/* Progress Bar */}
      <nav className="flex justify-center border-b-2 border-lightGray py-4">
        <ul className="flex space-x-8">
          <li className="text-primaryPurple font-bold">Informações Gerais</li>
          <li className="text-primaryPurple font-bold">Avaliação das Habilidades Sociais</li>
          <li className="text-gray-400">Avaliação das Habilidades Laborais</li>
        </ul>
      </nav>

      <MultipleChoiceQuestion title='Eu consigo organizar minhas tarefas diárias de forma eficiente:'/>

      {/* Content */}
      <main className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-darkPurple mb-6">Avaliação das Habilidades Sociais</h2>
        <h3 className="text-lg font-semibold text-primaryPurple mb-4">Comunicação</h3>
        <form>
          {/* Question 1 */}
          <div className="mb-8">
            <p className="text-gray-800 mb-2">Eu consigo expressar minhas ideias de forma clara e compreensível para os outros:</p>
            <div className="flex justify-between">
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="discordo_fortemente" />
                Discordo fortemente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="discordo" />
                Discordo
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="neutro" />
                Neutro
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo" />
                Concordo
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo_fortemente" />
                Concordo fortemente
              </label>
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-8">
            <p className="text-gray-800 mb-2">Eu consigo expressar minhas ideias de forma clara e compreensível para os outros:</p>
            <div className="flex justify-between">
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="nunca" />
                Nunca
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="raramente" />
                Raramente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="as_vezes" />
                As vezes
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="frequentemente" />
                Frequentemente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo_fortemente" />
                Sempre
              </label>
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-8">
            <p className="text-gray-800 mb-2">Eu entendo com facilidade o que os outros comunicam verbalmente:</p>
            <div className="flex justify-between">
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="muita_baixa" />
                Muito Baixa
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="baixa" />
                Baixa
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="moderada" />
                Moderada
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="alta" />
                Alta
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="muito_alta" />
                Muito Alta
              </label>
            </div>
          </div>

          {/* Question 4 */}
          <div className="mb-8">
            <p className="text-gray-800 mb-2">Eu tenho facilidade em explicar conceitos complexos em situações profissionais:</p>
            <div className="flex justify-between">
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="discordo_fortemente" />
                Discordo fortemente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="discordo" />
                Discordo
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="neutro" />
                Neutro
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo" />
                Concordo
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo_fortemente" />
                Concordo fortemente
              </label>
            </div>
          </div>

          {/* Question 5 */}
          <div className="mb-8">
            <p className="text-gray-800 mb-2">Eu consigo pedir ajuda ou esclarecimentos quando necessário:</p>
            <div className="flex justify-between">
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="nunca" />
                Nunca
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="raramente" />
                Raramente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="as_vezes" />
                As vezes
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="frequentemente" />
                Frequentemente
              </label>
              <label className= "text-gray-800">
                <input type="radio" name="q1" value="concordo_fortemente" />
                Sempre
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="text-primaryPurple underline"
              onClick={() => router.back()}
            >
              Voltar
            </button>
            <button
              type="button"
              className="bg-primaryPurple text-white px-6 py-3 rounded-full hover:bg-darkPurple"
              onClick={() => router.push('/habilidades_sociais_2')}
            >
              Continuar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
