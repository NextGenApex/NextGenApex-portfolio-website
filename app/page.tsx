import Link from "next/link";

const features = [
  {
    title: "Скорость и качество",
    description:
      "Пишем чистый, масштабируемый код на современном стеке. Оптимизируем производительность так, чтобы сайты загружались мгновенно.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Инновационные идеи",
    description:
      "Не используем скучные шаблоны. Продумываем каждый сценарий пользователя, создавая интуитивный и запоминающийся UI/UX дизайн.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Командная синергия",
    description:
      "Дизайнеры, фронтенд- и бэкенд-разработчики работают в единой связке. Вы получаете предсказуемый результат и прозрачные этапы.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "FastAPI",
  "Redis",
  "RabbitMQ",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm text-sm font-medium text-gray-800 mb-8 border border-gray-200/80 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Открыты к новым проектам
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-950 mb-8 leading-[1.08]">
            Создаем цифровые{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
              продукты будущего
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Мы — команда разработчиков и дизайнеров NextGenApex. Проектируем быстрые
            веб-приложения, стильные интерфейсы и надежную архитектуру под задачи вашего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Смотреть проекты
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Познакомиться с командой
            </Link>
          </div>
        </div>

        <div className="mb-28 border-y border-gray-100 py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Технологии, с которыми мы работаем
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200/70 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-950 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600">
              Сочетаем инженерную точность с вниманием к визуальным деталям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border border-gray-200/80 rounded-3xl shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-gray-950 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-950 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-950">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28">
          <div className="bg-gray-950 text-gray-100 rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="ml-2 text-xs font-mono text-gray-400">
                  fullstack_synergy.ts
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                100% Sync
              </span>
            </div>

            <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
              <code>
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-blue-400">nextGenApex</span> = {"{\n"}
                {"  "}frontend:{" "}
                <span className="text-emerald-400">'Next.js + эстетика UI/UX'</span>,{"\n"}
                {"  "}backend:{" "}
                <span className="text-emerald-400">'FastAPI + мощь архитектуры'</span>,{"\n"}
                {"  "}speed:{" "}
                <span className="text-emerald-400">'Redis + RabbitMQ без лагов'</span>,{"\n"}
                {"  "}teamwork:{" "}
                <span className="text-emerald-400">'Единый механизм без границ'</span>,{"\n"}
                {"};"}
              </code>
            </pre>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-800 text-center">
              <div>
                <div className="text-2xl font-black text-white">UI / UX</div>
                <div className="text-xs text-gray-400 mt-1">Живой интерфейс</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">&lt;50ms</div>
                <div className="text-xs text-gray-400 mt-1">Отклик сервера</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Full</div>
                <div className="text-xs text-gray-400 mt-1">Цикл разработки</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">
              Наш подход
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-gray-950">
              Гармония безупречного интерфейса и мощного сервера
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Мы не делим продукт на «важное» и «второстепенное» —{" "}
                <strong className="text-gray-900 font-semibold">
                  фронтенд и бэкенд работают в нашей команде как единый организм
                </strong>
                . Пользователь влюбляется в продукт с первого клика благодаря
                отзывчивому интерфейсу на Next.js, а серверная часть делает так,
                чтобы эта магия работала без сбоев.
              </p>
              <p>
                Пока фронтенд-разработчики и дизайнеры оттачивают каждую
                анимацию, типографику и сценарий взаимодействия, бэкенд-команда
                выстраивает надежный фундамент на FastAPI, ускоряет данные через
                Redis и настраивает очереди задач на RabbitMQ.
              </p>
              <p>
                Вместе мы создаем целостные цифровые продукты: одинаково
                сильные как снаружи, так и под капотом — быстрые, эстетичные и
                готовые к любым нагрузкам.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-950 text-white rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Готовы запустить проект?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
              Расскажите о вашей идее или задаче. Мы обсудим детали, предложим
              оптимальное техническое решение и сориентируем по срокам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-gray-950 hover:bg-gray-200 transition-colors"
              >
                Обсудить задачу
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-gray-700 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-900 transition-colors"
              >
                Посмотреть кейсы
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
