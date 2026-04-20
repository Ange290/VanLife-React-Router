import homeImage from "../assets/homeImage.svg"

export default function Home(){
  return (
    <div 
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="text-center text-white mb-20">
        <h1 className="font-bold text-5xl mb-4">You got the travel plans, we got the travel vans.</h1>
        <p className="text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      </div>
      <button className="absolute bottom-32 bg-yellow-600 text-white font-bold py-2 px-6 w-3/4  rounded">
        Find your Vans
      </button>
    </div>
  )
}