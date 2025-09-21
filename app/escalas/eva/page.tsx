import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function EVAScalePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-4 md:py-8">
        <div className="container mx-auto px-3 md:px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
            <Link href="/categorias/dor" className="hover:text-primary transition-colors">
              Escalas de Dor
            </Link>
            <span>/</span>
            <span>Escala Visual Analógica (EVA)</span>
          </div>

          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="p-2 md:p-4 bg-red-50 rounded-full">
                <Heart className="h-4 w-4 md:h-8 md:w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 px-2">
              Escala Visual Analógica (EVA)
            </h1>
            <div className="flex justify-center gap-1 md:gap-2 mb-2 md:mb-4 px-2">
              <Badge variant="secondary" className="bg-red-50 text-red-700 text-xs">
                Avaliação da Dor
              </Badge>
              <Badge variant="outline" className="text-xs">
                Adultos e Adolescentes
              </Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <FileText className="h-4 w-4 md:h-5 md:w-5" />
                Nome Completo e Finalidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Nome Completo:</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Escala Visual Analógica para Avaliação da Dor (EVA) - Visual Analogue Scale (VAS)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Finalidade e Objetivo:</h3>
                <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                  A Escala Visual Analógica (EVA) é um instrumento unidimensional amplamente utilizado para mensurar a
                  intensidade da dor de forma subjetiva. Esta escala foi desenvolvida para permitir que pacientes
                  adultos e adolescentes capazes de compreender conceitos abstratos expressem numericamente a
                  intensidade de sua experiência dolorosa. A EVA é aplicada em pacientes conscientes, orientados e
                  capazes de comunicação verbal ou gestual, sendo especialmente útil em contextos clínicos onde é
                  necessária uma avaliação rápida e confiável da dor. A EVA permite uma avaliação contínua da dor,
                  oferecendo maior sensibilidade para detectar pequenas variações na intensidade dolorosa quando
                  comparada às escalas categóricas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg">Descrição Completa da Escala</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 text-xs md:text-sm">
                A Escala Visual Analógica consiste em uma linha horizontal de 10 centímetros, sem marcações
                intermediárias, com âncoras verbais em suas extremidades. A extremidade esquerda da linha representa
                "ausência total de dor" ou "sem dor" (correspondente ao valor 0), enquanto a extremidade direita
                representa "a pior dor imaginável" ou "dor insuportável" (correspondente ao valor 10). O paciente é
                instruído a marcar um ponto na linha que melhor represente a intensidade de sua dor no momento da
                avaliação.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 text-xs md:text-sm">
                A mensuração é realizada através da medida da distância, em centímetros, do início da linha (ponto zero)
                até o ponto marcado pelo paciente, resultando em um valor numérico que varia de 0 a 10. Esta medida pode
                ser expressa em centímetros ou convertida para uma escala de 0 a 100 milímetros para maior precisão.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                A aplicação da escala requer que o profissional de enfermagem explique claramente ao paciente o
                significado das âncoras verbais e demonstre como realizar a marcação. É fundamental que o paciente
                compreenda que deve considerar apenas a dor atual, no momento da avaliação, e não a dor média ou a pior
                dor já experimentada. A escala deve ser apresentada na posição horizontal, preferencialmente impressa em
                papel ou apresentada em formato digital, mantendo sempre as mesmas dimensões e características visuais
                para garantir a confiabilidade das medidas.
              </p>
            </CardContent>
          </Card>

          {/* Scoring */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg">Pontuação e Interpretação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Pontuação Possível:</h3>
                  <p className="text-muted-foreground mb-3 md:mb-4 text-xs md:text-sm">
                    A pontuação da EVA varia de 0 a 10, sendo obtida através da medida da distância em centímetros do
                    início da linha até o ponto marcado pelo paciente. A medida deve ser realizada com régua milimetrada
                    para garantir precisão, podendo ser expressa com uma casa decimal (exemplo: 3,5 cm) para maior
                    acurácia na documentação.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">
                    Interpretação das Faixas de Pontuação:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800 text-sm md:text-base">0 - 3: Dor Leve</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        Dor de baixa intensidade que não interfere significativamente nas atividades de vida diária. O
                        paciente consegue manter suas funções normais com mínimo desconforto. Geralmente não requer
                        intervenções farmacológicas complexas, podendo ser manejada com medidas não farmacológicas ou
                        analgésicos simples.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800 text-sm md:text-base">4 - 6: Dor Moderada</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        Dor de intensidade média que interfere parcialmente nas atividades cotidianas e no sono. O
                        paciente apresenta limitações funcionais e desconforto significativo. Requer intervenção
                        farmacológica adequada e monitoramento regular da resposta terapêutica.
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-red-800 text-sm md:text-base">7 - 10: Dor Intensa/Severa</h4>
                      </div>
                      <p className="text-sm text-red-700">
                        Dor de alta intensidade que interfere drasticamente nas atividades de vida diária, sono e
                        bem-estar geral. O paciente apresenta limitações funcionais importantes e sofrimento
                        significativo. Requer intervenção farmacológica imediata e potente, além de avaliação médica
                        urgente para ajuste terapêutico. Pontuações entre 8-10 indicam dor severa que pode estar
                        associada a sinais autonômicos como taquicardia, hipertensão e sudorese.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clinical Application */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg">Aplicação Prática e Cuidados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Como Aplicar na Prática de Enfermagem:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 md:mb-4 text-xs md:text-sm">
                    A aplicação da EVA deve ser realizada em ambiente adequado, com o paciente em posição confortável e
                    sem distrações. O enfermeiro deve apresentar a escala ao paciente, explicando claramente que se
                    trata de uma linha que representa a intensidade da dor, onde uma extremidade significa ausência
                    total de dor e a outra representa a pior dor imaginável. É fundamental que o profissional demonstre
                    como fazer a marcação e esclareça que o paciente deve considerar apenas a dor atual, no momento da
                    avaliação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                    Durante a aplicação, o enfermeiro deve observar sinais não verbais de dor, como expressão facial,
                    postura corporal, gemidos ou inquietação, que podem complementar a avaliação subjetiva. A escala
                    deve ser aplicada em intervalos regulares conforme protocolo institucional, geralmente a cada 4-6
                    horas em pacientes hospitalizados, ou antes e após intervenções analgésicas para avaliar a eficácia
                    do tratamento.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Cuidados Durante a Aplicação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs md:text-sm">
                    <li>Certificar-se de que o paciente compreende o conceito da escala e as instruções fornecidas</li>
                    <li>Garantir que o paciente tenha capacidade cognitiva para utilizar a escala adequadamente</li>
                    <li>Apresentar a escala sempre na mesma posição (horizontal) e com as mesmas dimensões</li>
                    <li>Permitir tempo suficiente para o paciente refletir sobre sua dor antes de fazer a marcação</li>
                    <li>Evitar influenciar a resposta do paciente através de sugestões ou comentários</li>
                    <li>Registrar o valor exato medido com régua, incluindo casas decimais quando necessário</li>
                    <li>
                      Considerar fatores que podem influenciar a percepção da dor, como ansiedade, medo ou medicações
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nursing Evolution Example */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg">Exemplo Detalhado de Evolução de Enfermagem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-sm md:text-base">Registro em Prontuário:</h3>
                <div className="space-y-4 text-sm md:text-base">
                  <p>
                    <strong>Data/Hora:</strong> 15/03/2024 - 14:00h
                  </p>
                  <p>
                    <strong>Paciente:</strong> M.S.A., 45 anos, sexo feminino, pós-operatório de colecistectomia
                    laparoscópica (POI - 1º dia)
                  </p>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Avaliação da Dor - Escala Visual Analógica (EVA):</strong>
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      Paciente consciente, orientada, colaborativa. Aplicada EVA para avaliação da dor incisional.
                      Explicado à paciente o significado da escala, demonstrando que 0 representa ausência de dor e 10 a
                      pior dor imaginável. Paciente referiu compreender as orientações.
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Resultado:</strong> EVA = 6,5 (dor moderada a intensa)
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Características da dor:</strong> Paciente relata dor em região epigástrica e nos portais
                      de entrada dos trocáteres, de caráter pulsátil, com irradiação para ombro direito. Dor exacerbada
                      com movimentos e tosse. Apresenta expressão facial de desconforto, posição antálgica (flexão do
                      tronco), respiração superficial.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Intervenções de Enfermagem Implementadas:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                      <li>Administrado Dipirona 500mg + Tramadol 100mg EV conforme prescrição médica às 14:10h</li>
                      <li>Orientada sobre técnicas de respiração profunda para alívio da dor</li>
                      <li>Posicionamento em decúbito elevado a 30° para conforto</li>
                      <li>Aplicação de compressa morna em região lombar por 20 minutos</li>
                      <li>Ambiente mantido calmo, com iluminação reduzida</li>
                      <li>
                        Orientações sobre importância da deambulação precoce para redução da dor por pneumoperitônio
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Reavaliação (15:30h):</strong>
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      Reaplicada EVA após 1h20min da administração da medicação analgésica.
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Resultado:</strong> EVA = 3,0 (dor leve)
                    </p>
                    <p className="mb-2 text-sm md:text-base">
                      Paciente refere melhora significativa da dor, expressão facial mais relaxada, consegue
                      movimentar-se no leito com menor desconforto. Aceita realizar exercícios respiratórios sem
                      limitação importante pela dor.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="mb-2 text-sm md:text-base">
                      <strong>Condutas e Planejamento:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                      <li>Manter avaliação da dor através da EVA a cada 4 horas e SOS</li>
                      <li>Administrar analgesia conforme prescrição e necessidade (EVA ≥ 4)</li>
                      <li>Estimular deambulação precoce conforme tolerância</li>
                      <li>Orientar paciente sobre importância de comunicar dor antes que se torne intensa</li>
                      <li>Documentar todas as avaliações e intervenções realizadas</li>
                      <li>Comunicar médico assistente se EVA persistir ≥ 7 após intervenções</li>
                    </ul>
                  </div>

                  <p className="mt-4 text-sm md:text-base">
                    <strong>Enfermeiro Responsável:</strong> João Silva Santos - COREN-SP 123456
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card className="mb-4 md:mb-8">
            <CardHeader className="pb-2 md:pb-6">
              <CardTitle className="text-base md:text-lg">Referências Oficiais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Normas e Diretrizes Oficiais:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs md:text-sm">
                    <li>
                      COFEN - Resolução nº 358/2009: Sistematização da Assistência de Enfermagem e implementação do
                      Processo de Enfermagem
                    </li>
                    <li>
                      Ministério da Saúde - Portaria nº 1.083/2012: Protocolo Clínico e Diretrizes Terapêuticas da Dor
                      Crônica
                    </li>
                    <li>COREN-SP - Parecer Técnico nº 15/2015: Avaliação e registro da dor como 5º sinal vital</li>
                    <li>Sociedade Brasileira para Estudo da Dor (SBED) - Diretrizes para avaliação da dor</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Literatura Científica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs md:text-sm">
                    <li>Huskisson, E. C. (1974). Measurement of pain. The Lancet, 304(7889), 1127-1131.</li>
                    <li>
                      Price, D. D., McGrath, P. A., Rafii, A., & Buckingham, B. (1983). The validation of visual
                      analogue scales as ratio scale measures for chronic and experimental pain. Pain, 17(1), 45-56.
                    </li>
                    <li>
                      Jensen, M. P., Chen, C., & Brugger, A. M. (2003). Interpretation of visual analog scale ratings
                      and change scores: a reanalysis of two clinical trials of postoperative pain. The Journal of Pain,
                      4(7), 407-414.
                    </li>
                    <li>
                      Sousa, F. A. E. F. (2002). Dor: o quinto sinal vital. Revista Latino-Americana de Enfermagem,
                      10(3), 446-447.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button asChild variant="outline" className="text-xs md:text-sm h-8 md:h-10 bg-transparent">
              <Link href="/categorias/dor">
                <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                Voltar para Escalas de Dor
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
