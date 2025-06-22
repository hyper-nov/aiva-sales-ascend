
import React from 'react';

const PrivacyPolicies = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Политика конфиденциальности */}
        <div id="privacy" className="mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-8">
            Политика конфиденциальности
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-slate-700">
            <div>
              <h3 className="text-xl font-medium mb-4">1. Общие положения</h3>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, 
                которую AIVA может получить о пользователе во время использования сайта и сервисов.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">2. Сбор персональных данных</h3>
              <p className="leading-relaxed mb-4">
                Мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Название компании</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3. Цели обработки данных</h3>
              <p className="leading-relaxed mb-4">
                Персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Обработка заявок и обращений</li>
                <li>Предоставление информационных услуг</li>
                <li>Проведение консультаций</li>
                <li>Информирование о новых услугах и акциях</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">4. Защита данных</h3>
              <p className="leading-relaxed">
                Мы принимаем необходимые правовые, организационные и технические меры для защиты 
                персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, 
                копирования, предоставления, распространения.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">5. Ваши права</h3>
              <p className="leading-relaxed">
                Вы имеете право на доступ к своим персональным данным, их исправление, удаление, 
                ограничение обработки, а также право на отзыв согласия на обработку персональных данных.
              </p>
            </div>
          </div>
        </div>

        {/* Пользовательское соглашение */}
        <div id="terms">
          <h2 className="text-4xl font-light text-slate-900 mb-8">
            Пользовательское соглашение
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-slate-700">
            <div>
              <h3 className="text-xl font-medium mb-4">1. Предмет соглашения</h3>
              <p className="leading-relaxed">
                Настоящее соглашение регулирует отношения между AIVA и пользователями сайта 
                при использовании информационных услуг и сервисов.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">2. Права и обязанности пользователя</h3>
              <p className="leading-relaxed mb-4">
                Пользователь обязуется:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Предоставлять достоверную информацию</li>
                <li>Не нарушать работу сайта</li>
                <li>Соблюдать применимое законодательство</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3. Ответственность</h3>
              <p className="leading-relaxed">
                AIVA не несет ответственности за ущерб, причиненный пользователю в результате 
                использования или невозможности использования сайта, за исключением случаев, 
                предусмотренных действующим законодательством РФ.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">4. Изменения соглашения</h3>
              <p className="leading-relaxed">
                AIVA оставляет за собой право в любое время изменять или дополнять настоящее 
                соглашение. Изменения вступают в силу с момента их размещения на сайте.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            По вопросам обработки персональных данных обращайтесь: 
            <a href="mailto:privacy@aiva.ru" className="text-blue-600 hover:underline ml-1">
              privacy@aiva.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicies;
