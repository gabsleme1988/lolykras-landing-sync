import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const problems = [
  { 
    title: 'Não sei se estou tendo lucro ou prejuízo', 
    desc: 'Você trabalha muito, mas no final do mês o dinheiro não sobra.' 
  },
  { 
    title: 'Meus preços são no "achômetro"', 
    desc: 'Você olha a concorrência e tenta adivinhar, sem saber seus custos reais.' 
  },
  { 
    title: 'Meus pedidos estão uma bagunça', 
    desc: 'Caderno, WhatsApp, post-its... e às vezes você esquece encomendas.' 
  },
  { 
    title: 'E se a vigilância aparecer?', 
    desc: 'Você não tem certeza se está seguindo todas as normas sanitárias.' 
  }
];

export default function ProblemsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0">
              <Card className="border border-border/50 hover:border-border transition-all h-full">
                <CardContent className="p-8 space-y-3">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-border/50 hover:border-border hover:bg-card transition-all flex items-center justify-center"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {problems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === selectedIndex ? 'bg-foreground w-6' : 'bg-foreground/20'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-border/50 hover:border-border hover:bg-card transition-all flex items-center justify-center"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
