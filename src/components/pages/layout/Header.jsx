export default function Header() {

  return (
    <header className="flex items-center bg-blue-900 text-white">
      
      <div className="menu-icon p-5 mx-5 md:order-last">
        <div className="w-8 h-1 my-1.5 bg-white"/>
        <div className="w-5 h-1 my-1.5 bg-white"/>
        <div className="w-8 h-1 my-1.5 bg-white"/>
      </div>
      
      <div className="app-brand flex flex-1 justify-center me-20 md:justify-start p-5 md:ms-5 md:me-0">
        <a className="text-3xl font-semibold" href="#">
          EdumyNation
        </a>
      </div>

      <nav className="hidden md:block md:text-nowrap p-5">
        <button className="border px-3 py-1 rounded">
          Enquire Now
        </button>
      </nav>    
    </header>
  );
}
