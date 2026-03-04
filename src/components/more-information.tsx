
export const Moreinformation = () => {
  return (
    <div className="grid grid-cols-1 mt-10 mx-auto md:flex md:items-center md:gap-4 reveal-on-scroll lg:w-[1300px]">
      <div>
      <h2 className="lg:text-4xl font-black text-white mb-4">Funcionalidades principales</h2>
      <p className="font-Raleway mb-4">Un sistema de registro de asistencia es una herramienta que permite controlar y guardar la información sobre la entrada y salida de personas en una institución, como una escuela o empresa.</p>
      <ul className="mb-4">
        <li className="flex space-x-4">
               <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Registro rápido y sencillo de asistencia</span>
        </li>
        <li className="flex space-x-4">
               <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Generación automática de reportes y estadísticas</span>
        </li>
        <li className="flex space-x-4">
               <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Notificaciones de inasistencias o retrasos</span>
        </li>
      </ul>
      </div>
        <img className="mb-10 md:w-[450px] md:h-[300px] lg:w-[1400px] lg:h-[550px] relative aspect-square rounded-lg overflow-hidden w-full bg-gray-100 cursor-pointer group" src="/images/funciones_internas.png" alt="info sistema" />
      {/* <img className="mb-10 md:w-[450px] md:h-[320px] lg:w-[600px] lg:h-[440px]" src="/images/funciones_internas.png" alt="info sistema" /> */}

    </div>
  )
}

// export default more-information
