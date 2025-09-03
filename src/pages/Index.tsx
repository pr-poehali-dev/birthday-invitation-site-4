import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeSection, setActiveSection] = useState('main');

  // Дата праздника - можно изменить на нужную дату
  const partyDate = new Date('2025-09-15T18:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = partyDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const program = [
    { time: '18:00', event: 'Сбор гостей и приветственные коктейли' },
    { time: '18:30', event: 'Торжественное поздравление именинника' },
    { time: '19:00', event: 'Праздничный ужин и тосты' },
    { time: '20:00', event: 'Развлекательная программа и конкурсы' },
    { time: '21:00', event: 'Торт и загадывание желаний' },
    { time: '21:30', event: 'Танцы и веселье до утра!' }
  ];

  const photos = [
    'img/ea17906f-c8d6-4443-87e5-141b24852ce8.jpg',
    'img/c7ad02ed-91e5-4b4c-b19d-6fb6aeec3439.jpg', 
    'img/c5578873-fb5c-4771-aa05-209446d7b2fd.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral via-sunny to-mint">
      {/* Фоновые элементы */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce" 
             style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce" 
             style={{animationDelay: '1s', animationDuration: '4s'}} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-bounce" 
             style={{animationDelay: '2s', animationDuration: '5s'}} />
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-primary/30 rounded-full animate-bounce" 
             style={{animationDelay: '0.5s', animationDuration: '3.5s'}} />
      </div>

      <div className="relative z-10">
        {/* Навигация */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full p-2 w-fit mx-auto">
            {[
              { id: 'main', label: 'Главная', icon: 'Home' },
              { id: 'program', label: 'Программа', icon: 'Calendar' },
              { id: 'location', label: 'Место', icon: 'MapPin' },
              { id: 'gallery', label: 'Фото', icon: 'Image' }
            ].map(item => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="rounded-full text-white hover:bg-white/20"
              >
                <Icon name={item.icon} className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* Основной контент */}
        <div className="container mx-auto px-4 pb-20">
          {/* Главная секция */}
          {activeSection === 'main' && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                  С Днём Рождения! 🎉
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 font-medium">
                  Алексей празднует 25 лет!
                </p>
              </div>

              {/* Обратный отсчет */}
              <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    До праздника осталось:
                  </h2>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[
                      { value: timeLeft.days, label: 'дней' },
                      { value: timeLeft.hours, label: 'часов' },
                      { value: timeLeft.minutes, label: 'минут' },
                      { value: timeLeft.seconds, label: 'секунд' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-4xl md:text-6xl font-bold text-white">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-white/80 font-medium mt-2">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Детали праздника */}
              <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Детали праздника</h3>
                  <div className="space-y-4 text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Calendar" className="w-5 h-5" />
                      <span className="text-lg">15 сентября 2025, 18:00</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="MapPin" className="w-5 h-5" />
                      <span className="text-lg">Ресторан "Счастливое место", ул. Праздничная, 25</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Users" className="w-5 h-5" />
                      <span className="text-lg">Дресс-код: яркие цвета приветствуются!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Программа */}
          {activeSection === 'program' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h2 className="text-5xl font-bold text-white text-center mb-8">
                Программа праздника
              </h2>
              <div className="grid gap-4">
                {program.map((item, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="bg-primary/80 text-white font-bold text-xl px-4 py-2 rounded-full min-w-[80px] text-center">
                        {item.time}
                      </div>
                      <div className="text-white text-lg font-medium flex-1">
                        {item.event}
                      </div>
                      <Icon name="Clock" className="w-6 h-6 text-white/60" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Место проведения */}
          {activeSection === 'location' && (
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold text-white mb-8">
                Место проведения
              </h2>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white">Ресторан "Счастливое место"</h3>
                    <div className="text-white/90 text-lg space-y-2">
                      <p>📍 ул. Праздничная, 25, Москва</p>
                      <p>📞 +7 (495) 123-45-67</p>
                      <p>🚇 5 минут от станции метро "Веселая"</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-6 text-white">
                      <h4 className="text-xl font-bold mb-4">Как добраться:</h4>
                      <ul className="text-left space-y-2">
                        <li>• На метро: станция "Веселая", выход №2</li>
                        <li>• На автомобиле: парковка доступна у ресторана</li>
                        <li>• На общественном транспорте: автобусы 123, 456</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Фотогалерея */}
          {activeSection === 'gallery' && (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
              <h2 className="text-5xl font-bold text-white text-center mb-8">
                Наши воспоминания
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={photo} 
                          alt={`Фото ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      <div className="p-4">
                        <p className="text-white/90 text-center font-medium">
                          {index === 0 && "Радостные моменты"}
                          {index === 1 && "Сладкие воспоминания"} 
                          {index === 2 && "Дружеские встречи"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Плавающая кнопка подтверждения */}
        <div className="fixed bottom-8 right-8">
          <Button size="lg" className="rounded-full shadow-2xl text-lg font-bold px-8 py-4 bg-primary hover:bg-primary/90">
            <Icon name="Heart" className="w-5 h-5 mr-2" />
            Буду на празднике!
          </Button>
        </div>
      </div>
    </div>
  );
}