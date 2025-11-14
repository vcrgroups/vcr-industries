
export default function Footer(){
  return (
    <footer className="bg-vcrblack text-white mt-12">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold">VCR Group of Industries</h4>
          <p className="text-sm mt-2">123 Industrial Park, City, Country<br/>Phone: +123 456 7890<br/>Email: info@vcrgroup.example</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Subscribe</h5>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed (demo)')}} className="mt-2">
            <input className="w-full p-2 rounded text-black" placeholder="Your email" />
            <button className="mt-2 px-4 py-2 bg-gold rounded text-black">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bg-black/30 text-center py-3 text-sm">© {new Date().getFullYear()} VCR Group of Industries. All rights reserved.</div>
    </footer>
  )
}
