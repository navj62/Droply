import { ReactNode } from "react";
import { CloudUpload, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-default-50">
      <Navbar />

      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-default-200 bg-default-50 shadow-xl lg:grid-cols-2">
          <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-8 text-white lg:flex">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
                <CloudUpload className="h-4 w-4" />
                Droply Secure Cloud
              </div>
              <h1 className="text-4xl font-bold leading-tight">{title}</h1>
              <p className="max-w-md text-white/90">{subtitle}</p>
            </div>

            <div className="relative space-y-4 text-sm">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                Industry-standard authentication and secure sessions.
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                <Sparkles className="h-5 w-5 flex-shrink-0" />
                Fast, refined sign-in and sign-up flow on all devices.
              </div>
            </div>
          </section>

          <section className="flex min-h-[560px] items-center justify-center bg-default-50 p-4 sm:p-8">
            <div className="w-full max-w-md">{children}</div>
          </section>
        </div>
      </main>

      <footer className="border-t border-default-200 bg-default-50 py-4 text-center text-sm text-default-500">
        &copy; {new Date().getFullYear()} Droply. All rights reserved.
      </footer>
    </div>
  );
}
