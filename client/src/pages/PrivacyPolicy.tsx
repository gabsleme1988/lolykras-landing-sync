import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
              <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introdução</h2>
              <p className="text-foreground/80">
                A Loly Krás Consultoria ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Informações que Coletamos</h2>
              <p className="text-foreground/80">
                Coletamos informações que você fornece voluntariamente ao preencher formulários em nosso site, como:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações sobre seu negócio</li>
                <li>Qualquer outra informação que você escolha compartilhar</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Como Usamos Suas Informações</h2>
              <p className="text-foreground/80">
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Entrar em contato com você sobre nossos serviços de consultoria</li>
                <li>Enviar informações sobre novas turmas e oportunidades</li>
                <li>Responder suas dúvidas e solicitações</li>
                <li>Melhorar nossos serviços</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Proteção de Dados</h2>
              <p className="text-foreground/80">
                Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Compartilhamento de Informações</h2>
              <p className="text-foreground/80">
                Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Seus Direitos</h2>
              <p className="text-foreground/80">
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail loly@lolykras.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Contato</h2>
              <p className="text-foreground/80">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
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
