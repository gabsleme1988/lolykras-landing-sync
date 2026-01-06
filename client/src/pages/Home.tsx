import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, ClipboardCheck, DollarSign, FileText, Shield, Users, Phone, Mail, Instagram, Check, ArrowRight, Menu, X, Facebook } from "lucide-react";
import ProblemsCarousel from "@/components/ProblemsCarousel";
import PackagesCarousel from "@/components/PackagesCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contato');
  };

  const packages = [
    {
      icon: ChefHat,
      title: 'Bowl de Relacionamento',
      subtitle: 'Para começar a organizar suas encomendas, seus clientes e pedidos!',
      features: ['Pacote de Gestão de Clientes e Pedidos', 'Reunião de Alinhamento', 'Suporte via Whatsapp em horário comercial', 'Formulários de Cadastro', 'Desenvolvimento de Sistema Básico', 'Material Personalizado e Explicativo', 'Até 2 encontros online'],
      price: '155',
      popular: false
    },
    {
      icon: Users,
      title: 'Mix de Fichas',
      subtitle: 'Chega de ficar perdido(a) na hora de precificar!',
      features: ['Pacote de Fichas Técnicas', 'Reuniões de Alinhamento', 'Suporte via Whatsapp em horário comercial', 'Formulários de Cadastro', 'Definição de Cardápio', 'Elaboração e Revisão de Fichas Técnicas', 'Cálculo de Custos', 'Precificação e Margens de Contribuição', 'Controle de Insumos e Fornecedores', 'Padronização de Receitas', 'Material Personalizado', 'Duração: 1 mês de trabalho com encontros online'],
      price: '550',
      popular: false
    },
    {
      icon: DollarSign,
      title: 'Couvert',
      subtitle: 'Uma degustação do que pode ser feito e as possibilidades de planos futuros.',
      features: ['Diagnóstico', 'Análise do Empreendimento', 'Plano de ações futuras', 'Duração: 1 mês de trabalho com encontros online'],
      price: '987',
      popular: false
    },
    {
      icon: FileText,
      title: 'Entrada',
      subtitle: 'Ideal para começar a se estruturar e buscar uma organização mínima.',
      features: ['Diagnóstico', 'Análise do Empreendimento', '100 Fichas Técnicas', 'Gestão de Clientes e Pedidos', 'Duração: 3 meses de trabalho', 'Até 4 encontros online por semana'],
      price: '1.300',
      popular: false
    },
    {
      icon: Shield,
      title: 'Prato Principal',
      subtitle: 'Apoio completo e abrangente para que o seu negócio tenha a liberdade de crescer e expandir!',
      features: ['Diagnóstico', 'Análise do Empreendimento', '100 Fichas Técnicas', 'Gestão de Clientes e Pedidos', 'Fluxo de Caixa', 'Duração: 3 meses de trabalho', 'Até 4 encontros online por semana'],
      price: '2.300',
      popular: false
    },
    {
      icon: ChefHat,
      title: 'Menu Completo',
      subtitle: 'Consultoria completa para você ter tranquilidade no dia a dia e focar no seu talento.',
      features: ['Consultoria completa com alimentação e atualização de fichas técnicas', 'Gestão de clientes e pedidos', 'Organização e atualização de cardápio', 'Controle de insumos', 'Orientação estratégica', 'Fluxo de caixa', 'Recomendações recorrentes', 'Tranquilidade no dia a dia da empresa para você focar no seu talento!', 'Duração: contrato longevo de 6 meses a 1 ano de trabalho', 'Até 3 encontros online por semana'],
      price: '2.797',
      popular: true
    },
    {
      icon: DollarSign,
      title: 'Smoothie Financeiro',
      subtitle: 'Vamos organizar o fruto do seu trabalho e manter a saudabilidade do seu negócio?',
      features: ['Pacote Fluxo de Caixa', 'Reuniões de Alinhamento', 'Suporte via Whatsapp em horário comercial', 'Material Personalizado e Explicativo', 'Controle e Análise Mensal', 'Duração: 1 mês de trabalho', 'Até 4 encontros online por semana'],
      price: '3.000',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cozinha Limpa',
      subtitle: 'Para garantir segurança para você e para os seus clientes!',
      features: ['Pacote de Conformidades Sanitárias', 'Reuniões de Alinhamento', 'Suporte via Whatsapp em horário comercial', 'Material Personalizado e Explicativo', 'Checklist de Conformidade', 'Diagnóstico Sanitário', 'Orientações e Ajustes Sanitários', 'Duração: 1 mês de trabalho', 'Até 2 encontros online por semana'],
      price: '4.000',
      popular: false
    },
    {
      icon: ChefHat,
      title: 'Sobremesa',
      subtitle: 'Para aumentar a operação e abrir um ponto de venda físico, com acompanhamento presencial.',
      features: ['Diagnóstico', 'Análise do Empreendimento', '100 Fichas Técnicas', 'Gestão de Clientes e Pedidos', 'Fluxo de Caixa', 'Conformidade Sanitária', 'Duração: 3 meses de trabalho', '1 encontro presencial por semana', 'Até 2 encontros online por semana'],
      price: '9.000',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container max-w-[1400px]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              >
                Loly Krás
              </button>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('pacotes')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pacotes
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={scrollToContact}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </button>
              <Button 
                size="sm"
                onClick={() => window.open('https://calendly.com/loly-lolykras/30min', '_blank')}
                className="rounded-full bg-foreground hover:bg-foreground/90"
              >
                Agendar
              </Button>
            </nav>

            {/* Menu Mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-3 border-t border-border/20 pt-4">
              <button 
                onClick={() => scrollToSection('pacotes')}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Pacotes
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                FAQ
              </button>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contato
              </button>
              <Button 
                size="sm"
                onClick={() => window.open('https://calendly.com/loly-lolykras/30min', '_blank')}
                className="w-full rounded-full bg-foreground hover:bg-foreground/90"
              >
                Agendar
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Full width com imagem de fundo */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-loly-notebook.jpg" 
            alt="Loly Krás com notebook"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>

        {/* Content */}
        <div className="container max-w-[1400px] relative z-10 py-20">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-[clamp(3.5rem,8vw,5.5rem)] leading-[1.1] tracking-tight">
              Você produz,{" "}
              <span className="italic">eu cuido</span>{" "}
              da gestão
            </h1>
            
            <p className="text-2xl md:text-3xl italic font-medium text-foreground/90 mb-6 max-w-2xl">
              Da receita à gestão: tudo sob controle.
            </p>
            
            <p className="text-xl leading-relaxed text-foreground/80 max-w-xl">
              Consultoria especializada para pequenos empreendedores gastronômicos que querem ter controle real do negócio
            </p>
            
            <Button 
              size="lg" 
              onClick={() => window.open('https://calendly.com/loly-lolykras/30min', '_blank')}
              className="h-14 px-8 text-base rounded-full bg-foreground hover:bg-foreground/90"
            >
              Agende sua reunião gratuita
              <ArrowRight className="ml-2" size={18} />
            </Button>


            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-6">Ideal para:</p>
              <div className="flex flex-wrap gap-4">
                {['Confeiteiros', 'Doceiros', 'Cozinheiros', 'Food Trucks', 'Food Service', 'Padarias', 'Marmitarias', 'Salgadeiros'].map((item) => (
                  <span key={item} className="text-sm px-5 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fila de Consultoria Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-foreground/5 via-foreground/3 to-foreground/5 border-y border-border/50">
        <div className="container max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-bold">
                Entre na fila da consultoria
              </h2>
              <p className="text-lg text-foreground/80">
                As vagas são limitadas. Cadastre-se para ser avisado(a) quando abrirem novos horários disponíveis.
              </p>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                onClick={() => window.open('https://docs.google.com/forms/d/19jSdzEuSzCJJarPwkT-GzDeJb3Ay5I7kjBFwP1ykNf4/edit', '_blank')}
                className="h-14 px-8 text-base rounded-full bg-foreground hover:bg-foreground/90 w-full md:w-auto"
              >
                Entrar na fila da consultoria
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <p className="text-sm text-muted-foreground italic">
                Seus dados são usados apenas para contato sobre a consultoria. Nada de spam, nem compartilhamento com terceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-[1200px]">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] text-center mb-16 leading-tight max-w-4xl mx-auto">
            Essa é a{" "}
            <span className="italic">sua realidade?</span>
          </h2>

          <ProblemsCarousel />
        </div>
      </section>

      {/* Solucao Section */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container max-w-[1200px]">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] text-center mb-16 leading-tight">
            Como iremos{" "}
            <span className="italic">trabalhar</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {[
                { icon: DollarSign, title: 'Precificação Correta', desc: 'Calcule seus custos reais e defina preços que garantem lucro' },
                { icon: FileText, title: 'Fichas Técnicas', desc: 'Padronize suas receitas e mantenha a qualidade consistente' },
                { icon: ClipboardCheck, title: 'Gestão Organizada', desc: 'Controle pedidos, clientes e produção em um só lugar' },
                { icon: Shield, title: 'Conformidade', desc: 'Atenda as exigências sanitárias e legais do seu negócio' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors">
                    <item.icon className="text-foreground" size={28} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planilhas Gratuitas Section */}
      <section id="planilhas" className="py-20 lg:py-24">
        <div className="container max-w-[1400px]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight">
              Planilhas gratuitas para te ajudar a começar
            </h2>
            <p className="text-xl text-muted-foreground">
              Baixe modelos práticos para organizar custos, pedidos, gastos e conformidade sanitária.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: 'Planilha de Custos',
                desc: 'Organize o custo das suas receitas e entenda suas margens',
                link: 'https://drive.google.com/drive/folders/1CfmxHAauiU0ksRf-Q0RPjst6QJjaadek?usp=drive_link'
              },
              {
                icon: FileText,
                title: 'Planilha de Pedidos',
                desc: 'Controle pedidos, clientes e entregas em um só lugar',
                link: 'https://drive.google.com/drive/folders/1CbYtlclGas3IxAT1CkPuYeS0yFzzV27P?usp=drive_link'
              },
              {
                icon: FileText,
                title: 'Planilha de Gastos',
                desc: 'Acompanhe os gastos do dia a dia do negócio',
                link: 'https://drive.google.com/drive/folders/1LyxTmqOIu4f2Gj4sybkiaZ4DIMb0nqC1?usp=drive_link'
              },
              {
                icon: FileText,
                title: 'Planilha de Conformidade Sanitária',
                desc: 'Liste itens de conformidade e acompanhe o que precisa ser ajustado',
                link: 'https://drive.google.com/drive/folders/1xaxjywQrpVsmi1lgUipd7LczMRPYNivG?usp=drive_link'
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card border border-border/30 rounded-2xl hover:border-border/60 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <item.icon className="text-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <div className="inline-flex items-center text-sm font-medium text-foreground group-hover:gap-2 transition-all">
                  Acessar planilha
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section id="pacotes" className="py-20 lg:py-24 bg-muted/20">
        <div className="container max-w-[1400px]">
          <div className="text-center mb-4 space-y-2">
            <p className="text-sm font-medium italic text-foreground/70">"Da Receita a Gestao: Tudo Sob Controle"</p>
          </div>
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight">
              Pacotes que cabem{" "}
              <span className="italic">no seu bolso</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A partir de R$ 155 por mês
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`border ${pkg.popular ? 'border-foreground/30 bg-card/80' : 'border-border/50'} hover:border-foreground/50 transition-all h-full`}>
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                      <pkg.icon className="text-foreground" size={24} />
                    </div>
                    {pkg.popular && (
                      <span className="text-xs px-3 py-1 bg-foreground/10 rounded-full font-medium">Mais Popular</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground italic">{pkg.subtitle}</p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="text-foreground mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                      <p className="text-3xl font-semibold">R$ {pkg.price}</p>
                    </div>
                    <Button 
                      size="lg"
                      onClick={() => window.open('https://wa.me/5551995052775', '_blank')}
                      className="w-full rounded-full bg-foreground hover:bg-foreground/90"
                    >
                      Contratar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 lg:py-24">
        <div className="container max-w-[1200px]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight">
              Vamos nos{" "}
              <span className="italic">conhecer</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sua especialista em gestão gastronômica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="/loly-profile.jpg" 
                  alt="Loly Kras"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-foreground/5 rounded-full blur-3xl" />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold">Oi, eu sou a Loly!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou apaixonada por gastronomia e gestão. Eu sei como é difícil empreender sozinho(a) nesse mercado: já vi muita gente talentosa desistir por não conseguir organizar o lado financeiro e operacional do negócio.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Foi pensando nisso que criei a Loly Krás Consultoria.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                {[
                  'Metodologia personalizada para cada tipo de negócio',
                  'Mais de 5 anos de experiência em gastronomia',
                  'Acompanhamento prático e humanizado',
                  'Resultados reais e mensuráveis'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-foreground flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contato Section */}
      <section id="contato" className="py-20 lg:py-24 bg-muted/20">
        <div className="container max-w-[1200px]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight">
              Pronto(a) para dar o{" "}
              <span className="italic">próximo passo?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Vamos conversar sem compromisso. A primeira reunião é gratuita.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <Button 
              size="lg"
              onClick={() => window.open('https://calendly.com/loly-lolykras/30min', '_blank')}
              className="w-full h-14 text-base rounded-full bg-foreground hover:bg-foreground/90"
            >
              Agendar reunião gratuita
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://wa.me/5551995052775"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card border border-border/50 rounded-2xl hover:border-border/80 transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium">WhatsApp</p>
                <p className="text-xs text-muted-foreground mt-1">+55 51 99505-2775</p>
              </a>

              <a 
                href="mailto:loly@lolykras.com"
                className="p-4 bg-card border border-border/50 rounded-2xl hover:border-border/80 transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-foreground/10 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground mt-1">loly@lolykras.com</p>
              </a>

              <a 
                href="https://www.instagram.com/lolykras_consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card border border-border/50 rounded-2xl hover:border-border/80 transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-foreground/10 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </div>
                <p className="text-sm font-medium">Instagram</p>
                <p className="text-xs text-muted-foreground mt-1">@lolykras_consultoria</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/10 border-t border-foreground/20">
        <div className="container max-w-[1400px] py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Loly Krás</h3>
              <p className="text-sm text-muted-foreground">Consultoria especializada para empreendedores gastronômicos</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Navegação</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('pacotes')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pacotes</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</button></li>
                <li><button onClick={scrollToContact} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Contato</h4>
              <ul className="space-y-2">
                <li><a href="https://wa.me/5551995052775" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Phone size={14} /> +55 51 99505-2775</a></li>
                <li><a href="mailto:loly@lolykras.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Mail size={14} /> Email</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Redes Sociais</h4>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/lolykras_consultoria" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61583660369399" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Facebook size={14} /> Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
              <p className="text-center text-xs text-muted-foreground">© 2025 Loly Krás Consultoria. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
                <a href="/terms-of-use" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
