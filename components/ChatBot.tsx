
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm your Tink-Her-Hack 4.0 Assistant. Need some project ideas or have questions about the event? 💖" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || "" }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-display">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-background-dark border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-bold">Hackathon Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}><span className="material-symbols-outlined">close</span></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white/10 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-500 text-xs italic animate-pulse">Assistant is thinking...</div>}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
            />
            <button onClick={handleSend} className="bg-primary text-white p-2 rounded-xl">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,20,146,0.6)]"
        >
          <span className="material-symbols-outlined text-3xl">auto_awesome</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
