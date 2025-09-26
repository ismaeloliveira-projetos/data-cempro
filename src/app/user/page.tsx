"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
}

export default function UserPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (!token) {
      window.location.href = "/client";
    } else {
      setRole(storedRole);
      setProducts([
        {
          id: 1,
          nome: "ContabilPro",
          descricao: "Gestão contábil completa para empresas.",
          preco: "R$ 499/mês",
        },
        {
          id: 2,
          nome: "FinanceSoft",
          descricao: "Controle financeiro e emissão de notas fiscais.",
          preco: "R$ 299/mês",
        },
        {
          id: 3,
          nome: "ERP Fácil",
          descricao: "ERP para pequenas e médias empresas contábeis.",
          preco: "R$ 699/mês",
        },
        {
          id: 4,
          nome: "FiscalWeb",
          descricao: "Acompanhamento de obrigações fiscais online.",
          preco: "R$ 199/mês",
        },
      ]);
    }
  }, []);

  function handleDelete(id: number) {
    if (role !== "Admin") return;
    setProducts(products.filter((p) => p.id !== id));
  }

  function handleEdit(id: number) {
    if (role !== "Admin") return;
    const novoNome = prompt("Novo nome do produto:");
    if (novoNome) {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, nome: novoNome } : p))
      );
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Softwares e Plataformas Contábeis
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {product.nome}
            </h2>
            <p className="text-gray-300 mb-4">{product.descricao}</p>
            <p className="text-green-400 font-bold mb-4">{product.preco}</p>

            {role === "Admin" && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-white py-2 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 rounded"
                >
                  Deletar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
