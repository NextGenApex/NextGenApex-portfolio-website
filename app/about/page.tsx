export default function About() {
  // Данные участников (без имён, только номера)
  const team = [
    {
      id: "01",
      role: "Frontend Разработчик",
      initials: "01",
      color: "bg-blue-100 text-blue-600",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      github: "#",
      telegram: "#",
      linkedin: "#",
    },
    {
      id: "02",
      role: "UI/UX Дизайнер",
      initials: "02",
      color: "bg-purple-100 text-purple-600",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      github: "#",
      telegram: "#",
      linkedin: "#",
    },
    {
      id: "03",
      role: "Backend Разработчик",
      initials: "03",
      color: "bg-green-100 text-green-600",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      github: "#",
      telegram: "#",
      linkedin: "#",
    },
    {
      id: "04",
      role: "Project Manager",
      initials: "04",
      color: "bg-orange-100 text-orange-600",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      github: "#",
      telegram: "#",
      linkedin: "#",
    },
  ];

  return (
    // Фон всей страницы — белый
    <div className="flex min-h-screen flex-col bg-white p-8 md:p-16">
      <div className="mx-auto max-w-7xl w-full">
        {/* Огромный заголовок */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase">
            Участники
          </h1>
        </div>

        {/* Сетка с участниками */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-black"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Огромная аватарка */}
                <div
                  className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-4xl font-black shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${member.color}`}
                >
                  {member.initials}
                </div>

                {/* Информация */}
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-black mb-1">
                    Участник {member.id}
                  </h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {member.desc}
                  </p>

                  {/* Социальные сети */}
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-auto">
                    {/* GitHub */}
                    <a
                      href={member.github}
                      className="text-gray-400 hover:text-black transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    {/* Telegram */}
                    <a
                      href={member.telegram}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="Telegram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
