interface Props{
  name:string;
  role:string;
  image:string;
  quote:string;
}

export const TestimonialCard = ({name, role, image, quote}:Props) => {
  return (
     <div className="bg-gray-700 rounded-sm p-6 w-[330px] md:w-[500px] lg:mx-auto lg:text-center">
            <blockquote className="text-[.9rem] mb-4 md:text-[1rem]">{quote}</blockquote>
            <div className="flex gap-2 items-center">
              <img className="size-6 rounded-full" src={image} alt={name} />
              <div>
                <h3 className="font-bold text-[.90rem]">{name}</h3>
                <p className="text-[.80rem]">{role}</p>
              </div>
            </div> 
          </div>
  )
}

// export default testimonial-card
