export default function ContatoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black p-6">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-900/80 border border-red-600/40 shadow-lg p-8 relative overflow-hidden">
        {/* Glow futurista */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-red-600/20 to-transparent opacity-0 hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none" />

        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-6 text-center drop-shadow-lg z-10 relative">
          Fale conosco! <br />
          Entraremos em contato com você
        </h1>

        <form className="space-y-4 relative z-10">
          {/* Telefone */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium text-gray-200"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(99) 99999-9999"
              className="mt-1 w-full rounded-lg border border-red-600/50 bg-neutral-800 p-3 text-white placeholder-red-300 focus:border-red-500 focus:ring focus:ring-red-500/30"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@email.com"
              className="mt-1 w-full rounded-lg border border-red-600/50 bg-neutral-800 p-3 text-white placeholder-red-300 focus:border-red-500 focus:ring focus:ring-red-500/30"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-200"
            >
              Nos conte sobre o que você precisa
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Digite sua mensagem..."
              className="mt-1 w-full rounded-lg border border-red-600/50 bg-neutral-800 p-3 text-white placeholder-red-300 focus:border-red-500 focus:ring focus:ring-red-500/30"
            ></textarea>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-3 shadow-lg shadow-red-500/40 hover:shadow-red-500/70 hover:scale-105 transition-transform duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
