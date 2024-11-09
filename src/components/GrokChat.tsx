import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { GROK_API_ENDPOINT, GROK_API_KEY, getGrokHeaders, GROK_SYSTEM_PROMPT } from '../config';

export default function GrokChat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsLoading(true);
    try {
      const messages = [
        { role: 'system', content: GROK_SYSTEM_PROMPT },
        ...chatHistory,
        { role: 'user', content: message }
      ];

      const res = await fetch(GROK_API_ENDPOINT, {
        method: 'POST',
        headers: getGrokHeaders(),
        body: JSON.stringify({
          messages,
          model: 'grok-beta',
          stream: false,
          temperature: 0
        })
      });
      
      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      const newResponse = data.choices[0].message.content;
      setResponse(newResponse);
      
      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: message },
        { role: 'assistant', content: newResponse }
      ]);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error connecting to Grok. Please try again later.');
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
      <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 flex items-center space-x-2">
        <MessageCircle className="h-5 w-5 text-white" />
        <span className="font-semibold text-white">Ask About Cars</span>
      </div>

      <div className="h-64 overflow-y-auto p-4 bg-slate-900/95">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === 'user' 
                ? 'bg-red-500/10 border border-red-500/20 ml-8' 
                : 'bg-slate-800/50 border border-slate-700/50 mr-8'
            } p-3 rounded-lg`}
          >
            <p className="text-slate-200">{msg.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700/50 bg-slate-900/95">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Ask about any car..."
            className="flex-1 p-2 rounded-lg bg-slate-800 border border-slate-700/50 text-white 
                     placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg
                     hover:from-red-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}