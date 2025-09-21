import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Conteúdo Científico",
      description:
        "Todas as escalas são baseadas em evidências científicas e seguem diretrizes oficiais do COFEN, COREN e Ministério da Saúde.",
    },
    {
      icon: Users,
      title: "Para Todos os Profissionais",
      description:
        "Desenvolvido para estudantes de enfermagem, enfermeiros assistenciais, professores e pesquisadores.",
    },
    {
      icon: Award,
      title: "Referências Validadas",
      description:
        "Cada escala inclui referências oficiais, protocolos institucionais e literatura científica atualizada.",
    },
    {
      icon: Target,
      title: "Aplicação Prática",
      description: "Exemplos detalhados de evolução de enfermagem e aplicação clínica para cada escala apresentada.",
    },
  ]

  const objectives = [
    "Centralizar informações sobre escalas de avaliação de enfermagem utilizadas no Brasil",
    "Fornecer referências científicas e oficiais para cada instrumento de avaliação",
    "Apresentar exemplos práticos de aplicação clínica e registro em prontuário",
    "Facilitar o acesso a ferramentas de avaliação para profissionais e estudantes",
    "Promover a padronização e qualidade dos registros de enfermagem",
    "Contribuir para a melhoria da assistência de enfermagem baseada em evidências",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-4 md:py-8">
        <div className="container mx-auto px-3 md:px-4">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <div className="relative p-2 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                  <Image
                    src="/green-tree-logo.png"
                    alt="EnfScale Logo"
                    width={64}
                    height={64}
                    className="w-10 h-10 md:w-16 md:h-16 object-contain text-primary"
                    priority
                  />
                </div>
                <div className="absolute -inset-2 md:-inset-4 bg-accent/20 rounded-full blur-lg md:blur-xl"></div>
              </div>
            </div>
            <h1 className="text-xl md:text-4xl font-bold mb-3 md:mb-4">Sobre o EnfScale</h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Uma ferramenta completa de referência para escalas de avaliação de enfermagem, desenvolvida
              especificamente para profissionais de enfermagem no Brasil.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-8">Características do EnfScale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3 md:pb-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-primary/10 rounded-md md:rounded-lg">
                        <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <CardTitle className="text-sm md:text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs md:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Objectives Section */}
          <div className="mb-12 md:mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center pb-4 md:pb-6">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="h-5 w-5 md:h-8 md:w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-lg md:text-2xl">Objetivos do Projeto</CardTitle>
                <CardDescription className="text-xs md:text-base">
                  O EnfScale foi desenvolvido com objetivos claros e específicos para a comunidade de enfermagem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Authors Section */}
          <div className="mb-12 md:mb-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center pb-4 md:pb-6">
                <CardTitle className="text-lg md:text-2xl">Criadores do Projeto</CardTitle>
                <CardDescription className="text-xs md:text-base">
                  Conheça os acadêmicos de enfermagem por trás do EnfScale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-primary">Marcelo</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">Acadêmico de Enfermagem</p>
                      <div className="bg-muted/50 rounded-lg p-3 md:p-4 text-left">
                        <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                          Idealizador e desenvolvedor principal do EnfScale. Marcelo foi responsável por criar toda a
                          estrutura do site, organizar meticulosamente o conteúdo científico, desenvolver a interface e
                          garantir que cada escala fosse apresentada de forma clara e acessível.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Award className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-accent">Beatriz</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">Acadêmica de Enfermagem</p>
                      <div className="bg-muted/50 rounded-lg p-3 md:p-4 text-left">
                        <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                          Colaboradora fundamental na curadoria e validação das informações científicas. Beatriz
                          contribuiu significativamente com a pesquisa, organização e verificação de todas as escalas
                          apresentadas, garantindo a precisão e relevância clínica do conteúdo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 text-center">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 md:p-6">
                    <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                      O resultado desta colaboração é um site que combina funcionalidade, beleza e conteúdo científico
                      de qualidade. Cada detalhe foi pensado para proporcionar a melhor experiência aos profissionais de
                      enfermagem.
                      <span className="font-medium text-foreground"> O que você acha do resultado? </span>
                      Esperamos que o EnfScale seja uma ferramenta útil em sua prática profissional!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
