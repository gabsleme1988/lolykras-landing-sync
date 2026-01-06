import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function TermsOfUse() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border/50 z-50 flex items-center">
        <div className="container max-w-[1400px] flex items-center justify-between">
          <h2 className="text-lg font-bold">Loly Krás</h2>
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-sm hover:text-foreground/80 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20">
        <div className="container max-w-[900px]">
          <article className="prose prose-invert max-w-none space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
              <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
              <p className="text-foreground/80">
                Ao acessar e usar este site, você aceita estar vinculado por estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não use este site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Uso Licenciado</h2>
              <p className="text-foreground/80">
                É concedida a você uma licença limitada, não exclusiva e revogável para acessar e usar este site para fins pessoais e não comerciais. Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte deste site sem permissão expressa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Isenção de Garantias</h2>
              <p className="text-foreground/80">
                Este site é fornecido "como está". A Loly Krás Consultoria não oferece garantias de qualquer tipo, expressas ou implícitas, quanto ao conteúdo, funcionalidade ou disponibilidade do site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Limitação de Responsabilidade</h2>
              <p className="text-foreground/80">
                Em nenhuma circunstância a Loly Krás Consultoria será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar este site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Conteúdo do Usuário</h2>
              <p className="text-foreground/80">
                Você é responsável por qualquer conteúdo que enviar através deste site. Ao enviar conteúdo, você concorda que ele não infringe direitos de terceiros e que é preciso e não prejudicial.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Modificações dos Termos</h2>
              <p className="text-foreground/80">
                A Loly Krás Consultoria se reserva o direito de modificar estes Termos de Uso a qualquer momento. As mudanças entrarão em vigor imediatamente após a publicação no site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Lei Aplicável</h2>
              <p className="text-foreground/80">
                Estes Termos de Uso são regidos pelas leis do Brasil e você concorda em se submeter à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Contato</h2>
              <p className="text-foreground/80">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <p className="text-foreground/80">
                Email: loly@lolykras.com<br />
                WhatsApp: +55 51 99505-2775
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
