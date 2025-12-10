import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Metodología IPCC - EcoBalance360",
  description: "Metodología científica detallada para el cálculo de emisiones y captura de carbono siguiendo los lineamientos del IPCC 2006/2019.",
}

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Metodología Científica</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EcoBalance360 sigue los lineamientos del Panel Intergubernamental de Expertos sobre Cambio Climático
              (IPCC) para calcular emisiones y captura de CO₂ equivalente
            </p>
            <div className="flex gap-2 justify-center flex-wrap">
              <Badge variant="outline">IPCC 2006/2019</Badge>
              <Badge variant="outline">Datos 2019</Badge>
              <Badge variant="outline">87 Municipios</Badge>
              <Badge variant="outline">5 Módulos</Badge>
            </div>
          </div>

          {/* Introducción */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Introducción</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                El <strong className="text-foreground">Panel Intergubernamental de Expertos sobre Cambio Climático (IPCC)</strong> es el organismo
                internacional líder para la evaluación del cambio climático. Sus directrices metodológicas (IPCC 2006, refinamiento 2019)
                son el estándar global para calcular inventarios nacionales de gases de efecto invernadero (GEI).
              </p>
              <p>
                EcoBalance360 replica esta metodología a nivel municipal, permitiendo desagregar el balance de carbono
                departamental y romper el <strong className="text-foreground">"Sesgo de Agregación"</strong> que oculta la realidad de cada territorio.
              </p>
              <p>
                La ecuación fundamental del IPCC es simple:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                E = DA × FE
              </div>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">E</strong> = Emisiones (ton CO₂eq)</li>
                <li><strong className="text-foreground">DA</strong> = Dato de Actividad (variable proxy medible)</li>
                <li><strong className="text-foreground">FE</strong> = Factor de Emisión (ton CO₂eq / unidad de actividad)</li>
              </ul>
            </div>
          </Card>

          {/* Potenciales de Calentamiento Global */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Potenciales de Calentamiento Global (GWP-100)</h2>
            <p className="text-muted-foreground mb-4">
              Para convertir diferentes gases a CO₂ equivalente, usamos los valores GWP del IPCC AR5:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-3xl font-bold mb-2">1×</div>
                <div className="font-semibold">CO₂</div>
                <div className="text-sm text-muted-foreground">Dióxido de carbono (referencia)</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-3xl font-bold mb-2 text-orange-600">28×</div>
                <div className="font-semibold">CH₄</div>
                <div className="text-sm text-muted-foreground">Metano (28 veces más potente)</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-3xl font-bold mb-2 text-red-600">265×</div>
                <div className="font-semibold">N₂O</div>
                <div className="text-sm text-muted-foreground">Óxido nitroso (265 veces más potente)</div>
              </div>
            </div>
          </Card>

          {/* Los 5 Módulos IPCC */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Los 5 Módulos del Inventario IPCC</h2>

            <Accordion type="single" collapsible className="w-full">
              {/* MÓDULO 1: ENERGÍA */}
              <AccordionItem value="modulo-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge>Módulo 1</Badge>
                    <span>Energía</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Incluye emisiones por consumo eléctrico y transporte vehicular.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">1.1 Consumo Eléctrico</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>elec</sub> = CE × FE<sub>red</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• CE = Consumo eléctrico total (kWh)</li>
                        <li>• FE<sub>red</sub> = 0.126 kg CO₂/kWh (Factor Colombia 2019, UPME)</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">1.2 Transporte Vehicular</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>trans</sub> = V × km<sub>año</sub> × FE<sub>combustible</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• V = Vehículos registrados</li>
                        <li>• km<sub>año</sub> = 15,000 km/año (promedio)</li>
                        <li>• Rendimiento: 40 km/galón</li>
                        <li>• FE gasolina = 2.31 kg CO₂/litro</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MÓDULO 2: IPPU */}
              <AccordionItem value="modulo-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge>Módulo 2</Badge>
                    <span>IPPU - Procesos Industriales</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Emisiones de procesos industriales y uso de productos.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">2.1 Industria (Proxy: VAB)</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>IPPU</sub> = VAB × I<sub>carbono</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• VAB = Valor Agregado Bruto (miles de millones COP)</li>
                        <li>• I<sub>carbono</sub> = 0.35 ton CO₂/millón COP (intensidad promedio)</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">2.2 Minería</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>minería</sub> = Vol<sub>extracción</sub> × FE<sub>minería</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• FE = 0.005 ton CO₂/ton material (estimación conservadora)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MÓDULO 3: AGRICULTURA */}
              <AccordionItem value="modulo-3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge>Módulo 3</Badge>
                    <span>Agricultura (AFOLU)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    El sector más relevante en zonas rurales. Incluye fermentación entérica, gestión de estiércol y suelos agrícolas.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">3.1 Fermentación Entérica</div>
                      <p className="text-sm text-muted-foreground mb-3">
                        El ganado rumiante produce metano (CH₄) durante la digestión. Factores de emisión IPCC Tier 1:
                      </p>
                      <div className="grid gap-2 text-sm">
                        <div className="flex justify-between p-2 bg-background rounded">
                          <span>Bovinos:</span>
                          <span className="font-mono">56 kg CH₄/año × 28 = <strong>1.57 ton CO₂eq/año</strong></span>
                        </div>
                        <div className="flex justify-between p-2 bg-background rounded">
                          <span>Búfalos:</span>
                          <span className="font-mono">55 kg CH₄/año × 28 = <strong>1.54 ton CO₂eq/año</strong></span>
                        </div>
                        <div className="flex justify-between p-2 bg-background rounded">
                          <span>Porcinos:</span>
                          <span className="font-mono">1 kg CH₄/año × 28 = <strong>0.028 ton CO₂eq/año</strong></span>
                        </div>
                        <div className="flex justify-between p-2 bg-background rounded">
                          <span>Equinos:</span>
                          <span className="font-mono">18 kg CH₄/año × 28 = <strong>0.50 ton CO₂eq/año</strong></span>
                        </div>
                        <div className="flex justify-between p-2 bg-background rounded">
                          <span>Ovinos/Caprinos:</span>
                          <span className="font-mono">5 kg CH₄/año × 28 = <strong>0.14 ton CO₂eq/año</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">3.2 Gestión de Estiércol</div>
                      <p className="text-sm text-muted-foreground">
                        Emisiones adicionales de CH₄ por manejo de estiércol animal.
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">3.3 Suelos Agrícolas</div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Emisiones de N₂O por fertilización y residuos de cosecha:
                      </p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Factor: 1 kg N₂O-N/ha/año (IPCC default)</li>
                        <li>• GWP N₂O = 265 (muy potente)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MÓDULO 4: LULUCF */}
              <AccordionItem value="modulo-4">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge>Módulo 4</Badge>
                    <span>LULUCF - Uso del Suelo</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Captura de carbono por bosques y emisiones por deforestación.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <div className="font-semibold mb-2 text-emerald-700 dark:text-emerald-400">
                        4.1 Captura por Bosques (SUMIDERO)
                      </div>
                      <div className="font-mono text-sm mb-2">
                        C<sub>bosques</sub> = A<sub>bosque</sub> × T<sub>absorción</sub>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• A<sub>bosque</sub> = Área de bosque natural (ha)</li>
                        <li>• T<sub>absorción</sub> = <strong>4.5 ton CO₂/ha/año</strong> (bosque tropical secundario, IPCC)</li>
                        <li className="text-emerald-700 dark:text-emerald-400">• Se RESTA de las emisiones totales (signo negativo = bueno)</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <div className="font-semibold mb-2 text-red-700 dark:text-red-400">
                        4.2 Emisiones por Deforestación
                      </div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>deforestación</sub> = A<sub>pérdida</sub> × C<sub>stock</sub> × (44/12)
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• A<sub>pérdida</sub> = Área deforestada (ha)</li>
                        <li>• C<sub>stock</sub> = <strong>120 ton C/ha</strong> (stock de carbono en biomasa)</li>
                        <li>• (44/12) = Factor de conversión de Carbono a CO₂</li>
                        <li className="text-red-700 dark:text-red-400">• Libera el carbono almacenado al cortar el bosque</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* MÓDULO 5: RESIDUOS */}
              <AccordionItem value="modulo-5">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Badge>Módulo 5</Badge>
                    <span>Residuos</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Emisiones de metano por descomposición anaeróbica en rellenos sanitarios y aguas residuales.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">5.1 Residuos Sólidos</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>residuos</sub> = RSU × 0.5 × GWP<sub>CH₄</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• RSU = Residuos sólidos urbanos (ton)</li>
                        <li>• Factor: 0.5 ton CH₄/ton RSU (IPCC default rellenos sin captura)</li>
                        <li>• GWP<sub>CH₄</sub> = 28</li>
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold mb-2">5.2 Aguas Residuales</div>
                      <div className="font-mono text-sm mb-2">
                        E<sub>aguas</sub> = Consumo<sub>agua</sub> × 0.8 × FE<sub>aguas</sub>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 80% del agua consumida se convierte en residual</li>
                        <li>• FE = 0.025 kg CH₄/m³ agua residual</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Balance de Carbono */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Balance de Carbono Municipal</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                El balance neto integra las emisiones de los 5 módulos y resta la captura por bosques:
              </p>
              <div className="bg-muted p-6 rounded-lg font-mono text-center">
                <div className="text-lg mb-2">Balance = (E<sub>energía</sub> + E<sub>IPPU</sub> + E<sub>agricultura</sub> + E<sub>residuos</sub> + E<sub>deforestación</sub>) - C<sub>bosques</sub></div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800 text-center">
                  <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">Balance {">"} 0</div>
                  <div className="font-semibold">Emisor Neto</div>
                  <div className="text-sm text-muted-foreground">Emite más de lo que captura</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 text-center">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">Balance ≈ 0</div>
                  <div className="font-semibold">Equilibrio</div>
                  <div className="text-sm text-muted-foreground">Emisiones ≈ Captura</div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">Balance {"<"} 0</div>
                  <div className="font-semibold">Sumidero Neto</div>
                  <div className="text-sm text-muted-foreground">Captura más de lo que emite</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Índice de Equilibrio Climático (IEC) */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Índice de Equilibrio Climático (IEC)</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Para facilitar la comparación entre municipios, el balance de carbono (en toneladas) se normaliza
                a un <strong className="text-foreground">índice de 0 a 100</strong> usando estadística robusta:
              </p>

              <div className="bg-background p-6 rounded-lg border space-y-4">
                <div>
                  <div className="font-semibold mb-2">Paso 1: Normalización Robusta</div>
                  <div className="font-mono text-sm bg-muted p-3 rounded">
                    Balance<sub>normalizado</sub> = (Balance - Mediana) / IQR
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Usa mediana e IQR (rango intercuartílico) para reducir el efecto de valores extremos.
                  </p>
                </div>

                <div>
                  <div className="font-semibold mb-2">Paso 2: Transformación Sigmoide</div>
                  <div className="font-mono text-sm bg-muted p-3 rounded">
                    IEC = [1 / (1 + e<sup>-0.5x</sup>)] × 100
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprime valores extremos y escala a 0-100.
                  </p>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-3">Clasificación por IEC:</div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 w-16">0-40</div>
                    <div>
                      <div className="font-semibold">SUMIDERO</div>
                      <div className="text-sm text-muted-foreground">Captura más CO₂ del que emite</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 w-16">41-60</div>
                    <div>
                      <div className="font-semibold">EQUILIBRIO / TRANSICIÓN</div>
                      <div className="text-sm text-muted-foreground">Captura ≈ Emisiones</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-rose-50 dark:bg-rose-950/20 rounded-lg border border-rose-200 dark:border-rose-800">
                    <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 w-16">61-100</div>
                    <div>
                      <div className="font-semibold">EMISOR NETO</div>
                      <div className="text-sm text-muted-foreground">Emite más CO₂ del que captura</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-sm font-semibold mb-1">⚠️ Nota importante:</p>
                <p className="text-sm">
                  El IEC es un <strong>índice normalizado sin unidades</strong>, no son toneladas de CO₂.
                  Es una calificación de 0 a 100 para facilitar la comparación entre municipios.
                </p>
              </div>
            </div>
          </Card>

          {/* Perfiles Municipales (Clustering) */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Perfiles Municipales (Machine Learning)</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Mediante <strong className="text-foreground">clustering K-Means</strong> (algoritmo de aprendizaje no supervisado), se identificaron
                <strong className="text-foreground"> 4 perfiles municipales</strong> según su estructura de emisiones:
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <div className="font-semibold mb-2">Variables utilizadas:</div>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Proporción de emisiones por Energía</li>
                  <li>Proporción de emisiones por Agricultura</li>
                  <li>Proporción de emisiones por LULUCF (deforestación)</li>
                  <li>Balance per cápita</li>
                </ul>
              </div>

              <div className="grid gap-4 mt-6">
                <div className="bg-green-50 dark:bg-green-950/20 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <h3 className="text-lg font-bold">Agrícola-Ganadero</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Economía rural basada en agricultura y ganadería. Alta proporción de emisiones por fermentación
                    entérica del ganado y suelos agrícolas. Población típicamente baja.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-lg border-2 border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-600"></div>
                    <h3 className="text-lg font-bold">Industrial-Urbano</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ciudades grandes y zonas industriales. Alta proporción de emisiones por energía (electricidad, transporte)
                    y procesos industriales (IPPU). Población alta.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-5 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <h3 className="text-lg font-bold">Mixto-Transición</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Economía diversa con actividades agrícolas, comerciales y de servicios. Emisiones balanceadas entre
                    varios sectores. Población y características intermedias.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                    <h3 className="text-lg font-bold">Sumideros Forestales</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alta cobertura boscosa que genera captura significativa de CO₂. Balance generalmente negativo
                    (sumidero neto). Baja deforestación y emisiones moderadas.
                  </p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="text-sm font-semibold mb-2">Método de clustering:</p>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Algoritmo: K-Means (sklearn)</li>
                  <li>Número de clusters: k=4 (determinado por análisis de silueta y método del codo)</li>
                  <li>Estandarización: Z-score (StandardScaler)</li>
                  <li>Coeficiente de silueta: ~0.45 (separación moderada-buena)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Referencias */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Referencias Científicas</h2>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">IPCC (2006)</div>
                <div className="text-muted-foreground">
                  2006 IPCC Guidelines for National Greenhouse Gas Inventories. Intergovernmental Panel on Climate Change.
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">IPCC (2019)</div>
                <div className="text-muted-foreground">
                  2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories.
                  Intergovernmental Panel on Climate Change.
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">IDEAM et al. (2018)</div>
                <div className="text-muted-foreground">
                  Segundo Informe Bienal de Actualización de Colombia. IDEAM, PNUD, MADS, DNP, CANCILLERÍA.
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">UPME (2019)</div>
                <div className="text-muted-foreground">
                  Factor de Emisión de CO₂ del Sistema Interconectado Nacional. Unidad de Planeación Minero Energética, Colombia.
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">DANE</div>
                <div className="text-muted-foreground">
                  Departamento Administrativo Nacional de Estadística. Datos socioeconómicos y poblacionales.
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="font-semibold">Global Forest Watch</div>
                <div className="text-muted-foreground">
                  Pérdida de cobertura arbórea 2019. World Resources Institute.
                </div>
              </div>
            </div>
          </Card>

          {/* Footer info */}
          <div className="text-center text-sm text-muted-foreground pt-4">
            <p>
              Metodología implementada por <strong>Colectivo HAGAMOS</strong> para EcoBalance360
            </p>
            <p className="mt-1">
              Datos base: Año 2019 • 87 municipios de Santander, Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
