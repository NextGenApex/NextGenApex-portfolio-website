export default function Contact() {
  return (
    // Фон страницы теперь белый
    <div className="flex min-h-screen flex-col bg-white p-8 md:p-16 lg:p-24">
      <div className="mx-auto max-w-6xl w-full">
        {/* Шапка страницы */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-black tracking-tight mb-6">
            Связаться с нами
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Мы всегда открыты к диалогу. Если у вас есть идея, проект или вопрос
            — заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        {/* Сетка: Слева контакты, Справа форма */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Левая колонка: Контактная информация */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Офис
              </h3>
              <p className="text-black text-lg font-light leading-relaxed">
                г. Москва, Пресненская набережная,
                <br />
                Башня «Федерация», 12 этаж
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Связаться напрямую
              </h3>
              <p className="text-black text-lg font-light mb-2">
                <a
                  href="mailto:hello@nextgenapex.com"
                  className="hover:text-gray-500 transition-colors"
                >
                  hello@nextgenapex.com
                </a>
              </p>
              <p className="text-black text-lg font-light">
                <a
                  href="tel:+79990000000"
                  className="hover:text-gray-500 transition-colors"
                >
                  +7 (999) 000-00-00
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Часы работы
              </h3>
              <p className="text-black text-lg font-light">
                Пн – Пт: 09:00 – 18:00
                <br />
                Сб – Вс: Выходной
              </p>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          {/* Сделали фон формы чуть сероватым, чтобы она выделялась на белом */}
          <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-sm">
            <form className="space-y-6">
              {/* Имя */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-500 mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-gray-300 text-black py-3 px-0 focus:outline-none focus:border-black transition-colors text-lg placeholder-gray-400"
                  placeholder="Иван Иванов"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500 mb-2"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-gray-300 text-black py-3 px-0 focus:outline-none focus:border-black transition-colors text-lg placeholder-gray-400"
                  placeholder="ivan@company.com"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500 mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 text-black py-3 px-0 focus:outline-none focus:border-black transition-colors text-lg resize-none placeholder-gray-400"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <div className="pt-4">
                <button
                  type="button"
                  className="w-full bg-black text-white font-semibold text-lg py-4 px-8 hover:bg-gray-800 transition-colors duration-300"
                >
                  Отправить сообщение
                </button>
              </div>

              {/* Политика конфиденциальности */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с нашей{" "}
                <a
                  href="#"
                  className="underline hover:text-black transition-colors"
                >
                  политикой конфиденциальности
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
