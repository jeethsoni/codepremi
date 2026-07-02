export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 text-center sm:items-start sm:text-left">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Welcome
          </span>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-primary">
            Build something bold.
          </h1>
          <p className="max-w-md text-lg leading-8 text-subtitle">
            A pink, orange, and black theme with slate-grey subtitles. Edit the
            page.tsx file to get started.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-foreground transition-colors hover:bg-primary-hover"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-accent px-6 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>

        {/* Palette preview */}
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          <Swatch label="Pink" hex="#EC407A" className="bg-primary" />
          <Swatch label="Orange" hex="#FB8C00" className="bg-accent" />
          <Swatch label="Subtitle" hex="#546E7A" className="bg-subtitle" />
          <Swatch
            label="Black"
            hex="#000000"
            className="border border-white/20 bg-background"
          />
        </div>
      </main>
    </div>
  );
}

function Swatch({
  label,
  hex,
  className,
}: {
  label: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-lg ${className}`} />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-xs text-subtitle">{hex}</span>
      </div>
    </div>
  );
}
