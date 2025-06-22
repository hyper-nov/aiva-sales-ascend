
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Phone, Calendar, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'phone' | 'meeting' | 'email';
}

const ContactModal = ({ isOpen, onClose, type }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    agreed: false
  });

  const modalConfig = {
    phone: {
      title: 'Заказать звонок',
      subtitle: 'Наш специалист свяжется с вами в течение 15 минут',
      icon: Phone,
      contactLabel: 'Телефон *',
      contactPlaceholder: '+7 (999) 123-45-67',
      contactType: 'tel'
    },
    meeting: {
      title: 'Забронировать встречу',
      subtitle: 'Демонстрация решения и персональная консультация',
      icon: Calendar,
      contactLabel: 'Телефон или Email *',
      contactPlaceholder: '+7 (999) 123-45-67 или email@company.com',
      contactType: 'text'
    },
    email: {
      title: 'Получить презентацию',
      subtitle: 'Подробная презентация AIVA на вашу почту',
      icon: Mail,
      contactLabel: 'Email *',
      contactPlaceholder: 'email@company.com',
      contactType: 'email'
    }
  };

  const config = modalConfig[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    
    if (!formData.agreed) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }

    console.log('Form submitted:', { ...formData, type });
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    
    setFormData({ name: '', contact: '', agreed: false });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90vw] mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
              <config.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{config.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">{config.subtitle}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div>
            <Label htmlFor="name" className="text-slate-700 text-sm sm:text-base">
              Имя *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ваше имя"
              className="mt-2 text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <Label htmlFor="contact" className="text-slate-700 text-sm sm:text-base">
              {config.contactLabel}
            </Label>
            <Input
              id="contact"
              type={config.contactType}
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              placeholder={config.contactPlaceholder}
              className="mt-2 text-sm sm:text-base"
              required
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="agreement"
              checked={formData.agreed}
              onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
              className="mt-1"
            />
            <Label htmlFor="agreement" className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Я согласен на обработку персональных данных в соответствии с{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Политикой конфиденциальности
              </span>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base"
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
