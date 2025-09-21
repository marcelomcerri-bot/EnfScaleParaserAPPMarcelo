import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, Info, Users, Target, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function MIFPage() {
  const mifDomains = [
    {
      domain: "Autocuidado",
      items: [
        "Alimentação",
        "Cuidados pessoais",
        "Banho",
        "Vestir metade superior do corpo",
        "Vestir metade inferior do corpo",
        "Uso do banheiro",
      ],
    },
    {
      domain: "Controle de Esfíncteres",
      items: ["Controle da bexiga", "Controle do intestino"],
    },
    {
      domain: "Transferências",
      items: [
        "Transferência leito/cadeira/cadeira de rodas",
        "Transferência para o banheiro",
        "Transferência para banheira/chuveiro",
      ],
    },
    {
      domain: "Locomoção",
      items: ["Marcha/cadeira de rodas", "Escadas"],
    },
    {
      domain: "Comunicação",
      items: ["Compreensão", "Expressão"],
    },
    {
      domain: "Cognição Social",
      items: ["Interação social", "Resolução de problemas", "Memória"],
    },
  ]

  const scoreLevels = [
    {
      level: 7,
      description: "Independência completa",
      detail:
        "Todas as tarefas são realizadas de forma segura, sem modificação, dispositivos auxiliares ou ajuda, dentro de tempo razoável",
    },
    {
      level: 6,
      description: "Independência modificada",
      detail:
        "Uma ou mais das seguintes pode ser verdadeira: dispositivo auxiliar é usado, leva mais que tempo razoável, há considerações de segurança",
    },
    {
      level: 5,
      description: "Supervisão ou preparação",
      detail:
        "Sujeito requer supervisão (ex: permanência, orientação ou encorajamento) ou preparação (ex: aplicação de órtese)",
    },
    { level: 4, description: "Ajuda mínima", detail: "Sujeito realiza ≥75% da tarefa" },
    { level: 3, description: "Ajuda moderada", detail: "Sujeito realiza 50-74% da tarefa" },
    { level: 2, description: "Ajuda máxima", detail: "Sujeito realiza 25-49% da tarefa" },
    { level: 1, description: "Ajuda total", detail: "Sujeito realiza <25% da tarefa" },
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

          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <div className="flex justify-center mb-3 md:mb-6">
              <div className="p-3 md:p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
                <Activity className="h-6 w-6 md:h-12 md:w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 px-2">
              Medida de Independência Funcional (MIF)
            </h1>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-3 md:mb-6 px-2">
              <Badge variant="secondary" className="text-xs md:text-sm">
                Reabilitação
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                Função Motora
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                Função Cognitiva
              </Badge>
            </div>
            <p className="text-sm md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              A MIF é um instrumento abrangente que avalia a independência funcional em atividades motoras e cognitivas,
              amplamente utilizado em reabilitação para monitorar progresso e planejar cuidados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-base md:text-lg">Domínios e Itens Avaliados</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                  18 itens distribuídos em 6 domínios funcionais (13 motores + 5 cognitivos)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:space-y-6">
                  {mifDomains.map((domain, index) => (
                    <div key={index} className="border rounded-lg p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        {domain.domain.includes("Comunicação") || domain.domain.includes("Cognição") ? (
                          <Brain className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                        ) : (
                          <Zap className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        )}
                        <h4 className="font-semibold text-base md:text-lg text-gray-800">{domain.domain}</h4>
                        <Badge variant="outline" className="text-xs">
                          {domain.items.length} itens
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {domain.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-gray-50 p-2 rounded text-xs md:text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 md:space-y-6">
              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                    <Target className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    Níveis de Pontuação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3">
                    {scoreLevels.map((score, index) => (
                      <div
                        key={index}
                        className={`p-2 md:p-3 rounded-lg border ${
                          score.level >= 6
                            ? "bg-green-50 border-green-200"
                            : score.level >= 4
                              ? "bg-yellow-50 border-yellow-200"
                              : "bg-red-50 border-red-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              score.level >= 6
                                ? "bg-green-600 text-white"
                                : score.level >= 4
                                  ? "bg-yellow-600 text-white"
                                  : "bg-red-600 text-white"
                            }`}
                          >
                            {score.level}
                          </div>
                          <span className="font-medium text-xs md:text-sm">{score.description}</span>
                        </div>
                        <p className="text-xs text-gray-600 ml-6 md:ml-8">{score.detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                    <Info className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                    Informações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                    <div>
                      <span className="font-medium">Pontuação total:</span>
                      <p className="text-muted-foreground">18-126 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Subescala motora:</span>
                      <p className="text-muted-foreground">13-91 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Subescala cognitiva:</span>
                      <p className="text-muted-foreground">5-35 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Tempo de aplicação:</span>
                      <p className="text-muted-foreground">30-45 minutos</p>
                    </div>
                    <div>
                      <span className="font-medium">Aplicador:</span>
                      <p className="text-muted-foreground">Profissionais treinados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <Card>
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  Aplicação Clínica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Avaliação inicial em reabilitação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Monitoramento do progresso funcional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Planejamento de alta hospitalar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Determinação de recursos necessários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    <span>Pesquisa em reabilitação</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm md:text-base">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  Interpretação dos Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-green-50 p-2 md:p-3 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-1 text-xs md:text-sm">108-126 pontos</div>
                    <div className="text-xs text-green-700">Independência completa/modificada</div>
                  </div>
                  <div className="bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-800 mb-1 text-xs md:text-sm">90-107 pontos</div>
                    <div className="text-xs text-yellow-700">Dependência mínima</div>
                  </div>
                  <div className="bg-orange-50 p-2 md:p-3 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800 mb-1 text-xs md:text-sm">54-89 pontos</div>
                    <div className="text-xs text-orange-700">Dependência moderada</div>
                  </div>
                  <div className="bg-red-50 p-2 md:p-3 rounded-lg border border-red-200">
                    <div className="font-semibold text-red-800 mb-1 text-xs md:text-sm">18-53 pontos</div>
                    <div className="text-xs text-red-700">Dependência severa/total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 md:mb-16">
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-base md:text-lg">Exemplo de Evolução de Enfermagem</CardTitle>
              <CardDescription className="text-xs md:text-sm">
                Documentação adequada da avaliação funcional utilizando a MIF
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
                <p className="text-xs md:text-sm leading-relaxed">
                  <strong>Avaliação Funcional - MIF:</strong>
                  <br />
                  Paciente feminina, 45 anos, em reabilitação pós-traumatismo cranioencefálico. Avaliação através da MIF
                  apresentou pontuação total de 78 pontos, indicando dependência moderada. Subescala motora: 58 pontos
                  (autocuidado: 28, controle esfíncteres: 14, transferências: 12, locomoção: 4). Subescala cognitiva: 20
                  pontos (comunicação: 10, cognição social: 10). Principais limitações: locomoção (necessita cadeira de
                  rodas), memória e resolução de problemas comprometidas. Implementado programa de reabilitação
                  multidisciplinar com fisioterapia para fortalecimento e treino de marcha, terapia ocupacional para
                  atividades de vida diária e fonoaudiologia para estimulação cognitiva. Reavaliação programada
                  mensalmente para monitoramento da evolução funcional.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-4 pb-4 md:pt-8 md:pb-8">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Padrão-Ouro em Reabilitação</h3>
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                  A MIF é considerada o padrão-ouro para avaliação funcional em reabilitação, fornecendo uma medida
                  abrangente e sensível às mudanças funcionais. Sua aplicação sistemática permite documentar
                  objetivamente o progresso e orientar decisões clínicas baseadas em evidências.
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
