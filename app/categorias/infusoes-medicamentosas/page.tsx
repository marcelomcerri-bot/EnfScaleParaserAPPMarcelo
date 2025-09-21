"use client"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import {
  Syringe,
  Clock,
  AlertTriangle,
  Sun,
  Shield,
  Heart,
  Zap,
  Timer,
  ArrowLeft,
  Users,
  Activity,
  Search,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InfusoesMedicamentosasPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const medications = [
    {
      name: "Bleomicina",
      brand: "BLEO",
      route: "SC/IM/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Bortezomib",
      brand: "VELCADE®",
      route: "SC/EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Carboplatina",
      brand: "CBP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Ciclofosfamida",
      brand: "CTX",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "Dois horários",
      category: "irritante",
    },
    {
      name: "Cisplatina",
      brand: "CDDP",
      route: "EV",
      irritant: "Irritante/Vesicante",
      photosensitive: true,
      infusionTime: "1 mg/min",
      category: "vesicante",
    },
    {
      name: "Citarabina",
      brand: "ARA-C",
      route: "SC/IM/IT/EV",
      irritant: "Não consta",
      photosensitive: true,
      infusionTime: "60 a 180 min",
      category: "outros",
    },
    {
      name: "Dacarbazina",
      brand: "DTIC",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Daunorrubicina",
      brand: "DAUNO®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "30 a 45 min",
      category: "vesicante",
    },
    {
      name: "Doxorrubicina",
      brand: "DOXO",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "15 min",
      category: "vesicante",
    },
    {
      name: "Doxorrubicina lipossomal",
      brand: "",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "1 mg/min",
      category: "irritante",
    },
    {
      name: "Etoposídeo",
      brand: "VP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Fludarabina",
      brand: "FLUDARA",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Fluorouracila",
      brand: "5-FU",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "Protocolo habitual",
      category: "irritante",
    },
    {
      name: "Gemcitabina",
      brand: "GEMZAR®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Ifosfamida",
      brand: "IFO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Irinotecano",
      brand: "IRINO",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "90 min",
      category: "irritante",
    },
    {
      name: "Mitoxantrona",
      brand: "MTZ",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: false,
      infusionTime: "120 min",
      category: "vesicante",
    },
    {
      name: "Oxaliplatina",
      brand: "L-OHP",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "120 min",
      category: "irritante",
    },
    {
      name: "Paclitaxel",
      brand: "TAXOL®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: true,
      infusionTime: "180 min",
      category: "irritante",
    },
    {
      name: "Vimblastina",
      brand: "VB",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Vincristina",
      brand: "VCR",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Vinorelbina",
      brand: "NAVELBINE®",
      route: "EV",
      irritant: "Vesicante",
      photosensitive: true,
      infusionTime: "Bolus",
      category: "vesicante",
    },
    {
      name: "Ácido folínico",
      brand: "LEUCOVORIN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: true,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Ácido zoledrônico",
      brand: "ZOMETA®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Dexametasona",
      brand: "DXT",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Mesna",
      brand: "MITEXAN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Ondansetrona",
      brand: "ZOFRAN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "15 min",
      category: "outros",
    },
    {
      name: "Bendamustina",
      brand: "BENDEKA/BENDAMUS",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "60 min",
      category: "irritante",
    },
    {
      name: "Pertuzumabe",
      brand: "PERJETA®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "60 min",
      category: "outros",
    },
    {
      name: "Trastuzumabe",
      brand: "HERCEPTIN®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "90 min",
      category: "outros",
    },
    {
      name: "Brentuximabe",
      brand: "ADCETRIS®",
      route: "EV",
      irritant: "Irritante",
      photosensitive: false,
      infusionTime: "30 min",
      category: "irritante",
    },
    {
      name: "Daratumumabe",
      brand: "DARZALEX®",
      route: "EV",
      irritant: "Não consta",
      photosensitive: false,
      infusionTime: "180-480 min",
      category: "outros",
    },
  ]

  const filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const vesicantes = filteredMedications.filter((med) => med.category === "vesicante")
  const irritantes = filteredMedications.filter((med) => med.category === "irritante")
  const fotossensiveis = filteredMedications.filter((med) => med.photosensitive)
  const infusaoRapida = filteredMedications.filter(
    (med) =>
      med.infusionTime.includes("15 min") || med.infusionTime.includes("30 min") || med.infusionTime.includes("Bolus"),
  )

  const getCuidadosEnfermagem = (medication: any) => {
    const cuidados = []

    if (medication.category === "vesicante") {
      cuidados.push("Verificar permeabilidade do acesso venoso antes da infusão")
      cuidados.push("Monitorar sinais de extravasamento durante toda a infusão")
      cuidados.push("Manter kit de extravasamento disponível")
      cuidados.push("Orientar paciente sobre sinais de extravasamento")
    }

    if (medication.category === "irritante") {
      cuidados.push("Verificar acesso venoso calibroso")
      cuidados.push("Diluir adequadamente conforme protocolo")
      cuidados.push("Monitorar local de punção durante infusão")
    }

    if (medication.photosensitive) {
      cuidados.push("Proteger da luz durante preparo e infusão")
      cuidados.push("Orientar paciente sobre fotoproteção")
      cuidados.push("Utilizar equipos âmbar ou proteger com papel alumínio")
    }

    if (medication.infusionTime.includes("120 min") || medication.infusionTime.includes("180 min")) {
      cuidados.push("Monitorar sinais vitais durante infusão prolongada")
      cuidados.push("Verificar conforto do paciente periodicamente")
    }

    // Cuidados gerais
    cuidados.push("Verificar prescrição médica e identificação do paciente")
    cuidados.push("Monitorar reações adversas durante e após infusão")
    cuidados.push("Registrar horário de início e término da infusão")
    cuidados.push("Orientar paciente sobre possíveis efeitos colaterais")

    return cuidados
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button asChild variant="ghost" className="mb-4 -ml-4">
              <Link href="/categorias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Categorias
              </Link>
            </Button>
          </div>

          <div className="text-center mb-8 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
                <Syringe className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Infusões Medicamentosas - Oncologia</h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protocolos especializados de quimioterapia e medicamentos oncológicos do Hospital Universitário Antonio
              Pedro (HUAP). Informações detalhadas sobre administração segura e cuidados de enfermagem específicos.
            </p>
          </div>

          <Alert className="mb-8 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 animate-slide-up">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800 text-sm">
              <strong>Importante:</strong> Estas informações são baseadas nos protocolos do Setor de Oncologia do HUAP.
              Sempre consulte as diretrizes institucionais e prescrições médicas específicas antes da administração.
            </AlertDescription>
          </Alert>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-center mb-8 animate-slide-up">Categorias de Medicamentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 animate-scale-in">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-base text-red-700">Vesicantes</CardTitle>
                  <Badge variant="destructive" className="mx-auto text-xs">
                    {vesicantes.length} medicamentos
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 text-center">Risco de necrose tecidual se extravasarem</p>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 animate-scale-in"
                style={{ animationDelay: "100ms" }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-base text-orange-700">Irritantes</CardTitle>
                  <Badge variant="default" className="mx-auto bg-orange-600 text-xs">
                    {irritantes.length} medicamentos
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 text-center">Podem causar dor e inflamação local</p>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 animate-scale-in"
                style={{ animationDelay: "200ms" }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Sun className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-base text-yellow-700">Fotossensíveis</CardTitle>
                  <Badge variant="outline" className="mx-auto border-yellow-600 text-yellow-700 text-xs">
                    {fotossensiveis.length} medicamentos
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 text-center">Requerem proteção da luz</p>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 animate-scale-in"
                style={{ animationDelay: "300ms" }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-base text-green-700">Infusão Rápida</CardTitle>
                  <Badge variant="outline" className="mx-auto border-green-600 text-green-700 text-xs">
                    {infusaoRapida.length} medicamentos
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 text-center">Tempo de infusão ≤30 minutos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Pesquisar medicamento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {filteredMedications.length} medicamento(s) encontrado(s)
              </p>
            )}
          </div>

          <Tabs defaultValue="todos" className="space-y-6">
            <div className="flex flex-col space-y-2">
              <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full h-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-1 gap-1">
                <TabsTrigger value="todos" className="text-sm font-medium py-2">
                  Todos ({filteredMedications.length})
                </TabsTrigger>
                <TabsTrigger
                  value="vesicantes"
                  className="text-sm font-medium text-red-600 data-[state=active]:text-red-700 py-2"
                >
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Vesicantes ({vesicantes.length})
                </TabsTrigger>
                <TabsTrigger
                  value="irritantes"
                  className="text-sm font-medium text-orange-600 data-[state=active]:text-orange-700 py-2"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  Irritantes ({irritantes.length})
                </TabsTrigger>
                <TabsTrigger
                  value="fotossensiveis"
                  className="text-sm font-medium text-yellow-600 data-[state=active]:text-yellow-700 py-2"
                >
                  <Sun className="w-4 h-4 mr-1" />
                  Fotossensíveis ({fotossensiveis.length})
                </TabsTrigger>
                <TabsTrigger
                  value="infusao-rapida"
                  className="text-sm font-medium text-green-600 data-[state=active]:text-green-700 py-2"
                >
                  <Zap className="w-4 h-4 mr-1" />
                  Infusão Rápida ({infusaoRapida.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos" className="space-y-3">
              <div className="grid gap-4">
                {filteredMedications.map((medication, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {medication.name}
                            {medication.brand && (
                              <Badge variant="outline" className="text-sm">
                                {medication.brand}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-2 flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">
                              Via: {medication.route}
                            </Badge>
                            <Badge
                              variant={
                                medication.category === "vesicante"
                                  ? "destructive"
                                  : medication.category === "irritante"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {medication.irritant}
                            </Badge>
                            {medication.photosensitive && (
                              <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-xs">
                                <Sun className="w-3 h-3 mr-1" />
                                Fotossensível
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {medication.infusionTime}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication)
                              .slice(0, 4)
                              .map((cuidado, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                  {cuidado}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vesicantes" className="space-y-4">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Medicamentos Vesicantes:</strong> Podem causar necrose tecidual se extravasarem. Requerem
                  cuidados especiais e monitoramento contínuo durante a infusão.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {vesicantes.map((medication, index) => (
                  <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge variant="destructive">{medication.irritant}</Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem Específicos:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="irritantes" className="space-y-4">
              <Alert className="border-orange-200 bg-orange-50">
                <Shield className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Medicamentos Irritantes:</strong> Podem causar dor e inflamação local. Requerem acesso venoso
                  adequado e monitoramento durante a infusão.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {irritantes.map((medication, index) => (
                  <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-orange-700">
                        <Shield className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge variant="default">{medication.irritant}</Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fotossensiveis" className="space-y-4">
              <Alert className="border-yellow-200 bg-yellow-50">
                <Sun className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Medicamentos Fotossensíveis:</strong> Devem ser protegidos da luz durante preparo, transporte
                  e infusão. Pacientes devem evitar exposição solar.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {fotossensiveis.map((medication, index) => (
                  <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-yellow-700">
                        <Sun className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge
                          variant={
                            medication.category === "vesicante"
                              ? "destructive"
                              : medication.category === "irritante"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {medication.irritant}
                        </Badge>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          <Sun className="w-3 h-3 mr-1" />
                          Fotossensível
                        </Badge>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infusao-rapida" className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <Timer className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Infusão Rápida (≤30 min):</strong> Medicamentos com tempo de infusão reduzido. Monitorar
                  reações imediatas e garantir acesso venoso adequado.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6">
                {infusaoRapida.map((medication, index) => (
                  <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-green-700">
                        <Zap className="w-5 h-5" />
                        {medication.name}
                        {medication.brand && (
                          <Badge variant="outline" className="text-sm">
                            {medication.brand}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Via: {medication.route}</Badge>
                        <Badge
                          variant={
                            medication.category === "vesicante"
                              ? "destructive"
                              : medication.category === "irritante"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {medication.irritant}
                        </Badge>
                        {medication.photosensitive && (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <Sun className="w-3 h-3 mr-1" />
                            Fotossensível
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <Timer className="w-3 h-3 mr-1" />
                          {medication.infusionTime}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            Cuidados de Enfermagem:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {getCuidadosEnfermagem(medication).map((cuidado, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                {cuidado}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center animate-slide-up">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Importância Clínica da Administração Segura</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  A administração segura de medicamentos oncológicos representa um dos pilares fundamentais do cuidado
                  de enfermagem em oncologia. Os agentes quimioterápicos possuem características farmacológicas
                  específicas que exigem conhecimento técnico especializado e protocolos rigorosos de segurança.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base mb-2">Segurança do Paciente</h4>
                    <p className="text-muted-foreground text-sm">Prevenção de eventos adversos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base mb-2">Cuidado Especializado</h4>
                    <p className="text-muted-foreground text-sm">Protocolos baseados em evidências</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base mb-2">Eficácia Terapêutica</h4>
                    <p className="text-muted-foreground text-sm">Administração otimizada</p>
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
