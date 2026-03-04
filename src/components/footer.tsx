import { pages } from "../common/constant"
import { FooterListItem } from "./footer-list-item"


export const Footer = () => {
  return (
    <div>
      <footer className="md:flex md:justify-between md:gap-10 mx-auto px-4 py-8 from-gray-700 via-gray-800 to-gray-700 text-white">
        {/* column: logo + pages */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <img
            className="mb-6 w-32"
            src="/images/icono_iteration_Assistool.png"
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
              <a href="https://facebook.com/IterationMx" className="flex items-center gap-2 underline">
                <svg className="w-5 h-5" /* facebook icon svg */>
                <img src="/images/assisTool.png" alt="facebook" />
                </svg>
                Iteration Mx
              </a>
            </li>
            <li>
              <a href="https://instagram.com/Iteration_Mx" className="flex items-center gap-2 underline">
                <svg className="w-5 h-5" /* instagram icon svg */></svg>
                @Iteration_Mx
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/iteration" className="flex items-center gap-2 underline">
                <svg className="w-5 h-5" /* linkedin icon svg */></svg>
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
              <svg className="w-5 h-5" /* whatsapp icon svg */></svg>
              56-5129-6401
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" /* location icon svg */></svg>
              Coyoacán, CP 04369 CDMX
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

