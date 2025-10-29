import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-out-overlay">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 800" 
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              <g className="animate-claw-scratch">
                <path
                  d="M 250 200 Q 350 250, 450 300 Q 550 350, 750 450 Q 850 500, 1050 600"
                  stroke="none"
                  fill="url(#clawGradient1)"
                  className="animate-claw-1"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 99% 3%, 98% 1%, 97% 4%, 96% 2%, 95% 5%, 93% 3%, 90% 6%, 85% 4%, 80% 7%, 70% 5%, 60% 8%, 50% 6%, 40% 9%, 30% 7%, 20% 10%, 10% 8%, 5% 11%, 2% 9%, 0% 12%, 0% 88%, 2% 91%, 5% 89%, 10% 92%, 20% 90%, 30% 93%, 40% 91%, 50% 94%, 60% 92%, 70% 95%, 80% 93%, 85% 96%, 90% 94%, 93% 97%, 95% 95%, 96% 98%, 97% 96%, 98% 99%, 99% 97%, 100% 100%, 100% 0%)'
                  }}
                />
                <path
                  d="M 250 200 Q 350 250, 450 300 Q 550 350, 750 450 Q 850 500, 1050 600"
                  stroke="rgba(249, 115, 22, 0.9)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 25px rgba(249, 115, 22, 1)) drop-shadow(0 0 50px rgba(249, 115, 22, 0.6))"
                  className="animate-claw-1"
                />
                
                <path
                  d="M 280 260 Q 380 310, 480 360 Q 580 410, 780 510 Q 880 560, 1080 660"
                  stroke="none"
                  fill="url(#clawGradient2)"
                  className="animate-claw-2"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 99% 4%, 98% 2%, 97% 5%, 96% 3%, 95% 6%, 93% 4%, 90% 7%, 85% 5%, 80% 8%, 70% 6%, 60% 9%, 50% 7%, 40% 10%, 30% 8%, 20% 11%, 10% 9%, 5% 12%, 2% 10%, 0% 13%, 0% 87%, 2% 90%, 5% 88%, 10% 91%, 20% 89%, 30% 92%, 40% 90%, 50% 93%, 60% 91%, 70% 94%, 80% 92%, 85% 95%, 90% 93%, 93% 96%, 95% 94%, 96% 97%, 97% 95%, 98% 98%, 99% 96%, 100% 100%, 100% 0%)'
                  }}
                />
                <path
                  d="M 280 260 Q 380 310, 480 360 Q 580 410, 780 510 Q 880 560, 1080 660"
                  stroke="rgba(249, 115, 22, 0.9)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 25px rgba(249, 115, 22, 1)) drop-shadow(0 0 50px rgba(249, 115, 22, 0.6))"
                  className="animate-claw-2"
                />
                
                <path
                  d="M 310 320 Q 410 370, 510 420 Q 610 470, 810 570 Q 910 620, 1110 720"
                  stroke="none"
                  fill="url(#clawGradient3)"
                  className="animate-claw-3"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 99% 5%, 98% 3%, 97% 6%, 96% 4%, 95% 7%, 93% 5%, 90% 8%, 85% 6%, 80% 9%, 70% 7%, 60% 10%, 50% 8%, 40% 11%, 30% 9%, 20% 12%, 10% 10%, 5% 13%, 2% 11%, 0% 14%, 0% 86%, 2% 89%, 5% 87%, 10% 90%, 20% 88%, 30% 91%, 40% 89%, 50% 92%, 60% 90%, 70% 93%, 80% 91%, 85% 94%, 90% 92%, 93% 95%, 95% 93%, 96% 96%, 97% 94%, 98% 97%, 99% 95%, 100% 100%, 100% 0%)'
                  }}
                />
                <path
                  d="M 310 320 Q 410 370, 510 420 Q 610 470, 810 570 Q 910 620, 1110 720"
                  stroke="rgba(249, 115, 22, 0.9)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 25px rgba(249, 115, 22, 1)) drop-shadow(0 0 50px rgba(249, 115, 22, 0.6))"
                  className="animate-claw-3"
                />
              </g>
              
              <defs>
                <linearGradient id="clawGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                  <stop offset="20%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="80%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                </linearGradient>
                <linearGradient id="clawGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                  <stop offset="20%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="80%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                </linearGradient>
                <linearGradient id="clawGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                  <stop offset="20%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="80%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      <div className={`opacity-0 animate-reveal ${!showIntro ? 'opacity-100' : ''}`}>
        <section className="relative min-h-screen flex items-start justify-center px-4 overflow-hidden pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80)',
              filter: 'blur(8px) brightness(0.4)',
              transform: 'scale(1.1)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
          
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(249, 115, 22, 0.1) 10px,
                rgba(249, 115, 22, 0.1) 20px
              )`
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto text-center mt-12">
            <div className="inline-block mb-8 px-6 py-2 bg-primary/30 backdrop-blur-sm border-2 border-primary clip-corner">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Сеть игровых клубов
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight drop-shadow-[0_0_40px_rgba(249,115,22,0.8)]">
              <span className="text-white">KIBER</span><span className="text-primary">PRIDE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg">
              Твоя территория побед. Мощные компьютеры, максимальный комфорт, 
              легендарная атмосфера.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg clip-corner shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all backdrop-blur-sm"
              >
                <Icon name="Zap" className="mr-2" size={24} />
                Забронировать место
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-white hover:bg-primary/20 font-bold px-8 py-6 text-lg clip-corner backdrop-blur-sm"
              >
                <Icon name="Gift" className="mr-2" size={24} />
                Получить бонусы
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
              С чего <span className="text-primary">начать?</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'MapPin',
                  title: 'Найди свой клуб',
                  description: 'Выбери ближайший игровой клуб на карте. Все наши точки оборудованы по последнему слову техники.'
                },
                {
                  icon: 'UserPlus',
                  title: 'Зарегистрируйся',
                  description: 'Создай аккаунт в приложении за 2 минуты. Получи приветственные бонусы сразу после регистрации.'
                },
                {
                  icon: 'Gamepad2',
                  title: 'Начни играть',
                  description: 'Забронируй компьютер, приходи в клуб и погрузись в игру. Твой прогресс автоматически сохранится.'
                }
              ].map((item, idx) => (
                <Card 
                  key={idx}
                  className="p-8 bg-card border-2 border-border hover:border-primary transition-all clip-corner group hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-card/50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
              Бонусная <span className="text-primary">программа</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary clip-corner">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Percent" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Перенос скидок</h3>
                    <p className="text-muted-foreground">
                      Есть карта другого ПК клуба? Перенеси свою скидку к нам! 
                      Мы ценим твою лояльность.
                    </p>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 clip-corner border border-primary/30">
                  <p className="text-sm text-muted-foreground">
                    Покажи карту администратору при первом визите
                  </p>
                </div>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary clip-corner">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Calendar" size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Еженедельные бонусы</h3>
                    <p className="text-muted-foreground">
                      Каждую неделю в приложении — новые акции, турниры и 
                      эксклюзивные предложения только для наших игроков.
                    </p>
                  </div>
                </div>
                
                <div className="bg-background/50 p-4 clip-corner border border-secondary/30">
                  <p className="text-sm text-muted-foreground">
                    Скачай приложение KIBERPRIDE в App Store или Google Play
                  </p>
                </div>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent clip-corner md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" size={24} className="text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Накопительная система</h3>
                    <p className="text-muted-foreground mb-4">
                      Играй больше — получай больше! За каждый час игры начисляются баллы, 
                      которые можно обменять на бесплатное время, мерч или участие в турнирах.
                    </p>
                    <div className="flex gap-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">1 час = 10 баллов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-sm">100 баллов = 1 час бесплатно</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm">500 баллов = эксклюзивный мерч</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Готов к <span className="text-primary">игре?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Присоединяйся к тысячам игроков, которые уже выбрали KIBERPRIDE
            </p>

            <div className="flex gap-6 justify-center items-center flex-wrap">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-xl clip-corner shadow-[0_0_30px_rgba(249,115,22,0.5)]"
              >
                <Icon name="Smartphone" className="mr-2" size={28} />
                Скачать приложение
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 clip-corner"
                >
                  <Icon name="MessageCircle" size={24} />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 clip-corner"
                >
                  <Icon name="Instagram" size={24} />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 clip-corner"
                >
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 bg-card/30 border-t-2 border-border">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-4xl font-bold mb-4">
              <span className="text-white">KIBER</span><span className="text-foreground">PRIDE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 KIBERPRIDE. Сеть игровых клубов. Все права защищены.
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        .clip-corner {
          clip-path: polygon(
            0 8px,
            8px 0,
            calc(100% - 8px) 0,
            100% 8px,
            100% calc(100% - 8px),
            calc(100% - 8px) 100%,
            8px 100%,
            0 calc(100% - 8px)
          );
        }
      `}</style>
    </div>
  );
};

export default Index;