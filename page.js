
export default function Contact(){
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-600">For enquiries about supply, partnership or careers contact our central team.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Head Office</h3>
          <p className="text-gray-600 mt-2">123 Industrial Park, City, Country</p>
          <p className="mt-2">Phone: +123 456 7890</p>
          <p>Email: info@vcrgroup.example</p>
        </div>
        <div>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}} className="space-y-3">
            <input className="w-full p-2 border rounded" placeholder="Name" required />
            <input className="w-full p-2 border rounded" placeholder="Email" required />
            <input className="w-full p-2 border rounded" placeholder="Company" />
            <textarea className="w-full p-2 border rounded" placeholder="Message" rows="5" required></textarea>
            <button className="px-4 py-2 bg-gold text-black rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
