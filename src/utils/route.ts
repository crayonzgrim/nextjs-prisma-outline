// import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/utils/connect';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

// export const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ]
};

export const getAuthSession = () => getServerSession(authOptions);
