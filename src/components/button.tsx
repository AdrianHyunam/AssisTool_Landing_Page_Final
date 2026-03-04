
interface Props{
    text:string;
    style?:string;
}

export const Button = ({text, style=''}:Props) => {
  const handleClick = () => {
    window.location.href = 'https://assistcontrol.iteration.mx/login.html';
  }

  return (
   <button onClick={handleClick} className={`btn-ripple bg-gray-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-900 transition-all "${style} cursor-pointer`}>
        {text}
   </button>
  //  <button className="btn-ripple bg-gray-300 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-700 transition-all shadow-lg shadow-white/25">Iniciar Sesión</button>
  )
}

//  default button
