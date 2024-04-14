import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// ミドルウェアが認証を検証するまで保護されたルートのレンダリングが開始されず、アプリケーションのセキュリティとパフォーマンスの両方が向上
export default NextAuth(authConfig).auth;

export const config = {
  // 特定のパスで実行するように指定
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
