
import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold">VCR</div>
          <div>
            <h1 className="text-lg font-semibold">VCR Group of Industries</h1>
            <p className="text-sm text-gray-500">Quality • Innovation • Sustainability</p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-4 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/divisions/water">Divisions</Link></li>
            <li><Link href="/contact" className="px-3 py-2 bg-gold text-black rounded">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
