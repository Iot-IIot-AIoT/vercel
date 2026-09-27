import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            DeployReady
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Функции', 'Демо', 'Деплой'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-violet-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#деплой"
            className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all"
          >
            Начать →
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 99 ? prev + 1 : 99));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/80 text-sm">Готово к деплою на Vercel</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Ваше приложение
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            готово к продакшену
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Современный стек: React + Vite + Tailwind CSS. 
          Мгновенный деплой на Vercel с автоматическим CI/CD.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#деплой"
            className="px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
          >
            🚀 Задеплоить сейчас
          </a>
          <a
            href="#функции"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            Узнать больше
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: `${count}%`, label: 'Готово' },
            { value: '<1s', label: 'Сборка' },
            { value: 'A+', label: 'Рейтинг' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Молниеносный Vite',
      description: 'HMR за миллисекунды, оптимизированная сборка с Rollup',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: '🎨',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS для быстрого и красивого дизайна',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '⚛️',
      title: 'React 19',
      description: 'Последняя версия с хуками, серверными компонентами',
      color: 'from-violet-400 to-purple-500',
    },
    {
      icon: '📦',
      title: 'TypeScript',
      description: 'Типобезопасность для надёжного кода',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🔒',
      title: 'Vercel Security',
      description: 'HTTPS, DDoS-защита, edge functions из коробки',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: '🌍',
      title: 'Edge Network',
      description: 'CDN по всему миру для мгновенной загрузки',
      color: 'from-pink-400 to-rose-500',
    },
  ];

  return (
    <section id="функции" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">Возможности</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Всё для идеального деплоя
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Современные инструменты и лучшие практики для создания быстрых веб-приложений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  const [todos, setTodos] = useState<string[]>(['Настроить Vite', 'Добавить Tailwind', 'Написать компоненты']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <section id="демо" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">Демо</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Интерактивное приложение
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Попробуйте — это работает прямо здесь! Полноценный React с состоянием.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-xs ml-2 font-mono">todo-app.tsx</span>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Добавить задачу..."
                className="flex-1 px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
              />
              <button
                onClick={addTodo}
                className="px-4 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all"
              >
                +
              </button>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-700 group hover:border-violet-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-violet-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-200 text-sm">{todo}</span>
                  </div>
                  <button
                    onClick={() => removeTodo(index)}
                    className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all text-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
              <span className="text-gray-400 text-xs">{todos.length} задач</span>
              <span className="text-gray-400 text-xs font-mono">React + useState</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploySection() {
  const steps = [
    { step: '01', title: 'Подключите Git', desc: 'Привяжите репозиторий GitHub, GitLab или Bitbucket' },
    { step: '02', title: 'Настройте проект', desc: 'Vercel автоматически определит фреймворк и настройки' },
    { step: '03', title: 'Деплой!', desc: 'Нажмите Deploy и получите URL за секунды' },
  ];

  return (
    <section id="деплой" className="py-24 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider">Деплой</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Три шага до продакшена
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Vercel делает деплой максимально простым
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all">
                <span className="text-5xl font-bold text-violet-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 text-violet-500/40 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-gray-400 text-xs ml-2 font-mono">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-green-400">$ npx vercel deploy</div>
              <div className="text-gray-400">▲ Vercel CLI ready</div>
              <div className="text-gray-400">✓ Building project...</div>
              <div className="text-gray-400">✓ Optimizing assets...</div>
              <div className="text-green-400">✓ Deployed to production!</div>
              <div className="text-violet-400 mt-4">
                🎉 https://your-app.vercel.app
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-white">DeployReady</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">
              Сделано с ❤️ для Vercel
            </span>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 DeployReady. React + Vite + Tailwind CSS + Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <DeploySection />
      <Footer />
    </div>
  );
}
