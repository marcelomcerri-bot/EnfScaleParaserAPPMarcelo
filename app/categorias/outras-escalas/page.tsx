import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, ChevronRight, Users, Baby, Stethoscope, ArrowLeft, Brain, Scale, Activity } from "lucide-react"
import Link from "next/link"

export default function OutrasEscalasEspecializadasPage() {
  const specializedScales = [
    {
      id: "aldrete",
      name: "Escala de Aldrete Modificada",
      description:
        "Padrão-ouro para avaliação das condições de recuperação pós-anestésica, determinando quando o paciente pode ser transferido da Sala de Recuperação Pós-Anestésica (SRPA). Avalia atividade muscular, respiração, circulação, consciência e saturação de oxigênio.",
      population: "Pacientes pós-anestésicos",
      icon: Activity,
      href: "/escalas/aldrete",
    },
    {
      id: "braden-q",
      name: "Escala de Braden Q (Pediátrica)",
      description:
        "Versão pediátrica da Escala de Braden para avaliação do risco de desenvolvimento de úlceras por pressão em crianças e adolescentes, adaptada para as características específicas da população pediátrica, incluindo mobilidade, atividade, percepção sensorial, umidade, fricção e cisalhamento.",
      population: "Crianças e adolescentes",
      icon: Baby,
      href: "/escalas/braden-q",
    },
    {
      id: "glasgow-pediatrica",
      name: "Escala de Coma de Glasgow Pediátrica",
      description:
        "Versão adaptada da Escala de Glasgow para avaliação neurológica em crianças, considerando as particularidades do desenvolvimento neurológico infantil e permitindo avaliação adequada do nível de consciência em pacientes pediátricos.",
      population: "Crianças",
      icon: Brain,
      href: "/escalas/glasgow-pediatrica",
    },
    {
      id: "glasgow",
      name: "Escala de Coma de Glasgow (ECG)",
      description:
        "Escala neurológica mundialmente utilizada para avaliar o nível de consciência de pacientes, através da avaliação da resposta ocular, verbal e motora, sendo fundamental para monitoramento neurológico, prognóstico e comunicação entre equipes.",
      population: "Pacientes com alteração neurológica",
      icon: Brain,
      href: "/escalas/glasgow",
    },
    {
      id: "rass",
      name: "Escala de Sedação-Agitação de Richmond (RASS)",
      description:
        "Ferramenta para avaliação do nível de sedação e agitação em pacientes críticos, especialmente útil em unidades de terapia intensiva para monitoramento de pacientes sedados e orientação de ajustes na sedação.",
      population: "Pacientes de UTI",
      icon: Stethoscope,
      href: "/escalas/rass",
    },
    {
      id: "ramsay",
      name: "Escala de Ramsay",
      description:
        "Escala utilizada para avaliação do nível de sedação em pacientes críticos, permitindo monitoramento objetivo do grau de sedação e orientação de ajustes terapêuticos em unidades de terapia intensiva.",
      population: "Pacientes sedados",
      icon: Stethoscope,
      href: "/escalas/ramsay",
    },
    {
      id: "hunt-hess",
      name: "Escala de Hunt-Hess",
      description:
        "Escala utilizada para classificação da gravidade de hemorragia subaracnóidea, permitindo estratificação de risco, orientação terapêutica e determinação de prognóstico em pacientes com aneurismas cerebrais rotos.",
      population: "Pacientes com HSA",
      icon: Brain,
      href: "/escalas/hunt-hess",
    },
    {
      id: "pusap",
      name: "Escala PUSAP",
      description:
        "Escala especializada para avaliação de risco e prevenção de úlceras por pressão, fornecendo avaliação sistemática dos fatores de risco e orientação para implementação de medidas preventivas adequadas.",
      population: "Pacientes hospitalizados",
      icon: Scale,
      href: "/escalas/pusap",
    },
    {
      id: "behavioral-pain-scale",
      name: "Behavioral Pain Scale (BPS)",
      description:
        "Escala para avaliação de dor em pacientes críticos não comunicativos, baseada em indicadores comportamentais como expressão facial, movimentos dos membros superiores e adaptação à ventilação mecânica.",
      population: "Pacientes críticos não comunicativos",
      icon: Stethoscope,
      href: "/escalas/behavioral-pain-scale",
    },
    {
      id: "cpot",
      name: "Critical-Care Pain Observation Tool (CPOT)",
      description:
        "Ferramenta para avaliação de dor em pacientes de cuidados críticos que não conseguem se comunicar verbalmente, utilizando indicadores comportamentais e fisiológicos para identificação e quantificação da dor.",
      population: "Pacientes de UTI não comunicativos",
      icon: Stethoscope,
      href: "/escalas/cpot",
    },
    {
      id: "cries",
      name: "Escala CRIES",
      description:
        "Escala específica para avaliação de dor em recém-nascidos, utilizando indicadores como choro, necessidade de oxigênio, sinais vitais, expressão facial e padrão de sono para identificação de dor neonatal.",
      population: "Recém-nascidos",
      icon: Baby,
      href: "/escalas/cries",
    },
    {
      id: "faces-criancas",
      name: "Escala de Faces para Crianças",
      description:
        "Escala visual para avaliação de dor em crianças, utilizando expressões faciais que representam diferentes níveis de dor, permitindo que crianças comuniquem sua experiência dolorosa de forma compreensível.",
      population: "Crianças",
      icon: Baby,
      href: "/escalas/faces-criancas",
    },
    {
      id: "flacc",
      name: "Escala FLACC",
      description:
        "Ferramenta para avaliação de dor em crianças que não conseguem verbalizar adequadamente, baseada na observação de Face, Pernas, Atividade, Choro e Consolabilidade, especialmente útil em pediatria.",
      population: "Crianças não verbais",
      icon: Baby,
      href: "/escalas/flacc",
    },
  ]

  const ageGroups = [
    {
      title: "Recém-nascidos e Crianças",
      description: "Escalas especializadas para avaliação em população pediátrica e neonatal",
      scales: specializedScales.filter(
        (scale) => scale.population.includes("Recém-nascidos") || scale.population.includes("Crianças"),
      ),
      gradient: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
    },
    {
      title: "Adultos e Populações Específicas",
      description: "Instrumentos para avaliação em população adulta e grupos específicos",
      scales: specializedScales.filter(
        (scale) =>
          scale.population.includes("Adultos") ||
          scale.population.includes("Idosos") ||
          scale.population.includes("Puérperas") ||
          scale.population.includes("gestantes") ||
          scale.population.includes("pós-anestésicos"),
      ),
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Pacientes Cardiopatas",
      description: "Ferramentas especializadas para avaliação cardiovascular",
      scales: specializedScales.filter((scale) => scale.population.includes("cardiopatas")),
      gradient: "from-red-50 to-pink-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      title: "Pacientes Críticos e Neurológicos",
      description: "Escalas para cuidados intensivos e avaliação neurológica especializada",
      scales: specializedScales.filter(
        (scale) =>
          scale.population.includes("críticos") ||
          scale.population.includes("UTI") ||
          scale.population.includes("neurológica") ||
          scale.population.includes("AVC") ||
          scale.population.includes("pós-cirúrgicos"),
      ),
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4">
              <Link href="/categorias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Categorias
              </Link>
            </Button>
          </div>

          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="p-3 md:p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl border-2 border-slate-200">
                <Plus className="h-6 w-6 md:h-12 md:w-12 text-slate-600" />
              </div>
            </div>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 px-2">
              Outras Escalas Especializadas
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed px-4">
              Esta categoria abrange escalas especializadas utilizadas em contextos específicos da prática de
              enfermagem, incluindo avaliação nutricional, saúde mental materna, capacidade funcional, avaliação
              neonatal, recuperação pós-anestésica, avaliação neurológica e cuidados críticos. Estas ferramentas são
              fundamentais para uma abordagem multidimensional do cuidado, permitindo avaliações precisas e padronizadas
              em diferentes populações e contextos clínicos especializados.
            </p>
          </div>

          <div className="mb-12 md:mb-20">
            <h2 className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-12 animate-slide-up px-2">
              Escalas por População e Especialidade
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 max-w-6xl mx-auto px-2">
              {ageGroups.map((group, index) => (
                <Card
                  key={group.title}
                  className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 ${group.borderColor} bg-gradient-to-br ${group.gradient} animate-scale-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2 md:pb-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base md:text-xl">{group.title}</CardTitle>
                      <Badge variant="secondary" className="bg-white/80 text-gray-700 font-semibold text-xs">
                        {group.scales.length} escalas
                      </Badge>
                    </div>
                    <CardDescription className="text-xs md:text-base text-gray-600">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {group.scales.map((scale) => (
                        <div
                          key={scale.id}
                          className="flex items-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 group/item"
                        >
                          <scale.icon className="h-3 w-3 md:h-5 md:w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-xs md:text-sm group-hover/item:text-primary transition-colors">
                              {scale.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">{scale.population}</p>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity p-1"
                          >
                            <Link href={scale.href}>
                              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 md:mb-20">
            <h2 className="text-lg md:text-3xl font-bold text-center mb-6 md:mb-12 animate-slide-up px-2">
              Todas as Escalas Especializadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto px-2">
              {specializedScales.map((scale, index) => (
                <Card
                  key={scale.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-gray-50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-2 md:pb-6">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 md:p-3 bg-white/80 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <scale.icon className="h-4 w-4 md:h-6 md:w-6 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm md:text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {scale.name}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs bg-white/60">
                          {scale.population}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-4 text-gray-600">
                      {scale.description}
                    </CardDescription>
                    <Button
                      asChild
                      className="w-full shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm h-8 md:h-10"
                    >
                      <Link href={scale.href}>
                        Ver Detalhes Completos
                        <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-slide-up px-2">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-6 pb-6 md:pt-12 md:pb-12">
                <h3 className="text-lg md:text-3xl font-bold mb-3 md:mb-6">Importância das Escalas Especializadas</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-10 text-xs md:text-lg px-2">
                  As escalas especializadas representam ferramentas fundamentais para avaliações específicas em
                  diferentes contextos clínicos e populações. Cada instrumento foi desenvolvido e validado para atender
                  necessidades particulares da prática assistencial, fornecendo medidas objetivas e padronizadas para
                  condições ou situações que requerem avaliação especializada, contribuindo para a qualidade e segurança
                  do cuidado de enfermagem.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                      <Plus className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">Avaliação Especializada</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Instrumentos específicos para cada contexto clínico
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                      <Users className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">Múltiplas Populações</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Adaptadas para diferentes faixas etárias e condições
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                      <Stethoscope className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">Cuidado Integral</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Abordagem multidimensional e baseada em evidências
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
