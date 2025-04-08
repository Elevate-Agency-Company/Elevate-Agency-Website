import LanguageSwitcher from '../../components/LanguageSwitcher'
import { getDictionary } from './dictionaries'

export default async function HomePage({ params }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <LanguageSwitcher />
        
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-6">
          {dict.home.title}
        </h1>
        
        <p className="text-lg text-gray-700 mt-4">
          {dict.home.description}
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            {dict.home.getStarted}
          </button>
          <button className="px-6 py-2 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            {dict.home.learnMore}
          </button>
        </div>
      </div>
    </div>
  )
}
