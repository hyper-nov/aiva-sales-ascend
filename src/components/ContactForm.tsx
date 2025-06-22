
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || (!formData.phone && !formData.email)) {
      toast.error('Заполните обязательные поля');
      return;
    }
    
    if (!formData.agreed) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }

    // Здесь будет отправка данных
    console.log('Form submitted:', formData);
    toast.success('Заявка отправлена! Мы свяжемся с вами в течение часа.');
    
    // Очистка формы
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      agreed: false
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-light text-slate-900 mb-4">
          Получить консультацию
        </h3>
        <p className="text-lg text-slate-600">
          Оставьте заявку и получите персональный расчет экономии для вашего бизнеса
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-slate-700 text-lg">
            Имя *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Ваше имя"
            className="mt-2 text-lg p-4 h-14"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-slate-700 text-lg">
            Телефон *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="+7 (999) 123-45-67"
            className="mt-2 text-lg p-4 h-14"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-slate-700 text-lg">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="email@company.com"
            className="mt-2 text-lg p-4 h-14"
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-slate-700 text-lg">
            Компания
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            placeholder="Название компании"
            className="mt-2 text-lg p-4 h-14"
          />
        </div>

        <div className="flex items-start space-x-3 pt-4">
          <Checkbox
            id="agreement"
            checked={formData.agreed}
            onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
            className="mt-1"
          />
          <Label htmlFor="agreement" className="text-sm text-slate-600 leading-relaxed">
            Я согласен на обработку персональных данных в соответствии с{' '}
            <a href="#privacy" className="text-blue-600 hover:underline">
              Политикой конфиденциальности
            </a>{' '}
            и{' '}
            <a href="#terms" className="text-blue-600 hover:underline">
              Пользовательским соглашением
            </a>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg py-6 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Получить консультацию
        </Button>
      </form>

      <p className="mt-6 text-sm text-slate-500 text-center">
        * Обязательные поля. Заполните телефон или email для связи.
      </p>
    </div>
  );
};

export default ContactForm;
