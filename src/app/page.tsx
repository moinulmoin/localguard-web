import Feature from "@/components/feature";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Chrome, Shield } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen justify-center items-center flex flex-col">
      <main className="container lg:border lg:border-border lg:shadow mx-auto rounded-lg px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            LocalGuard
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/70 mb-12 text-balance">
            Automatically manage Chrome extensions when developing on localhost. Focus on coding,
            we&apos;ll handle the extensions.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/localguard/ddankakpahmpdkihalnmgehjefnbjnkn"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-auto w-auto py-4 px-8  ",
              "transition-all transform hover:scale-105"
            )}
          >
            Install LocalGuard
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <Feature
              icon={Chrome}
              title="Automatic Extension Management"
              description="Automatically disables extensions when visiting localhost and restores them when leaving."
            />
            <Feature
              icon={Shield}
              title="Development Protection"
              description="Prevents extension interference with your local development environment."
            />
            <Feature
              icon={Check}
              title="State Preservation"
              description="Remembers which extensions were enabled and restores them exactly as they were."
            />
            <Feature
              icon={ArrowRight}
              title="Perfect for Next.js Development"
              description="Specially optimized for Next.js development workflow and other modern frameworks."
            />
          </div>
        </div>
      </main>

      <footer className="w-full py-4 border-t md:fixed md:bottom-0">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            built by{" "}
            <a
              href="https://x.com/immoinulmoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Moinul Moin
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
