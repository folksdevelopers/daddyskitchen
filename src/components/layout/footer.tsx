import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">DaddysKitchen</h3>
            <p className="mt-4 text-sm text-gray-400">
              Find a location nearest you,
              <br />
              See our Stores.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>+91 9747374062</p>
              <p>hello@daddyskithcen.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Useful links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">New Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Bundle & Save</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Information</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Good Emails</h3>
            <p className="mt-4 text-sm text-gray-400">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <form className="mt-4 flex">
              <Input
                type="email"
                placeholder="Enter your email address."
                className="flex-1 rounded-l-md rounded-r-none border-gray-600 bg-white text-black placeholder-gray-500"
              />
              <Button type="submit" className="rounded-l-none rounded-r-md bg-gray-600 hover:bg-gray-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex justify-between text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>Site by FolksDev</p>
        </div>
      </div>
    </footer>
  );
}
