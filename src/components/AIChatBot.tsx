import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    type: 'bot',
    text: 'Привет! Я помогу вам узнать больше о AIVA. Задайте любой вопрос!'
  }]);
  const handleSend = () => {
    if (!message.trim()) return;
    const userMessage = {
      type: 'user',
      text: message
    };
    setMessages(prev => [...prev, userMessage]);

    // Симуляция ответа бота
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: botResponse
      }]);
    }, 1000);
    setMessage('');
  };
  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость')) {
      return 'Стоимость AIVA начинается от 300 000 ₽/мес. Точную цену мы рассчитаем под ваш бизнес. Оставьте заявку для расчета!';
    }
    if (lowerMessage.includes('внедрение') || lowerMessage.includes('интеграция')) {
      return 'Внедрение AIVA занимает 1-1,5 месяца. Мы интегрируемся с любой CRM и не требуем перестройки бизнеса.';
    }
    if (lowerMessage.includes('экономия') || lowerMessage.includes('выгода')) {
      return 'AIVA экономит до 11 млн ₽ в год и увеличивает конверсию на 25%. Полная окупаемость за 3-4 месяца.';
    }
    return 'Спасибо за вопрос! Для получения подробной консультации оставьте заявку, и наш специалист свяжется с вами.';
  };
  return <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-50animate-pulse">
          {isOpen ? <X className="w-8 h-8 text-white" /> : <MessageCircle className="w-8 h-8 text-white" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold">AI Ассистент AIVA</h3>
            <p className="text-sm opacity-90">Онлайн</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>)}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex space-x-2">
              <Input value={message} onChange={e => setMessage(e.target.value)} placeholder="Напишите ваш вопрос..." onKeyPress={e => e.key === 'Enter' && handleSend()} className="flex-1" />
              <Button onClick={handleSend} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>}
    </>;
};
export default AIChatBot;