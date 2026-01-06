import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, DollarSign, Shield, ChefHat, ClipboardCheck, Check } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const packages = [
  {
    icon: Users,
    name: "Bowl de Relacionamento",
    price: "R$ 155",
    period: "por sessão",
    features: [
      "Reunião individual",
      "Análise de situação",
      "Orientação personalizada",
    ]
  },
  {
    icon: FileText,
    name: "Mix de Fichas",
    price: "R$ 550",
    period: "pacote completo",
    features: [
      "Fichas técnicas",
      "Cálculo de custos",
      "Precificação correta",
    ]
  },
  {
    icon: DollarSign,
    name: "Smoothie Financeiro",
    price: "R$ 3.000",
    period: "consultoria completa",
    features: [
      "Gestão de custos",
      "Fluxo de caixa",
      "Análise de rentabilidade",
    ]
  },
  {
    icon: Shield,
    name: "Cozinha Limpa",
    price: "R$ 4.000",
    period: "implementação completa",
    features: [
      "Adequação sanitária",
      "Checklist completo",
      "Acompanhamento",
      "Documentação técnica",
    ]
  },
  {
    icon: ChefHat,
    name: "Prato Principal",
    price: "R$ 2.300",
    period: "mentoria mensal",
    popular: true,
    features: [
      "4 sessões mensais",
      "Suporte via WhatsApp",
      "Fichas de custo",
      "Análise financeira",
    ]
  },
  {
    icon: ClipboardCheck,
    name: "Menu Completo",
    price: "R$ 2.797",
    period: "pacote premium",
    features: [
      "Consultoria completa",
      "Fichas técnicas ilimitadas",
      "Gestão financeira",
      "Acompanhamento 3 meses",
    ]
  },
];

export default function PackagesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isPopular = pkg.popular;
            
            return (
              <div key={idx} className="flex-[0_0_85%] min-w-0">
                <Card className={`border ${isPopular ? 'border-2 border-foreground/20' : 'border-border/50'} hover:border-border transition-all bg-card relative h-full`}>
                  {isPopular && (
                    <div className="absolute -top-3 left-8 bg-foreground text-background px-4 py-1 rounded-full text-xs font-medium">
                      POPULAR
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6 flex flex-col h-full">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 ${isPopular ? 'bg-foreground/10' : 'bg-foreground/5'} rounded-xl flex items-center justify-center`}>
                        <Icon className="text-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-2">{pkg.name}</h3>
                        <div className="text-4xl font-semibold mb-1">{pkg.price}</div>
                        <p className="text-sm text-muted-foreground">{pkg.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => window.open('https://wa.me/5551995052775?text=Olá! Tenho interesse no pacote ' + pkg.name, '_blank')}
                    >
                      Quero este pacote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-border/50 hover:border-border flex items-center justify-center transition-colors"
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex gap-2">
          {packages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === selectedIndex 
                  ? 'w-8 bg-foreground' 
                  : 'w-2 bg-foreground/20'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-border/50 hover:border-border flex items-center justify-center transition-colors"
          aria-label="Próximo"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
