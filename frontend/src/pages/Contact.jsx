export default function Contact() {
  return (
    <form className="glass mx-auto max-w-3xl space-y-3 rounded-2xl p-6">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <input className="w-full rounded bg-slate-900 p-3" placeholder="Name" />
      <input className="w-full rounded bg-slate-900 p-3" placeholder="Email" />
      <textarea className="w-full rounded bg-slate-900 p-3" placeholder="Message" rows="5" />
      <button className="rounded bg-cyan-400 px-4 py-2 text-slate-900">Send Message</button>
    </form>
  );
}
