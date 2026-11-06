export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Платформа",
      client: "TechStore Inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      time: "120 часов",
      team: "Участник 01, Участник 02",
      imageColor: "bg-blue-100", // Светлый фон для иконки
      textColor: "text-blue-600", // Цвет иконки
      icon: "🛒",
      link: "#",
    },
    {
      id: 2,
      title: "Мобильное приложение",
      client: "FitLife",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      time: "14 дней",
      team: "Участник 02, Участник 03",
      imageColor: "bg-green-100",
      textColor: "text-green-600",
      icon: "📱",
      link: "#",
    },
    {
      id: 3,
      title: "Корпоративный портал",
      client: "MegaCorp",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      time: "250 часов",
      team: "Участник 01, Участник 04",
      imageColor: "bg-purple-100",
      textColor: "text-purple-600",
      icon: "🏢",
      link: "#",
    },
    {
      id: 4,
      title: "Дизайн-система",
      client: "Внутренний проект",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      time: "30 дней",
      team: "Участник 02",
      imageColor: "bg-orange-100",
      textColor: "text-orange-600",
      icon: "🎨",
      link: "#",
    },
    {
      id: 5,
      title: "Лендинг для стартапа",
      client: "EcoStart",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
      time: "48 часов",
      team: "Участник 01, Участник 03",
      imageColor: "bg-pink-100",
      textColor: "text-pink-600",
      icon: "🚀",
      link: "#",
    },
  ];

  return (
    // ФОН СТРАНИЦЫ ТЕПЕРЬ БЕЛЫЙ (bg-white)
    <div className="flex min-h-screen flex-col bg-white p-8 md:p-16">
      <div className="mx-auto max-w-7xl w-full">
        {/* Заголовок страницы (теперь черный текст) */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mb-4">
            Проекты
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:border-black hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Верхняя часть (иконка на цветном фоне) */}
              <div
                className={`h-48 w-full ${project.imageColor} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <span
                  className={`text-6xl relative z-20 group-hover:scale-110 transition-transform duration-500 ${project.textColor}`}
                >
                  {project.icon}
                </span>
              </div>

              {/* Контент */}
              <div className="p-6 flex flex-col flex-1">
                {/* Клиент */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Клиент:
                  </span>
                  <span className="text-xs font-bold text-black bg-gray-100 px-2 py-1 rounded">
                    {project.client}
                  </span>
                </div>

                {/* Название */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                {/* Мета-данные (Время и Команда) */}
                <div className="border-t border-gray-100 pt-4 mt-auto space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">⏱ Время:</span>
                    <span className="text-gray-900 font-medium">
                      {project.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">👥 Команда:</span>
                    <span className="text-gray-900 font-medium text-right">
                      {project.team}
                    </span>
                  </div>
                </div>

                {/* Кнопка */}
                <a
                  href={project.link}
                  className="block w-full text-center rounded-lg bg-black text-white font-medium py-2.5 text-sm transition-all hover:bg-gray-800"
                >
                  Посмотреть проект
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
