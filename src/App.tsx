import {
  Header, 
  Hero, 
  Features, 
  Moreinformation,
  Description,
  Testimonials,
  Footer
  // Footer
} from "./components"

 function App() {

  return (
    <main className="m-auto">
      <section className="bg-gray-900 p-2 relative">
        {/* parallax bubble effect moved here */}
        <div className="bubble-layer pointer-events-none"></div>

        <Header/>
        <div className="reveal-on-scroll">
        <a href="index.ts">
          <img
            src="/images/icono_Reloj_Checador.png" 
            alt="inicio asistencia" 
            className="relative z-10 md:mx-auto md:h-[350px]"
          />
       </a>
      </div>
      <div className="max-w-[800px] mx-auto p-3">
          <h1 className="text-center text-2xl font-Raleway font-bold px-2 relative z-10">
              Sistema Registro Asistencia
          </h1>
          <p className="text-justify text-xl mt-6 px-4 font-Raleway">
              Es una plataforma tecnológica diseñada para controlar, gestionar y almacenar la asistencia de personas (empleados, estudiantes o participantes) de manera automatizada, eliminando los procesos manuales en papel.
          </p>
        </div>  

      </section>
      <section className="bg-gray-900 p-2">
      {/* <section className="-mt-4 relative z-10 max-w-[650px] mx-auto"> */}
        {/* <Hero/> */}
        <Features/>
      </section>
      {/* <section className="bg-gray-950 p-6 h-[850px] relative"> */}
      <section className="bg-gray-900 p-6 relative">
        <Moreinformation/>
        <Description/>
        <Testimonials/>
      </section>
      <section className="max-w-[1300px] mx-auto">
        <Footer/>
      </section>
    </main>     
  )
}

export default App
