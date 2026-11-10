import { FaSearch } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { loginUser } from "../../../../src/controllers/auth.controller";
import { useNavigate } from "react-router-dom";

const Navbar = ({ className }) => {
  // Back button logic

  const handleBack = () => {
    window.history.back();
  };


  // Next button logic

  const handleNext = () => {
    window.history.forward();
  };

  const navigate = useNavigate()
  const signUp = () => {
    navigate("/signup");
  }

  const login = () => {
    navigate("/login");
  }

  return (
    <nav className={`w-full ${className} flex items-center justify-between md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}>
      {/* Arrow  */}
      <div className="flex items-center gap-x-2">
        <button onClick={handleBack} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
          <GoChevronLeft className='w-7 h-7 mr-0.5' />
        </button>
        <button onClick={handleNext} className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center">
          <GoChevronRight className='w-7 h-7 ml-0.5' />
        </button>
      </div>
      <div className="rounded-2xl flex flex-row bg-gray-600 justify-between ">
        <FaSearch className="flex justify-center m-2" />  <input className="pr-2 none rounded-2xl" type='text' placeholder="What do you want to play?  " />


      </div>

      {/* Buttons */}
      <div className="flex items-center gap-x-4">
        <button onClick={signUp} className="w-fit text-neutral-400 text-sm font-semibold hover:scale-105 ease-in-out duration-100">
          Sign up
        </button>
        <button onclick={login}className="w-fit px-8 h-12 rounded-full bg-neutral-50 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100">
          Log in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
