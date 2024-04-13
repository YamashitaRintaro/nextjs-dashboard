import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

// ルート レイアウトに追加した UI は、アプリケーション内のすべてのページで共有されます
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
