import { pages } from "../common/constant"
import { FooterListItem } from "./footer-list-item"


export const Footer = () => {
  return (
    <div>
      <footer className="md:flex md:justify-between md:gap-10 mx-auto px-4 py-8 from-gray-700 via-gray-800 to-gray-700 text-white">
        {/* column: logo + pages */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <img
            className="mb-6 w-48"
            src="/images/icono_iteration_Assistool1.png"
            alt="icono iteration"
          />
          <ul className="space-y-2">
            {pages.map((page) => (
              <FooterListItem
                key={page.href || page.title}
                text={page.title}
                href={page.href}
              />
            ))}
          </ul>
        </div>

        {/* column: social links */}
        <div className="mb-8 md:mb-0 mx-auto">
          <h3 className="font-bold mb-3">Síguenos</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://facebook.com/IterationMx" className="flex items-center gap-2 underline hover:font-bold">
                <img className="w-5 h-5" src="/images/iconos/facebook.png" alt="facebook" />
                IterationMx
              </a>
            </li>
            <li>
              <a href="https://instagram.com/Iteration_Mx" className="flex items-center gap-2 underline hover:font-bold">
                  <img className="w-5 h-5" src="/images/iconos/instagram.png" alt="instagram" />
                @Iteration_Mx
              </a>
            </li>
            <li>
              <a href="https://mx.linkedin.com/company/iteration-mx" className="flex items-center gap-2 underline hover:font-bold">
                 <img className="w-5 h-5" src="/images/iconos/linkedin.png" alt="linkedin.png" />
                Iteration
              </a>
            </li>
          </ul>
        </div>

        {/* column: contact info */}
        <div>
          <h3 className="font-bold mb-3">Contáctanos</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/images/iconos/telefono.png" alt="telefono" />
              56-5129-6401
            </li>
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/images/iconos/ubicacion.png" alt="ubicacion" />
              Coyoacán, CP04369 CDMX
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-center from-gray-500 via-gray-600 to-gray-500 text-white">
        <h2 className="p-1 font-bold">REGISTRO ASISTENCIA</h2>
        <p>© 2025 by ITERATION Servicios y Soluciones TI. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

