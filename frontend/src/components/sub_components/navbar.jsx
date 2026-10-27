import { useState } from "react";

const Navbar = () => {
  const [cartOrder, serCartOrder] = useState(0)
  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 rounded-t-xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-serif text-2xl text-forest-dark tracking-tight"
          >
            Spicios'
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#products" className="hover:text-forest transition-colors">
              Shop
            </a>
            <a href="#story" className="hover:text-forest transition-colors">
              Our Farms
            </a>
            <a href="#" className="hover:text-forest transition-colors">
              Recipes
            </a>
            <a href="#" className="hover:text-forest transition-colors">
              About
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="relative p-2 hover:bg-sand rounded-full transition-colors"
              aria-label="Cart"
              onClick={() => {
                alert("toggleCart");
              }}
            >
              <svg
                className="w-5 h-5 text-forest-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              <span
                id="cart-badge"
                className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-spice-red text-white text-[10px] font-bold rounded-full flex items-center justify-center hidden"
              >
                {cartOrder}
              </span>
            </button>
            <button
              onClick={() => {
                alert("toggleMobileMenu");
              }}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              <svg
                className="w-5 h-5 text-forest-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu --> */}
      <div
        id="mobile-menu"
        className="md:hidden max-h-0 overflow-hidden transition-all duration-300 bg-cream border-b border-sand"
      >
        <div className="px-6 py-4 space-y-3">
          <a href="#products" className="block text-forest font-medium">
            Shop
          </a>
          <a href="#story" className="block text-forest font-medium">
            Our Farms
          </a>
          <a href="#" className="block text-forest font-medium">
            Recipes
          </a>
          <a href="#" className="block text-forest font-medium">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
