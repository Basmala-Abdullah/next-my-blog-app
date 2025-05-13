import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-fuchsia-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Image src = "/images/sign.png" alt="logo" width={32} height={32}/>
            <Link href="/" className="text-xl font-bold m-1">
              My Blog
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-fuchsia-500"
            >
              Home
            </Link>
            <Link
              href="/create"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-fuchsia-500"
            >
              New Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}