import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 9);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 9) % 9);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slide 1: Cover */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-primary flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-12">
              <div className="text-8xl mb-6">🎨</div>
              <h1 className="font-heading font-extrabold text-7xl text-primary-foreground mb-4 uppercase tracking-wider">
                БАЗА
              </h1>
              <p className="text-2xl text-primary-foreground/80 uppercase tracking-widest">
                Центр Креативных Индустрий
              </p>
            </div>
            <div className="max-w-3xl">
              <p className="text-3xl font-heading font-bold text-primary-foreground mb-6 uppercase">
                Добро пожаловать в место, где вы можете<br/>раскрыть свой потенциал и научиться новому!
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2: Intro */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-secondary p-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-primary-foreground uppercase">
                  Центр Креативных Индустрий «БАЗА»
                </h2>
              </div>
              <div className="bg-white p-12 shadow-2xl">
                <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                  Центр Креативных Индустрий «База» — это не просто место для проведения мероприятий, 
                  а настоящая <span className="font-bold">платформа для творчества и обмена идеями.</span>
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Три здания, объединённые единой философией креативности, предоставляют уникальные 
                  возможности для развития культуры, искусства и технологий.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="bg-primary/10 p-6 text-center">
                    <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">80+</div>
                    <div className="text-sm uppercase font-semibold">Резидентов</div>
                  </div>
                  <div className="bg-primary/10 p-6 text-center">
                    <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">400</div>
                    <div className="text-sm uppercase font-semibold">Мест в зале</div>
                  </div>
                  <div className="bg-primary/10 p-6 text-center">
                    <div className="text-5xl font-heading font-bold text-primary-foreground mb-2">50+</div>
                    <div className="text-sm uppercase font-semibold">Мастер-классов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Offer - Photo Grid */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-secondary p-12">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="bg-primary p-6 mb-6">
                <h2 className="font-heading font-bold text-3xl text-primary-foreground uppercase">
                  Наше предложение
                </h2>
              </div>
              <div className="flex-1 bg-white p-8">
                <div className="mb-6">
                  <p className="text-xl font-bold uppercase text-primary-foreground mb-2">
                    🌳 Просторные площадки
                  </p>
                  <p className="text-lg mb-1">для одновременного размещения до 500 участников</p>
                  <p className="text-xl font-bold uppercase text-accent mb-2">
                    ⭐ Опытные наставники в каждой области
                  </p>
                  <p className="text-xl font-bold uppercase text-primary-foreground">
                    🎯 Гибкий график - выбирайте удобные вам мастер-классы
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/92e16359-7cbe-45fb-ac34-17e08883af35.jpg"
                    alt="Мероприятие 1"
                    className="w-full h-48 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/3a9393c6-c8e9-4f16-b452-5ce90391cc6c.jpg"
                    alt="Мероприятие 2"
                    className="w-full h-48 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/7f582d4d-d0f2-457f-b05b-bf8d495794f9.jpg"
                    alt="Мероприятие 3"
                    className="w-full h-48 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/92e16359-7cbe-45fb-ac34-17e08883af35.jpg"
                    alt="Мероприятие 4"
                    className="w-full h-48 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/3a9393c6-c8e9-4f16-b452-5ce90391cc6c.jpg"
                    alt="Мероприятие 5"
                    className="w-full h-48 object-cover"
                  />
                  <img 
                    src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/7f582d4d-d0f2-457f-b05b-bf8d495794f9.jpg"
                    alt="Мероприятие 6"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: About Company */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-white p-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-secondary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-white uppercase">
                  О компании
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-primary p-10">
                  <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-6 uppercase">
                    Более года успешной работы
                  </h3>
                  <p className="text-xl text-primary-foreground leading-relaxed">
                    За более чем год работы мы стали домом для <span className="font-bold">80+ резидентов</span>, 
                    20 из которых находятся у нас на постоянной основе.
                  </p>
                </div>
                <div className="bg-gray-100 p-10">
                  <h3 className="font-heading font-bold text-2xl mb-4 uppercase">Наши достижения</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Мюзиклы и концерты</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Соревнования по паркуру</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Творческие ярмарки</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-2xl">✓</span>
                      <span>Мастер-классы и воркшопы</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <img 
                  src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/92e16359-7cbe-45fb-ac34-17e08883af35.jpg"
                  alt="ЦКИ БАЗА"
                  className="w-full h-64 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5: Advantages 1 */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-secondary p-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-primary-foreground uppercase">
                  Преимущества
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Maximize2" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 uppercase">Универсальный зал</h3>
                  <p className="text-lg leading-relaxed">
                    Вместимость до 400 посадочных мест. Гибкая планировка позволяет адаптировать 
                    пространство под любой формат мероприятия.
                  </p>
                </div>
                <div className="bg-white p-8 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Settings" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 uppercase">Полная организация</h3>
                  <p className="text-lg leading-relaxed">
                    Техническое оснащение, профессиональное оформление и поддержка на всех этапах — 
                    от планирования до реализации.
                  </p>
                </div>
                <div className="bg-white p-8 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Sparkles" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 uppercase">Творческая атмосфера</h3>
                  <p className="text-lg leading-relaxed">
                    Более года работы, 80+ резидентов и десятки успешных проектов создали 
                    уникальную креативную среду.
                  </p>
                </div>
                <div className="bg-white p-8 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="TreePine" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 uppercase">Уличные площадки</h3>
                  <p className="text-lg leading-relaxed">
                    Идеально подходят для тимбилдингов, активных мероприятий и массовых событий 
                    на свежем воздухе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 6: Advantages 2 */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-white p-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-secondary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-white uppercase">
                  Дополнительные возможности
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-primary p-10">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Coffee" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-4 uppercase">
                    Кафе и кейтеринг
                  </h3>
                  <p className="text-xl text-primary-foreground leading-relaxed">
                    Уютное кафе для перерывов и профессиональный кейтеринг создают максимально 
                    комфортные условия для ваших гостей.
                  </p>
                </div>
                <div className="bg-secondary p-10">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-white mb-4 uppercase">
                    Гибкость
                  </h3>
                  <p className="text-xl text-white leading-relaxed">
                    Готовы организовать как крупные корпоративные события на сотни гостей, 
                    так и камерные мероприятия для небольшой аудитории.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-gray-100 p-10">
                <h3 className="font-heading font-bold text-2xl mb-6 uppercase text-center">
                  Более 50 мастер-классов на выбор
                </h3>
                <p className="text-xl text-center leading-relaxed">
                  Одновременно можем провести мастер-классы для <span className="font-bold text-accent">500 участников</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7: Pricing */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 6 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-primary p-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-secondary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-white uppercase">
                  Прозрачные цены
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-8">
                  <div className="text-center border-b-4 border-secondary pb-4 mb-6">
                    <h3 className="font-heading font-bold text-2xl uppercase mb-2">Базовый</h3>
                    <div className="text-5xl font-heading font-bold text-primary-foreground my-4">15 000 ₽</div>
                    <div className="text-muted-foreground">за 4 часа</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Аренда зала</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Базовое оборудование</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>До 100 человек</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent p-8 transform scale-105">
                  <div className="text-center border-b-4 border-secondary pb-4 mb-6">
                    <div className="bg-secondary text-white px-4 py-1 rounded-full inline-block mb-2 text-sm font-bold uppercase">
                      Популярный
                    </div>
                    <h3 className="font-heading font-bold text-2xl uppercase mb-2 text-primary-foreground">Стандарт</h3>
                    <div className="text-5xl font-heading font-bold text-primary-foreground my-4">35 000 ₽</div>
                    <div className="text-primary-foreground/80">за 8 часов</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary text-xl">✓</span>
                      <span>Аренда зала</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary text-xl">✓</span>
                      <span>Полное оборудование</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary text-xl">✓</span>
                      <span>До 250 человек</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary text-xl">✓</span>
                      <span>Базовое оформление</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8">
                  <div className="text-center border-b-4 border-secondary pb-4 mb-6">
                    <h3 className="font-heading font-bold text-2xl uppercase mb-2">Премиум</h3>
                    <div className="text-5xl font-heading font-bold text-primary-foreground my-4">60 000 ₽</div>
                    <div className="text-muted-foreground">за день</div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Аренда зала</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Премиум оборудование</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>До 400 человек</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Дизайнерское оформление</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Полное сопровождение</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 8: Contact */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 7 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-secondary p-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary p-8 mb-8">
                <h2 className="font-heading font-bold text-4xl text-primary-foreground uppercase">
                  Свяжитесь с нами
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-10">
                  <h3 className="font-heading font-bold text-2xl mb-6 uppercase">Контактная информация</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Mail" size={24} className="text-accent" />
                        <span className="font-semibold text-lg">Email</span>
                      </div>
                      <a href="mailto:info@baza-cki.ru" className="text-xl text-primary-foreground hover:text-accent transition-colors">
                        info@baza-cki.ru
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Phone" size={24} className="text-accent" />
                        <span className="font-semibold text-lg">Телефон</span>
                      </div>
                      <a href="tel:+79991234567" className="text-xl text-primary-foreground hover:text-accent transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="MapPin" size={24} className="text-accent" />
                        <span className="font-semibold text-lg">Адрес</span>
                      </div>
                      <div className="text-xl">
                        г. Москва, ул. Креативная, 1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-10">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12 border-2"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12 border-2"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12 border-2"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="min-h-24 border-2"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-primary-foreground font-bold uppercase">
                      Отправить заявку
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9: Postscript */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 8 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="h-full bg-primary flex items-center justify-center p-16">
            <div className="max-w-4xl text-center">
              <div className="mb-8">
                <div className="text-8xl mb-6">🎨</div>
              </div>
              <h2 className="font-heading font-bold text-5xl text-primary-foreground mb-8 uppercase">
                P.S. Ваше событие заслуживает лучшего!
              </h2>
              <p className="text-2xl text-primary-foreground leading-relaxed mb-8">
                Каждое мероприятие в ЦКИ «БАЗА» — это уникальный опыт. Наша команда профессионалов 
                позаботится о каждой детали, чтобы ваше событие прошло на высшем уровне и запомнилось надолго.
              </p>
              <div className="border-t-4 border-secondary pt-8 mt-12">
                <p className="text-xl text-primary-foreground/80 italic">
                  С уважением,<br/>команда Центра Креативных Индустрий «БАЗА»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
            <Button 
              onClick={prevSlide}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
            
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === i ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={nextSlide}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 z-20 bg-secondary text-white px-6 py-3 rounded-lg font-heading font-bold text-lg">
          {currentSlide + 1} / 9
        </div>
      </div>
    </div>
  );
};

export default Index;
