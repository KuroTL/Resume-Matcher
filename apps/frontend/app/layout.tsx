import { ResumePreviewProvider } from '@/components/common/resume_previewer_context';
import '@/app/css/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ResumePreviewProvider>
          <main className="min-h-screen flex flex-col">{children}</main>
        </ResumePreviewProvider>
      </body>
    </html>
  );
}
