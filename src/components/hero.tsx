"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const phoneNumber = "5511999999999"; // Substitua pelo seu número
  const message = "Olá! Gostaria de falar com vocês.";

  return (
    <div className="relative">
      {/* Fundo vermelho */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-600 to-red-400" />

      {/* Conteúdo central */}
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Tecnologia contábil focada no ser.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Sistemas contábeis integrados que contribuem para a evolução do seu
            negócio. Mais do que softwares: nos dedicamos a entregar soluções
            que fazem a diferença na rotina contábil, com inovação, propósito,
            eficiência e agilidade.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <Button size="lg" className="rounded-full">
                Quero ser cliente
              </Button>
            </Link>
            <Link href="/client">
              <Button size="lg" variant="outline" className="rounded-full">
                Já sou cliente
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Setinha para baixo */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={40} />
      </div>

      {/* Botão do WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
