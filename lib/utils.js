import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




// import Link from "next/link";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo + Organization Name */}
//           <div className="flex items-center space-x-3">
//             <Image src="/logo.jpg" alt="Logo" width={72} height={72} />
//             <h1 className="text-xl font-bold">UGUNJA DEVELOPMENT INITIATIVE</h1>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex space-x-6">
//             <Link href="/" className="hover:underline">Home</Link>
//             <Link href="/projects" className="hover:underline">Projects</Link>
//             <Link href="/about" className="hover:underline">About Us</Link>
//             <Link href="/contact" className="hover:underline">Contact</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Page Content */}
//       <main className="p-8">
//         <h2 className="text-2xl">Welcome to Our Nonprofit</h2>
//         <p>This is where your main content goes.</p>
//       </main>
//     </div>
//   );
// }
