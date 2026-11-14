import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Hero секция */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-sm font-medium text-gray-800 mb-6 border border-black/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Доступны для новых проектов
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Добро пожаловать на главную страницу{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
            нашей команды
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Мы — коллектив увлеченных разработчиков, дизайнеров и творцов. Мы
          создаем цифровые продукты, которые решают сложные задачи и приносят
          радость пользователям. Познакомьтесь с нашим подходом и философией.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="rounded-md bg-black px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            Смотреть проекты
          </Link>
          <Link
            href="/about"
            className="rounded-md bg-white border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Узнать о нас больше
          </Link>
        </div>
      </div>

      {/* Секция с преимуществами (иконки) */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Почему мы?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Карточка 1 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-2xl mb-6">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Скорость и качество
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Карточка 2 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-2xl mb-6">
              💡
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Инновационные идеи
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Карточка 3 */}
          <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-2xl mb-6">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Командная работа
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* Блок с большим количеством текста (Lorem Ipsum) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="bg-gray-100 rounded-3xl p-12 aspect-square flex items-center justify-center border border-black/5 relative overflow-hidden">
          {/* Декоративные элементы на фоне картинки */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent"></div>
          <span className="text-8xl relative z-10 grayscale opacity-50">
            🏢
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Наша философия
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>

      {/* Нижний блок с призывом */}
      <div className="bg-black text-white rounded-3xl p-12 text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готовы начать проект?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
        >
          Связаться с нами
        </Link>
      </div>
    </div>
  );
}
