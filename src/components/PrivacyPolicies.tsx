
import React from 'react';

const PrivacyPolicies = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="space-y-4">
          <p className="text-slate-600">
            По вопросам обработки персональных данных обращайтесь: 
            <a href="mailto:privacy@aiva.ru" className="text-blue-600 hover:underline ml-1">
              privacy@aiva.ru
            </a>
          </p>
          
          <div className="flex justify-center space-x-8 text-sm">
            <a 
              href="#privacy" 
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Здесь можно добавить модальное окно с политикой
                alert('Политика конфиденциальности будет открыта в отдельном окне');
              }}
            >
              Политика конфиденциальности
            </a>
            <a 
              href="#terms" 
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Здесь можно добавить модальное окно с пользовательским соглашением
                alert('Пользовательское соглашение будет открыто в отдельном окне');
              }}
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
