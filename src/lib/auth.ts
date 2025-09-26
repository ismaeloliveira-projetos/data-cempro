

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions: AuthOptions = {
,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        emailOrUser: { label: "User", type: "text" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(credentials): Promise<{
        id: string;

        password: string;
      } | null> {
        if (!credentials?.emailOrUser || !credentials?.password)
          throw new Error("Dados de Login necessarios");

        // Tentativa de login como administrador
        const foundUser = await db.customer.findFirst({
          where: { email: credentials.emailOrUser },
        });

        if (!foundUser) throw new Error("Usuário não cadastrado!");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          foundUser.password,
        );

        if (!matchPassword) {
          throw new Error("Senha incorreta!");
        }

        return {
          ...foundUser,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 3600 segundos = 1 hora
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    error: "/login",
    signOut: "/",
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
        if ("fl_role" in user) {
          token.fl_role = user.fl_role;
        }
        if ("user" in user) {
          token.user = user.user;
        }
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = String(token.id);
      session.user.fl_role = String(token.fl_role);

      // Opção 1: Usar operador de coalescência nula
      session.user.user = String(token.user ?? "");

      // OU Opção 2: Verificar se existe antes
      if (token.user) {
        session.user.user = String(token.user);
      }

      // OU Opção 3: Verificar e atribuir um valor padrão se não existir
      session.user.user = token.user ? String(token.user) : "";

      return session;
    },
  },
};
