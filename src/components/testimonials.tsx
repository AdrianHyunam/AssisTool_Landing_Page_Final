import { useEffect, useState } from "react";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial{
  name:string;
  role:string;
  image:string;
  quote:string;
}

const testimonials:Testimonial[]=[
    {
    name:"Jose Eduardo Hernandez",
    role:"CEO at Iteration",
    image:"/images/Fotomen.png",
    quote:"“El sistema es muy fácil de usar y nos ha ayudado a reducir el tiempo que dedicábamos al control manual de asistencia. Los reportes automáticos son claros y rápidos de generar.”"
    },
    {
    name:"Juana Torres",
    role:"Docente",
    image:"/images/Fotogirl.png",
    quote:"“La plataforma es práctica y organizada. Me permite verificar rápidamente qué estudiantes asistieron a clase. Sería ideal que incluya más opciones de personalización en los reportes.”"
    },
    {
    name:"Jesús Hernandez",
    role:"Estudiante",  
    image:"/images/Fotojoven.png",
    quote:"“El registro es rápido y funciona bien desde el celular. Me gusta que el sistema guarde automáticamente la hora de entrada. A veces tarda un poco cuando la conexión es lenta.”"
    }
]

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex(i => (i + 1) % testimonials.length);

  return (
    <div className="relative flex flex-col items-center pt-8 mx-auto">
      <img className="size-7 absolute top-0 left-6 md:top-2 md:relative md:-left-60 lg:-top-2" src="/images/bg-quotes.png" alt="bg quotes" />

      <div className="w-full max-w-4xl relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          ›
        </button>

        {/* indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
              aria-label={`Ir al testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// export default testimonialss
