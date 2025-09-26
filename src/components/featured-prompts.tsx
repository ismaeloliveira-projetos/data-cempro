import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const featuredPrompts = [
  {
    id: 1,
    title: "WinLivros",
    description:
      "Sistema de livros fiscais atualizado nas legislações para apuração de Impostos Federais, Estaduais e Municipais. Integrações com SPED e SINTEGRA.",
  },
  {
    id: 2,
    title: "GestaCon",
    description:
      "Gestão de condomínios com orçamentos, boletos automáticos, controle financeiro e relatórios de inadimplência.",
  },
  {
    id: 3,
    title: "CTePlus",
    description:
      "Emissão de CT-e, MDF-e, CT-e-OS e gestão de frota para pequenas transportadoras com módulo financeiro integrado.",
  },
];

export function FeaturedPrompts() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 drop-shadow-lg">
          🚀 Conheça nossas soluções
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrompts.map((prompt) => (
            <Card
              key={prompt.id}
              className="group relative overflow-hidden bg-neutral-900/80 border border-red-600/40 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]"
            >
              {/* Glow no fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-red-600/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <CardHeader>
                <div>
                  <CardTitle className="text-lg font-bold text-white">
                    {prompt.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-300">
                    {prompt.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-1 text-red-400">
                  <span className="text-sm font-medium">★ ★ ★ ★ ★</span>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Button className="bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/40 hover:shadow-red-500/70 hover:scale-105 transition-transform duration-300">
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
