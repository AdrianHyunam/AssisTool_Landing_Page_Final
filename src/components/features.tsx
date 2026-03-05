import { features } from "../common/constant"
import type { Feature } from "../types/type"



export const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-6 mx-auto lg:grid-cols-3 lg:mt-8">
      {
      features.map(({title, description, iconUrl}: Feature)=>(
        <div key={title} className="flex flex-col items-center text-center reveal card-3d bg-gray-800 border border-black rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:border-white transition-all group animate-reveal">
          <img src={iconUrl} alt={title} />
          <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// export default future
