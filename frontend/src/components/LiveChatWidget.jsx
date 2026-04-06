import { useState } from 'react';

export default function LiveChatWidget() {
  const [messages, setMessages] = useState([{ from: 'admin', text: 'Hi! Need help choosing?' }]);
  const [value, setValue] = useState('');

  const send = () => {
    if (!value.trim()) return;
    setMessages((m) => [...m, { from: 'you', text: value }, { from: 'admin', text: 'Got it. Our stylist will reply shortly.' }]);
    setValue('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 w-80 rounded-2xl border border-white/20 bg-slate-900/90 p-4">
      <h4 className="mb-2 font-semibold">Live chat</h4>
      <div className="mb-2 h-40 overflow-y-auto rounded bg-black/20 p-2 text-sm">
        {messages.map((m, i) => <p key={i} className="mb-1"><b>{m.from}:</b> {m.text}</p>)}
      </div>
      <div className="flex gap-2">
        <input value={value} onChange={(e) => setValue(e.target.value)} className="w-full rounded bg-black/30 px-2 py-1" placeholder="Write..." />
        <button onClick={send} className="rounded bg-cyan-400 px-3 py-1 text-slate-900">Send</button>
      </div>
    </div>
  );
}
