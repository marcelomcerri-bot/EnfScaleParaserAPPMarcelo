import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Heart,
  Shield,
  Brain,
  Activity,
  Stethoscope,
  Plus,
  Sparkles,
  Syringe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const categories = [
    {
      title: "Escalas de Dor",
      description: "Avaliação e mensuração da dor em diferentes populações",
      count: "9",
      href: "/categorias/dor",
      icon: Heart,
      gradient: "from-rose-500/20 via-pink-500/20 to-red-500/20",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200/50",
      bgColor: "bg-gradient-to-br from-rose-50/80 to-pink-50/80",
    },
    {
      title: "Risco de Quedas",
      description: "Identificação de pacientes com risco de quedas",
      count: "3",
      href: "/categorias/risco-quedas",
      icon: Shield,
      gradient: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200/50",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-orange-50/80",
    },
    {
      title: "Úlcera por Pressão",
      description: "Avaliação do risco de desenvolvimento de lesões por pressão",
      count: "5",
      href: "/categorias/ulcera-pressao",
      icon: Activity,
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200/50",
      bgColor: "bg-gradient-to-br from-blue-50/80 to-cyan-50/80",
    },
    {
      title: "Avaliação Neurológica",
      description: "Escalas para avaliação do estado neurológico",
      count: "5",
      href: "/categorias/avaliacao-neurologica",
      icon: Brain,
      gradient: "from-purple-500/20 via-indigo-500/20 to-violet-500/20",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200/50",
      bgColor: "bg-gradient-to-br from-purple-50/80 to-indigo-50/80",
    },
    {
      title: "Avaliação Funcional",
      description: "Medidas de independência e capacidade funcional",
      count: "3",
      href: "/categorias/funcional",
      icon: Stethoscope,
      gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200/50",
      bgColor: "bg-gradient-to-br from-emerald-50/80 to-green-50/80",
    },
    {
      title: "Infusões Medicamentosas",
      description: "Protocolos de quimioterapia e cuidados de enfermagem oncológica",
      count: "32",
      href: "/categorias/infusoes-medicamentosas",
      icon: Syringe,
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200/50",
      bgColor: "bg-gradient-to-br from-cyan-50/80 to-blue-50/80",
    },
    {
      title: "Outras Escalas Especializadas",
      description: "Escalas especializadas para contextos clínicos específicos",
      count: "12",
      href: "/categorias/outras-escalas",
      icon: Plus,
      gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
      iconColor: "text-slate-600",
      borderColor: "border-slate-200/50",
      bgColor: "bg-gradient-to-br from-slate-50/80 to-gray-50/80",
    },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Conteúdo Completo",
      description:
        "Informações detalhadas sobre cada escala, incluindo aplicação prática e interpretação de resultados.",
    },
    {
      icon: Search,
      title: "Busca Avançada",
      description: "Encontre rapidamente as escalas por nome, categoria ou situação clínica específica.",
    },
    {
      icon: Users,
      title: "Para Todos os Profissionais",
      description: "Ferramenta útil para estudantes, enfermeiros assistenciais, professores e pesquisadores.",
    },
    {
      icon: Award,
      title: "Referências Oficiais",
      description: "Todas as escalas incluem referências do COFEN, COREN, Ministério da Saúde e literatura científica.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(5,150,105,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(13,148,136,0.1),transparent_50%)]"></div>

          {/* Floating elements - hidden on mobile for better performance */}
          <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div
            className="hidden sm:block absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="hidden sm:block absolute bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-float"
            style={{ animationDelay: "4s" }}
          ></div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 animate-fade-in">
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="relative group">
                  <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-500 animate-glow"></div>
                  <div className="relative p-4 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-float">
                    <Image
                      src="/green-tree-logo.png"
                      alt="EnfScale Logo"
                      width={120}
                      height={120}
                      className="w-20 h-20 sm:w-[120px] sm:h-[120px] object-contain group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
                  <span className="gradient-text">EnfScale</span>
                </h1>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-primary animate-pulse" />
                  <p className="text-lg sm:text-2xl md:text-3xl text-slate-700 font-semibold">
                    Escalas de Avaliação de Enfermagem
                  </p>
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-secondary animate-pulse" />
                </div>
              </div>

              <p className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
                Ferramenta completa de referência para escalas de avaliação de enfermagem utilizadas no Brasil.
                <br />
                <span className="text-primary font-semibold">
                  Desenvolvida para estudantes, enfermeiros, professores e pesquisadores.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 px-4">
                <Button
                  asChild
                  size="lg"
                  className="text-base sm:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transform hover:scale-105"
                >
                  <Link href="/categorias">
                    Explorar Escalas
                    <ChevronRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-xl px-8 sm:px-12 py-6 sm:py-8 glass-effect hover:bg-white/40 transition-all duration-500 transform hover:scale-105 border-2 bg-transparent"
                >
                  <Link href="/pesquisar">
                    <Search className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Pesquisar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8 md:py-12 lg:py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-3 sm:px-4 relative">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 gradient-text px-2 sm:px-4 pt-2 sm:pt-4">
                Categorias de Escalas
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium px-2 sm:px-4 md:px-0">
                Explore nossa coleção completa de escalas organizadas por área de aplicação clínica
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              {categories.map((category, index) => (
                <Card
                  key={category.title}
                  className={`group hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-4 border-2 ${category.borderColor} ${category.bgColor} backdrop-blur-sm animate-scale-in overflow-hidden relative`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="pb-2 sm:pb-3 md:pb-4 lg:pb-6 relative z-10 p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                      <div
                        className={`p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl bg-white/90 ${category.iconColor} group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-3 sm:group-hover:rotate-6 md:group-hover:rotate-12 transition-all duration-500 shadow-sm sm:shadow-md md:shadow-lg`}
                      >
                        <category.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-slate-700 font-bold text-xs sm:text-sm md:text-lg px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2 shadow-sm sm:shadow-md"
                      >
                        {category.count}
                      </Badge>
                    </div>
                    <CardTitle className="text-sm sm:text-base md:text-lg lg:text-2xl group-hover:text-primary transition-colors duration-500 font-bold leading-tight">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 p-3 sm:p-4 md:p-6 pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-white/70 transition-all duration-500 text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 md:py-4 lg:py-6 font-semibold"
                    >
                      <Link href={category.href}>
                        Ver Escalas
                        <ChevronRight className="ml-1 sm:ml-2 md:ml-3 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-3 sm:px-4 text-center relative">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 animate-scale-in">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold gradient-text">
                Comece a explorar agora
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-600 leading-relaxed font-medium px-2 sm:px-4 md:px-0">
                Acesse nossa biblioteca completa de escalas de avaliação de enfermagem e melhore sua prática clínica
              </p>
              <div className="px-2 sm:px-4 md:px-0 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
                <Button
                  asChild
                  size="lg"
                  className="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-secondary hover:to-primary transform hover:scale-105"
                >
                  <Link href="/categorias">
                    Explorar Todas as Escalas
                    <ChevronRight className="ml-1 sm:ml-2 md:ml-3 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
