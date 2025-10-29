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
              className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-64 h-64 opacity-0 animate-claw-1"
              viewBox="0 0 200 200" 
              fill="none"
            >
              <path 
                d="M150 80 Q140 85, 130 90 Q120 95, 110 100 Q100 105, 90 110 L80 115" 
                stroke="rgba(249, 115, 22, 0.8)" 
                strokeWidth="8" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 20px rgba(249, 115, 22, 0.9))"
              />
              <ellipse cx="160" cy="70" rx="25" ry="35" fill="rgba(249, 115, 22, 0.3)" transform="rotate(-30 160 70)" />
              <ellipse cx="165" cy="65" rx="20" ry="30" fill="rgba(249, 115, 22, 0.4)" transform="rotate(-25 165 65)" />
              <ellipse cx="170" cy="75" rx="22" ry="32" fill="rgba(249, 115, 22, 0.3)" transform="rotate(-35 170 75)" />
              <path d="M155 60 Q145 50, 150 40 L165 50 Z" fill="rgba(249, 115, 22, 0.6)" />
              <path d="M160 55 Q150 45, 155 35 L170 45 Z" fill="rgba(249, 115, 22, 0.6)" />
              <path d="M165 65 Q155 55, 160 45 L175 55 Z" fill="rgba(249, 115, 22, 0.6)" />
            </svg>
            
            <div className="absolute top-[30%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-1" style={{
              background: 'linear-gradient(90deg, rgba(249, 115, 22, 0) 0%, rgba(249, 115, 22, 0.3) 8%, rgba(249, 115, 22, 0.95) 15%, rgba(249, 115, 22, 1) 20%, rgba(249, 115, 22, 0.3) 98%, transparent 100%)',
              boxShadow: '0 0 60px rgba(249, 115, 22, 0.9), 0 0 120px rgba(249, 115, 22, 0.5)',
              clipPath: 'polygon(0% 20%, 2% 0%, 5% 30%, 8% 10%, 12% 40%, 15% 15%, 20% 45%, 25% 20%, 30% 50%, 40% 30%, 50% 55%, 60% 35%, 70% 60%, 80% 40%, 90% 65%, 95% 50%, 98% 70%, 100% 60%, 98% 80%, 95% 90%, 90% 75%, 80% 85%, 70% 80%, 60% 90%, 50% 85%, 40% 95%, 30% 90%, 20% 100%, 10% 90%, 5% 95%, 2% 85%, 0% 80%)'
            }} />
            
            <div className="absolute top-[30%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-1 opacity-40" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.8) 15%, transparent 100%)',
              filter: 'blur(12px)'
            }} />
            
            <div className="absolute top-[48%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-2" style={{
              background: 'linear-gradient(90deg, rgba(249, 115, 22, 0) 0%, rgba(249, 115, 22, 0.3) 8%, rgba(249, 115, 22, 0.95) 15%, rgba(249, 115, 22, 1) 20%, rgba(249, 115, 22, 0.3) 98%, transparent 100%)',
              boxShadow: '0 0 60px rgba(249, 115, 22, 0.9), 0 0 120px rgba(249, 115, 22, 0.5)',
              clipPath: 'polygon(0% 25%, 2% 5%, 5% 35%, 8% 15%, 12% 45%, 15% 20%, 20% 50%, 25% 25%, 30% 55%, 40% 35%, 50% 60%, 60% 40%, 70% 65%, 80% 45%, 90% 70%, 95% 55%, 98% 75%, 100% 65%, 98% 85%, 95% 95%, 90% 80%, 80% 90%, 70% 85%, 60% 95%, 50% 90%, 40% 100%, 30% 95%, 20% 100%, 10% 95%, 5% 100%, 2% 90%, 0% 85%)'
            }} />
            
            <div className="absolute top-[48%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-2 opacity-40" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.8) 15%, transparent 100%)',
              filter: 'blur(12px)'
            }} />
            
            <div className="absolute top-[66%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-3" style={{
              background: 'linear-gradient(90deg, rgba(249, 115, 22, 0) 0%, rgba(249, 115, 22, 0.3) 8%, rgba(249, 115, 22, 0.95) 15%, rgba(249, 115, 22, 1) 20%, rgba(249, 115, 22, 0.3) 98%, transparent 100%)',
              boxShadow: '0 0 60px rgba(249, 115, 22, 0.9), 0 0 120px rgba(249, 115, 22, 0.5)',
              clipPath: 'polygon(0% 15%, 2% 0%, 5% 25%, 8% 5%, 12% 35%, 15% 10%, 20% 40%, 25% 15%, 30% 45%, 40% 25%, 50% 50%, 60% 30%, 70% 55%, 80% 35%, 90% 60%, 95% 45%, 98% 65%, 100% 55%, 98% 75%, 95% 85%, 90% 70%, 80% 80%, 70% 75%, 60% 85%, 50% 80%, 40% 90%, 30% 85%, 20% 95%, 10% 85%, 5% 90%, 2% 80%, 0% 75%)'
            }} />
            
            <div className="absolute top-[66%] left-0 h-10 w-[95%] origin-left scale-x-0 animate-claw-3 opacity-40" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.8) 15%, transparent 100%)',
              filter: 'blur(12px)'
            }} />
          </div>
        </div>
      )}

      <div className={`opacity-0 animate-reveal ${!showIntro ? 'opacity-100' : ''}`}>
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          
          <div 
            className="absolute inset-0 opacity-20"
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

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="inline-block mb-8 px-6 py-2 bg-primary/20 border-2 border-primary clip-corner">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Сеть игровых клубов
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">KIBER</span><span className="text-foreground">PRIDE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Твоя территория побед. Мощные компьютеры, максимальный комфорт, 
              легендарная атмосфера.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg clip-corner shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all"
              >
                <Icon name="Zap" className="mr-2" size={24} />
                Забронировать место
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-foreground hover:bg-primary/10 font-bold px-8 py-6 text-lg clip-corner"
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