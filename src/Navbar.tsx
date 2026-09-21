function Navbar() {
  return (
    <nav className="flex items-center px-10 py-5 bg-white">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-[#102764]">
        codejudge
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-9 ml-16">

        <a href="#" className="text-gray-800">
          Products
        </a>

        <a href="#" className="text-gray-800">
          Customers
        </a>

        <a href="#" className="text-gray-800">
          Pricing
        </a>

        <a href="#" className="text-gray-800">
          Company
        </a>

        <a href="#" className="text-gray-800">
          Resources
        </a>

      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-7">

        <a href="#" className="text-sm text-gray-800">
          Looking for a Job?
        </a>

        <button className="px-6 py-3 rounded-xl bg-white text-[#3156f5] shadow-md">
          Sign in
        </button>

      </div>

    </nav>
  );
}

export default Navbar;