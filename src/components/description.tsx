export const Description = () => {
  return (
    <div className="mt-10 mx-auto md:flex md:items-center md:gap-4 reveal-on-scroll">
          <img className="mb-10 md:w-[450px] md:h-[550px] lg:w-[1200px] lg:h-[400px] relative aspect-square rounded-lg overflow-hidden w-full" src="/images/info_sistema.png" alt="info sistema" />
      <div>
      <h2 className="lg:text-4xl font-black text-white mb-4">Descripción General</h2>
      <p className="text-sm mb-4">Es una herramienta que permite controlar y almacenar la entrada y salida de personas (estudiantes o empleados) de manera organizada y automática.</p>
      <ul className="mb-4">
        <li className="flex space-x-4">
            <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Registro de usuario</span>
        </li>
        <li className="flex space-x-4">
            <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Marcación de asistencia</span>
        </li>
        <li className="flex space-x-4">
            <svg className="flex w-4 h-4 text-gray-200 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Almacenamiento automático</span>
        </li>
      </ul>
      <p className="text-sm mb-4">Automatiza el control de asistencia, reduce errores manuales y facilita el seguimiento.</p>
      </div>
    </div>
  )
}

// export default description
