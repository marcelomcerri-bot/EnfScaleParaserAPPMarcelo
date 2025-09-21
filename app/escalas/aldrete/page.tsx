import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, Info, Target, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AldretePage() {
  const aldreteItems = [
    {
      parameter: "Atividade Muscular",
      scores: [
        {
          points: 2,
          description: "Capaz de mover 4 extremidades voluntariamente ou sob comando",
        },
        { points: 1, description: "Capaz de mover 2 extremidades voluntariamente ou sob comando" },
        { points: 0, description: "Incapaz de mover extremidades voluntariamente ou sob comando" },
      ],
    },
    {
      parameter: "Respiração",
      scores: [
        { points: 2, description: "Capaz de respirar profundamente e tossir livremente" },
        { points: 1, description: "Dispneia ou respiração limitada" },
        { points: 0, description: "Apneico ou em ventilação mecânica" },
      ],
    },
    {
      parameter: "Circulação (Pressão Arterial)",
      scores: [
        { points: 2, description: "PA ± 20% ou menos do nível pré-anestésico" },
        { points: 1, description: "PA ± 20% a 49% do nível pré-anestésico" },
        { points: 0, description: "PA ± 50% ou mais do nível pré-anestésico" },
      ],
    },
    {
      parameter: "Consciência",
      scores: [
        { points: 2, description: "Totalmente desperto" },
        { points: 1, description: "Desperta quando chamado" },
        { points: 0, description: "Não responde" },
      ],
    },
    {
      parameter: "Saturação de Oxigênio",
      scores: [
        { points: 2, description: "Capaz de manter SpO2 >92% em ar ambiente" },
        { points: 1, description: "Necessita O2 para manter SpO2 >90%" },
        { points: 0, description: "SpO2 <90% mesmo com O2 suplementar" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-4 md:py-12">
        <div className="container mx-auto px-3 md:px-4">
          <div className="mb-4 md:mb-8">
            <Button asChild variant="ghost" className="mb-4 -ml-4 text-xs md:text-sm h-8 md:h-10">
              <Link href="/categorias/outras-escalas">
                <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                Voltar às Outras Escalas
              </Link>
            </Button>
          </div>

          <div className="text-center mb-6 md:mb-8 lg:mb-16 animate-fade-in">
            <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
              <div className="p-2 md:p-4 lg:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <Activity className="h-4 w-4 md:h-8 md:w-8 lg:h-12 lg:w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 lg:mb-6 px-2">
              Escala de Aldrete Modificada
            </h1>
            <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3 mb-2 md:mb-4 lg:mb-6 px-2">
              <Badge variant="secondary" className="text-xs">
                Recuperação Pós-Anestésica
              </Badge>
              <Badge variant="secondary" className="text-xs">
                SRPA
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Anestesia
              </Badge>
            </div>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              A Escala de Aldrete Modificada é o padrão-ouro para avaliar as condições de recuperação pós-anestésica,
              determinando quando o paciente pode ser transferido da Sala de Recuperação Pós-Anestésica (SRPA).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-16">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2 md:pb-6">
                <CardTitle className="text-base md:text-lg lg:text-xl">Parâmetros Avaliados</CardTitle>
                <CardDescription className="text-xs md:text-sm lg:text-base">
                  Cinco parâmetros essenciais para avaliação da recuperação pós-anestésica (pontuação 0-2 cada)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  {aldreteItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-2 md:p-3 lg:p-4">
                      <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2 lg:mb-3 text-green-700">
                        {item.parameter}
                      </h4>
                      <div className="space-y-1 md:space-y-2">
                        {item.scores.map((score, scoreIndex) => (
                          <div
                            key={scoreIndex}
                            className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="bg-green-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex items-center justify-center text-xs font-bold shrink-0">
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
                    <Target className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-green-600" />
                    Interpretação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    <div className="bg-green-50 p-2 md:p-3 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-800 mb-1 text-xs md:text-sm lg:text-base">
                        9-10 pontos
                      </div>
                      <div className="text-xs text-green-700">Alta da SRPA autorizada</div>
                    </div>
                    <div className="bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-800 mb-1 text-xs md:text-sm lg:text-base">
                        7-8 pontos
                      </div>
                      <div className="text-xs text-yellow-700">Observação continuada necessária</div>
                    </div>
                    <div className="bg-red-50 p-2 md:p-3 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-800 mb-1 text-xs md:text-sm lg:text-base">≤ 6 pontos</div>
                      <div className="text-xs text-red-700">Permanência obrigatória na SRPA</div>
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
                      <p className="text-muted-foreground">2-3 minutos</p>
                    </div>
                    <div>
                      <span className="font-medium">Pontuação total:</span>
                      <p className="text-muted-foreground">0-10 pontos</p>
                    </div>
                    <div>
                      <span className="font-medium">Frequência:</span>
                      <p className="text-muted-foreground">A cada 15 minutos na SRPA</p>
                    </div>
                    <div>
                      <span className="font-medium">Aplicador:</span>
                      <p className="text-muted-foreground">Enfermeiro da SRPA</p>
                    </div>
                    <div>
                      <span className="font-medium">Ano de criação:</span>
                      <p className="text-muted-foreground">1970 (modificada em 1995)</p>
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
                Documentação adequada da avaliação pós-anestésica utilizando a Escala de Aldrete Modificada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-3 md:p-4 lg:p-6 rounded-lg border">
                <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                  <strong>Avaliação Pós-Anestésica - Escala de Aldrete Modificada:</strong>
                  <br />
                  Paciente masculino, 45 anos, submetido à herniorrafia inguinal sob raquianestesia. Admitido na SRPA às
                  10:30h. PA pré-anestésica: 120/80 mmHg. Primeira avaliação às 10:45h: Atividade muscular 1 - movimenta
                  apenas membros superiores sob comando; Respiração 2 - respira espontaneamente, sem dispneia;
                  Circulação 2 - PA 125/82 mmHg (variação &lt;20%); Consciência 2 - totalmente desperto e orientado;
                  Saturação O2 2 - SpO2 97% em ar ambiente.
                  <strong> Total: 9 pontos.</strong> Reavaliação às 11:00h: Atividade muscular 2 - movimenta todas as
                  extremidades adequadamente; demais parâmetros mantidos.
                  <strong> Total: 10 pontos.</strong> Paciente apresenta condições para alta da SRPA. Transferido para
                  enfermaria às 11:15h, deambulando com auxílio, orientado sobre cuidados pós-operatórios e sinais de
                  alerta.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 md:mb-8 lg:mb-16">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg lg:text-xl">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                Referências Científicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs md:text-sm">
                <p>
                  <strong>1.</strong> Aldrete JA, Kroulik D. A postanesthetic recovery score. Anesth Analg.
                  1970;49(6):924-34.
                </p>
                <p>
                  <strong>2.</strong> Aldrete JA. The post-anesthesia recovery score revisited. J Clin Anesth.
                  1995;7(1):89-91.
                </p>
                <p>
                  <strong>3.</strong> Society for Pediatric Anesthesia. Modified Aldrete Score. Clinical Guidelines.
                </p>
                <p>
                  <strong>4.</strong> AORN Journal. Determining patients' readiness for release from the postanesthesia
                  recovery unit. 2006.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-4 pb-4 md:pt-8 md:pb-8">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Aplicação na Prática Clínica</h3>
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm lg:text-base">
                  A Escala de Aldrete Modificada é obrigatória em todas as SRPAs, sendo fundamental para garantir a
                  segurança do paciente na transição pós-anestésica. Sua aplicação sistemática previne complicações e
                  assegura alta adequada apenas quando todos os parâmetros vitais estão estáveis e seguros.
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
