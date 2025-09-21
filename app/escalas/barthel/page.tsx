import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, Info, Target } from "lucide-react"
import Link from "next/link"

export default function BarthelPage() {
  const barthelItems = [
    {
      activity: "Alimentação",
      scores: [
        {
          points: 10,
          description: "Independente. Capaz de usar qualquer instrumento necessário, come em tempo razoável",
        },
        { points: 5, description: "Necessita ajuda (cortar carne, passar manteiga, etc.)" },
        { points: 0, description: "Dependente. Necessita ser alimentado" },
      ],
    },
    {
      activity: "Banho",
      scores: [
        { points: 5, description: "Independente. Entra e sai do banho sozinho e se lava" },
        { points: 0, description: "Dependente. Necessita de algum tipo de ajuda ou supervisão" },
      ],
    },
    {
      activity: "Cuidados pessoais",
      scores: [
        { points: 5, description: "Independente. Lava o rosto, penteia cabelo, escova dentes, faz barba" },
        { points: 0, description: "Dependente. Necessita de alguma ajuda" },
      ],
    },
    {
      activity: "Vestir-se",
      scores: [
        { points: 10, description: "Independente. Veste-se, desveste-se, abotoa, amarra sapatos" },
        { points: 5, description: "Necessita ajuda. Faz pelo menos metade das tarefas em tempo razoável" },
        { points: 0, description: "Dependente. Necessita de ajuda para vestir-se" },
      ],
    },
    {
      activity: "Intestino",
      scores: [
        { points: 10, description: "Continente. Nenhum episódio de incontinência" },
        { points: 5, description: "Episódio ocasional de incontinência ou necessita ajuda para enemas/supositórios" },
        { points: 0, description: "Incontinente ou necessita enemas" },
      ],
    },
    {
      activity: "Bexiga",
      scores: [
        { points: 10, description: "Continente. Nenhum episódio de incontinência" },
        {
          points: 5,
          description: "Episódio ocasional de incontinência (máximo 1x/24h) ou necessita ajuda para cuidar da sonda",
        },
        { points: 0, description: "Incontinente ou sonda vesical" },
      ],
    },
    {
      activity: "Uso do banheiro",
      scores: [
        { points: 10, description: "Independente. Entra e sai sozinho, remove e veste roupas, limpa-se" },
        { points: 5, description: "Necessita ajuda. Consegue se equilibrar, limpar-se e vestir roupas" },
        { points: 0, description: "Dependente. Necessita ser carregado" },
      ],
    },
    {
      activity: "Transferência (cama-cadeira)",
      scores: [
        { points: 15, description: "Independente. Não necessita ajuda para sentar ou levantar de uma cadeira" },
        { points: 10, description: "Mínima ajuda. Inclui supervisão verbal ou pequena ajuda física" },
        { points: 5, description: "Grande ajuda. Capaz de sentar, mas necessita muita ajuda para transferir" },
        { points: 0, description: "Dependente. Necessita ser carregado por duas pessoas" },
      ],
    },
    {
      activity: "Mobilidade",
      scores: [
        { points: 15, description: "Independente. Caminha pelo menos 50 metros sozinho ou equivalente" },
        { points: 10, description: "Caminha com ajuda. Caminha 50 metros com ajuda ou supervisão de uma pessoa" },
        { points: 5, description: "Independente em cadeira de rodas. Propele cadeira por pelo menos 50 metros" },
        { points: 0, description: "Dependente. Se deambula, necessita ajuda de duas pessoas" },
      ],
    },
    {
      activity: "Escadas",
      scores: [
        { points: 10, description: "Independente. Capaz de subir e descer escadas carregando objetos de apoio" },
        { points: 5, description: "Necessita ajuda. Supervisão verbal, ajuda física ou carregando objetos de apoio" },
        { points: 0, description: "Dependente. Incapaz de subir escadas" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-4 md:py-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="mb-4 md:mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4 text-xs md:text-sm h-8 md:h-10">
              <Link href="/categorias/funcional">
                <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                Voltar às Escalas Funcionais
              </Link>
            </Button>
          </div>

          <div className="text-center mb-6 md:mb-8 lg:mb-16 animate-fade-in">
            <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
              <div className="p-2 md:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
                <Activity className="h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 lg:mb-6 px-2">
              Índice de Barthel
            </h1>
            <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3 mb-2 md:mb-4 lg:mb-6 px-2">
              <Badge variant="secondary" className="text-xs">
                Avaliação Funcional
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Independência
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Reabilitação
              </Badge>
            </div>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              O Índice de Barthel é uma escala amplamente utilizada para avaliar a independência funcional em dez
              atividades básicas de vida diária, fornecendo uma medida quantitativa do grau de dependência do paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-16">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2 md:pb-6">
                <CardTitle className="text-base md:text-lg lg:text-xl">Atividades Avaliadas</CardTitle>
                <CardDescription className="text-xs md:text-sm lg:text-base">
                  Dez atividades básicas com pontuação específica para cada nível de independência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  {barthelItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-2 md:p-3 lg:p-4">
                      <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2 lg:mb-3 text-blue-700">
                        {item.activity}
                      </h4>
                      <div className="space-y-1 md:space-y-2">
                        {item.scores.map((score, scoreIndex) => (
                          <div
                            key={scoreIndex}
                            className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="bg-blue-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex items-center justify-center text-xs font-bold shrink-0">
                              {score.points}
                            </div>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{score.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <Card>
                <CardHeader className="pb-2 md:pb-6">
                  <CardTitle className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
                    <Target className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-blue-600" />
                    Interpretação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    <div className="bg-green-50 p-2 md:p-3 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800 mb-1 text-xs md:text-sm lg:text-base">
                        90-100 pontos
                      </div>
                      <div className="text-xs text-green-700">Independente</div>
                    </div>
                    <div className="bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-800 mb-1 text-xs md:text-sm lg:text-base">
                        60-89 pontos
                      </div>
                      <div className="text-xs text-yellow-700">Dependência leve</div>
                    </div>
                    <div className="bg-orange-50 p-2 md:p-3 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-800 mb-1 text-xs md:text-sm lg:text-base">
                        40-59 pontos
                      </div>
                      <div className="text-xs text-orange-700">Dependência moderada</div>
                    </div>
                    <div className="bg-red-50 p-2 md:p-3 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-800 mb-1 text-xs md:text-sm lg:text-base">
                        20-39 pontos
                      </div>
                      <div className="text-xs text-red-700">Dependência severa</div>
                    </div>
                    <div className="bg-red-100 p-2 md:p-3 rounded-lg border border-red-300">
                      <div className="font-semibold text-red-900 mb-1 text-xs md:text-sm lg:text-base">0-19 pontos</div>
                      <div className="text-xs text-red-800">Dependência total</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 md:pb-6">
                  <CardTitle className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
                    <Info className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-purple-600" />
                    Informações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3 text-xs">
                    <div>
                      <span className="font-medium">Tempo de aplicação:</span>
                      <p className="text-muted-foreground">10-15 minutos</p>
                    </div>
                    <div>
                      <span className="font-medium">Pontuação total:</span>
                      <p className="text-muted-foreground">0-100 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Método:</span>
                      <p className="text-muted-foreground">Observação e entrevista</p>
                    </div>
                    <div>
                      <span className="font-medium">Aplicador:</span>
                      <p className="text-muted-foreground">Profissionais de saúde</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-6 md:mb-8 lg:mb-16">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg lg:text-xl">Exemplo de Evolução de Enfermagem</CardTitle>
              <CardDescription className="text-xs md:text-sm lg:text-base">
                Documentação adequada da avaliação funcional utilizando o Índice de Barthel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-3 md:p-4 lg:p-6 rounded-lg border">
                <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                  <strong>Avaliação Funcional - Índice de Barthel:</strong>
                  <br />
                  Paciente masculino, 68 anos, em reabilitação pós-AVC. Avaliação funcional através do Índice de Barthel
                  apresentou pontuação total de 65 pontos, indicando dependência leve. Detalhamento: alimentação (10),
                  banho (0), cuidados pessoais (5), vestir-se (5), intestino (10), bexiga (10), uso do banheiro (5),
                  transferência (10), mobilidade (10), escadas (0). Principais limitações identificadas: necessita
                  supervisão para banho e é incapaz de subir escadas. Implementado plano de reabilitação com
                  fisioterapia para fortalecimento de membros inferiores e treino de marcha em escadas. Terapia
                  ocupacional para treino de atividades de vida diária. Reavaliação programada em 15 dias.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-4 pb-4 md:pt-8 md:pb-8">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Aplicação na Prática Clínica</h3>
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm lg:text-base">
                  O Índice de Barthel é especialmente útil em programas de reabilitação, permitindo monitorar o
                  progresso funcional e ajustar intervenções terapêuticas. Sua pontuação detalhada facilita a
                  identificação de áreas específicas que necessitam intervenção.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
