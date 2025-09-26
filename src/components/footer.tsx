import Link from "next/link";
import { Github, Twitter, DiscIcon as Discord } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-red-600/40 bg-gradient-to-t from-black via-neutral-900 to-black backdrop-blur-md">
      <div className="container px-6 py-10">
        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Coluna empresa */}
          <div>
            <h3 className="font-bold mb-3 text-red-500 text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-400 transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-red-400 transition-colors"
                >
                  Nosso time
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-red-400 transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna ajuda */}
          <div>
            <h3 className="font-bold mb-3 text-red-500 text-lg">Ajuda</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-red-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-red-400 transition-colors"
                >
                  Suporte
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-red-400 transition-colors"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-red-400 transition-colors"
                >
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna redes sociais */}
          <div>
            <h3 className="font-bold mb-3 text-red-500 text-lg">Redes</h3>
            <div className="flex space-x-6">
              <Link
                href="https://twitter.com"
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.com"
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <Discord className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-10 border-t border-red-600/40 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} DataCempro. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 md:hidden">
            <Link
              href="https://twitter.com"
              className="hover:text-red-500 transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://discord.com"
              className="hover:text-red-500 transition-colors"
            >
              <Discord className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com"
              className="hover:text-red-500 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
