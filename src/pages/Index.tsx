import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl">ЦКИ «БАЗА»</h1>
                <p className="text-xs text-muted-foreground">Центр Креативных Индустрий</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#offer" className="text-sm font-medium hover:text-primary transition-colors">Предложение</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-extrabold text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Пространство для творчества
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                Универсальные залы и креативные площадки для ваших мероприятий
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Вместимость до 400 человек • Более 50 мастер-классов • 80+ успешных проектов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Забронировать зал
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/92e16359-7cbe-45fb-ac34-17e08883af35.jpg"
                alt="ЦКИ БАЗА интерьер"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead / Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold">Более года успешной работы</span>
          </div>
          <h3 className="font-heading font-bold text-4xl mb-6">
            Место встречи самых творческих людей
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Центр Креативных Индустрий «База» — это не просто место для проведения мероприятий, 
            а настоящая платформа для творчества и обмена идеями. Три здания, объединённые единой 
            философией креативности, предоставляют уникальные возможности для развития культуры, 
            искусства и технологий.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <h3 className="font-heading font-bold text-4xl mb-12 text-center">Наше предложение</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Building2" size={32} className="text-white" />
              </div>
              <h4 className="font-heading font-bold text-2xl mb-4">Аренда залов</h4>
              <p className="text-gray-700 mb-4">
                Универсальный зал с гибкой планировкой вместимостью до 400 посадочных мест. 
                Идеально подходит для семинаров, конференций, концертов, танцев и любых других мероприятий.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Техническое оснащение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Профессиональное оформление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Поддержка на всех этапах</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="font-heading font-bold text-2xl mb-4">Мастер-классы</h4>
              <p className="text-gray-700 mb-4">
                Более 50 различных мастер-классов для коллективов предприятий. 
                Одновременно можем провести активности для 500 участников.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <span>50+ вариантов программ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <span>До 500 участников одновременно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <span>Опытные мастера</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/3a9393c6-c8e9-4f16-b452-5ce90391cc6c.jpg"
                alt="Мастер-класс"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-6 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold">О компании</span>
              </div>
              <h3 className="font-heading font-bold text-4xl mb-6">
                Платформа для творчества и инноваций
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                За более чем год работы мы стали домом для 80+ резидентов, 20 из которых 
                находятся у нас на постоянной основе.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">80+</div>
                  <div className="text-sm text-muted-foreground">Резидентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">400</div>
                  <div className="text-sm text-muted-foreground">Мест в зале</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Мастер-классов</div>
                </div>
              </div>
              <p className="text-gray-700">
                Мы успешно провели мюзиклы, концерты, соревнования по паркуру, ярмарки 
                и множество других креативных событий.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <h3 className="font-heading font-bold text-4xl mb-4 text-center">Наши преимущества</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Всё необходимое для успешного проведения вашего мероприятия
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Maximize2" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Универсальный зал</h4>
              <p className="text-gray-700">
                Гибкая планировка позволяет адаптировать пространство под любой формат: 
                от деловых конференций до танцевальных вечеров.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Settings" size={28} className="text-secondary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Полная организация</h4>
              <p className="text-gray-700">
                Высококачественная организация включает техническое оснащение, оформление 
                и поддержку от планирования до реализации.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Sparkles" size={28} className="text-accent" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Творческая атмосфера</h4>
              <p className="text-gray-700">
                Более года работы, 80+ резидентов и десятки успешных проектов создали 
                уникальную креативную среду.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="TreePine" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Уличные площадки</h4>
              <p className="text-gray-700">
                Идеально подходят для тимбилдингов, активных мероприятий на свежем 
                воздухе и массовых событий.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Coffee" size={28} className="text-secondary" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Кафе и кейтеринг</h4>
              <p className="text-gray-700">
                Уютное кафе для перерывов и профессиональный кейтеринг создают 
                максимально комфортные условия для гостей.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Zap" size={28} className="text-accent" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">Гибкость</h4>
              <p className="text-gray-700">
                Готовы организовать как крупные корпоративные события на сотни гостей, 
                так и камерные мероприятия для небольшой аудитории.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Justification */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-4xl mb-4">Прозрачные цены</h3>
            <p className="text-muted-foreground text-lg">
              Выберите оптимальный вариант для вашего мероприятия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-muted rounded-full text-sm font-semibold mb-4">
                  Базовый
                </div>
                <div className="font-heading font-bold text-4xl mb-2">
                  от 15 000 ₽
                </div>
                <div className="text-muted-foreground">за 4 часа</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Аренда зала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Базовое оборудование</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>До 100 человек</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Подробнее</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary bg-primary/5 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                Популярный
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-sm font-semibold mb-4">
                  Стандарт
                </div>
                <div className="font-heading font-bold text-4xl mb-2">
                  от 35 000 ₽
                </div>
                <div className="text-muted-foreground">за 8 часов</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Аренда зала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Полное оборудование</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>До 250 человек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Базовое оформление</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Выбрать</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-secondary/20 rounded-full text-sm font-semibold mb-4">
                  Премиум
                </div>
                <div className="font-heading font-bold text-4xl mb-2">
                  от 60 000 ₽
                </div>
                <div className="text-muted-foreground">за день</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Аренда зала</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Премиум оборудование</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>До 400 человек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Дизайнерское оформление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-1" />
                  <span>Полное сопровождение</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Подробнее</Button>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/8e1a9050-01d3-46ee-8068-fc2a2b3d8fdb/files/7f582d4d-d0f2-457f-b05b-bf8d495794f9.jpg"
              alt="Зал ЦКИ БАЗА"
              className="rounded-3xl shadow-xl w-full max-w-3xl mx-auto h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Готовы обсудить ваше мероприятие?
            </h3>
            <p className="text-xl text-white/90">
              Свяжитесь с нами для бронирования зала или консультации
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Телефон
                </label>
                <Input 
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Расскажите о вашем мероприятии
                </label>
                <Textarea 
                  placeholder="Опишите формат мероприятия, количество гостей, дату..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                Отправить заявку
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:info@baza-cki.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@baza-cki.ru
                  </a>
                </div>
                <div>
                  <Icon name="Phone" size={24} className="mx-auto mb-2 text-secondary" />
                  <div className="font-semibold text-gray-900 mb-1">Телефон</div>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-secondary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="mx-auto mb-2 text-accent" />
                  <div className="font-semibold text-gray-900 mb-1">Адрес</div>
                  <div className="text-muted-foreground">
                    г. Москва, ул. Креативная, 1
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Postscript */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
            </div>
            <h4 className="font-heading font-bold text-2xl mb-4">
              P.S. Ваше событие заслуживает лучшего!
            </h4>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              Каждое мероприятие в ЦКИ «БАЗА» — это уникальный опыт. Наша команда профессионалов 
              позаботится о каждой детали, чтобы ваше событие прошло на высшем уровне и запомнилось надолго.
            </p>
            <p className="text-gray-400 italic">
              С уважением, команда Центра Креативных Индустрий «БАЗА»
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2024 ЦКИ «БАЗА». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
