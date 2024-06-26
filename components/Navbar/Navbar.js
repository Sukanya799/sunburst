const Navbar = () => {
  return (
    <nav className="w-full p-4 flex flex-row justify-between">
        <div className="flex flex-row w-[60%] gap-2">
            <p className="tracking-widest">Home</p>
            <p>About</p>
            <p>Services</p>
        </div>
        <div className="flex flex-row">
            <button>Contact us</button>
        </div>
    </nav>
  )
}

export default Navbar