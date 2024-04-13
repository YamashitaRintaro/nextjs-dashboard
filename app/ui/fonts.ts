// Next.js はビルド時にフォント ファイルをダウンロードし、他の静的アセットとともにホストします。
// これは、ユーザーがアプリケーションにアクセスしたときに、パフォーマンスに影響を与えるようなフォントに対する追加のネットワーク要求がないことを意味します。
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
