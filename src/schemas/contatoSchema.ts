import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

export type ContatoSchemaType = z.infer<typeof contatoSchema>;
