import { 
  RiSendPlane2Line, 
  RiFacebookLine, 
  RiTwitterLine, 
  RiInstagramLine, 
  RiLinkedinLine 
} from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-6 font-sans">
      <div className="container_1200 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wide">Exclusive</h2>
            <h3 className="text-xl font-medium">Subscribe</h3>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="relative w-52">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-black border border-white rounded py-3 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-300"
              />
              <button 
                type="submit" 
                aria-label="Subscribe" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              >
                <RiSendPlane2Line className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <h3 className="text-xl font-medium">Support</h3>
            <p className="leading-relaxed">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
            <p><a href="mailto:exclusive@gmail.com" className="hover:underline">exclusive@gmail.com</a></p>
            <p><a href="tel:+88015888889999" className="hover:underline">+88015-88888-9999</a></p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xl font-medium mb-4">Account</h3>
            <p><a href="#" className="hover:underline">My Account</a></p>
            <p><a href="#" className="hover:underline">Login / Register</a></p>
            <p><a href="#" className="hover:underline">Cart</a></p>
            <p><a href="#" className="hover:underline">Wishlist</a></p>
            <p><a href="#" className="hover:underline">Shop</a></p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xl font-medium mb-4">Quick Link</h3>
            <p><a href="#" className="hover:underline">Privacy Policy</a></p>
            <p><a href="#" className="hover:underline">Terms Of Use</a></p>
            <p><a href="#" className="hover:underline">FAQ</a></p>
            <p><a href="#" className="hover:underline">Contact</a></p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium mb-4">Download App</h3>
            <p className="text-[12px] text-gray-400 font-medium">Save $3 with App New User Only</p>
            
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded">
                <img 
                  src="/public/imgs/Qrcode.png" 
                  alt="QR Code" 
                  className="w-20 h-20" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-8 border border-white/20 rounded" 
                  />
                </a>
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-8 border border-white/20 rounded" 
                  />
                </a>
              </div>
            </div>

            <div className="flex gap-6 pt-3 text-white">
              <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                <RiFacebookLine className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                <RiTwitterLine className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="Instagram">
                <RiInstagramLine className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
                <RiLinkedinLine className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 pt-4 text-center text-sm text-gray-600 flex items-center justify-center gap-1">
        <span className="text-base">&copy;</span> Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}