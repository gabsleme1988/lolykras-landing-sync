import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  link?: { text: string; href: string };
  answerAfterLink?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que exatamente a consultoria faz?",
    answer: "Analisa a rotina do negócio de alimentação, identifica gargalos em organização, custos, produção e higiene e cria um plano de ação com ferramentas práticas como fichas técnicas, controles, checklists e fluxos de trabalho."
  },
  {
    question: "Quais problemas a consultoria ajuda a resolver?",
    answer: "Falta de organização, desperdícios, precificação confusa, estoque bagunçado, falta de padrão nas receitas, medo de fiscalização sanitária e dificuldade de crescer com segurança."
  },
  {
    question: "Atende negócios que ainda estão começando ou só quem já está estruturado?",
    answer: "Atende tanto quem está começando e quer começar certo quanto quem já está operando, mas se sente no caos e precisa organizar a casa para crescer."
  },
  {
    question: "Quais são as etapas da consultoria?",
    answer: "1) Formulário Diagnóstico Online, 2) Reunião Inicial, 3) Análise Personalizada, 4) Definição do Plano de Ataque (planilhas/checklists) e 5) Implementação dos Processos."
  },
  {
    question: "Quanto tempo dura o processo?",
    answer: "Pontual: 1-2 semanas; Acompanhamento: 1-3 meses ou Processo Contínuo com consultoria longeva. Sempre com flexibilidade para encaixar na rotina do negócio."
  },
  {
    question: "A consultoria é presencial ou online?",
    answer: "O atendimento pode ser online (videochamada) para qualquer região e, em alguns casos, presencial em locais combinados, de acordo com a necessidade e viabilidade."
  },
  {
    question: "Que tipos de entregas eu recebo?",
    answer: "Você recebe materiais personalizados como fichas técnicas, controles de estoque, planilhas financeiras simples, checklists de higienização e rotinas organizadas do dia a dia, além de orientações claras de como usar tudo."
  },
  {
    question: "Quais resultados reais eu posso esperar?",
    answer: "Redução de desperdícios, rotinas organizadas, precificação clara e conformidade sanitária para crescer de forma segura e constante."
  },
  {
    question: "Qual a diferença da Loly Krás Consultoria para outras consultorias?",
    answer: "Une experiência prática de quem já esteve na operação com formação em gestão e organização, entregando soluções simples, acessíveis e totalmente adaptadas à realidade de micro e pequenos empreendedores."
  },
  {
    question: "Quanto custa e quais são as formas de pagamento?",
    answer: "Você encontra os valores dos pacotes ",
    link: { text: "aqui", href: "#pacotes" },
    answerAfterLink: " e pode pagar tanto à vista quanto parcelado, dependendo do pacote escolhido."
  },
  {
    question: "Como posso começar? Preciso de algum preparo?",
    answer: "Basta agendar uma reunião inicial e solicitar um orçamento. Não precisa preparo – a consultoria parte da sua realidade atual."
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24">
      <div className="container max-w-[1200px]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight font-bold">
            Perguntas <span className="italic">Frequentes</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Respondemos as dúvidas mais comuns sobre nossa consultoria
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-2xl overflow-hidden transition-all hover:border-border/80"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-foreground/5 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-foreground/5 border-t border-border/50">
                  <p className="text-foreground/80 leading-relaxed">
                    {item.answer}
                    {item.link && (
                      <>
                        <a
                          href={item.link.href}
                          className="font-semibold text-foreground hover:text-foreground/80 transition-colors"
                        >
                          {item.link.text}
                        </a>
                        {item.answerAfterLink}
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground/80 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/5551995052775"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
}
