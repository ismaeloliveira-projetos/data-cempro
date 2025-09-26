"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface LoginFormProps {
  username: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormProps>();
  const router = useRouter();

  async function onSubmit(data: LoginFormProps) {
    const isAdmin = data.username === "Admin" && data.password === "125Adm";
    const isUser = data.username === "User" && data.password === "125User";

    if (isAdmin) {
      localStorage.setItem("token", "fake-token");
      localStorage.setItem("role", "Admin");
      router.push("/user");
    } else if (isUser) {
      localStorage.setItem("token", "fake-token");
      localStorage.setItem("role", "User");
      router.push("/user");
    } else {
      toast.error("Usuário ou senha incorretos");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Acesse sua conta
        </h2>

        <input
          placeholder="Usuário"
          {...register("username")}
          className="p-3 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
          className="p-3 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />

        <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded font-semibold transition">
          Entrar
        </button>

        <div className="text-center text-sm text-gray-400 mt-2">
          Não tem conta?{" "}
          <a href="#" className="underline text-blue-400 hover:text-blue-300">
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
}
