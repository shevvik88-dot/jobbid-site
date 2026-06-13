import {
  Zap,
  MapPin,
  FileText,
  Hammer,
  ArrowRight,
  Check,
} from "lucide-react";

function NavBar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-[1100px] mx-auto px-6 py-[18px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-lg bg-accent flex items-center justify-center">
            <Hammer size={16} className="text-white" />
          </div>
          <span className="font-semibold text-[17px] tracking-tight">jobbid</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
        </nav>

        <button className="bg-accent text-accent-foreground rounded-lg px-[18px] py-2.5 text-sm font-medium">
          Get started
        </button>
      </div>
    </header>
  );
}

function EstimateCard() {
  const rows = [
    { title: "Demolition", sub: "Remove fixtures, flooring, drywall", amount: "$1,850" },
    { title: "Plumbing", sub: "Rough-in, fixtures, vanity hookup", amount: "$3,200" },
    { title: "Tile & finishes", sub: "Floor and shower tile, paint, trim", amount: "$4,675" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden w-full max-w-[460px]">
      <div className="px-5 py-4 flex items-start justify-between border-b border-border">
        <div>
          <div className="font-semibold text-[15px]">Bathroom remodel</div>
          <div className="text-[13px] text-muted mt-0.5">Estimate #1042 · Maple Street</div>
        </div>
        <span className="bg-accent-light text-accent-dark text-xs font-medium px-2.5 py-1 rounded-full">
          Draft
        </span>
      </div>

      {rows.map((row) => (
        <div key={row.title} className="px-5 py-3.5 flex justify-between items-start border-b border-border">
          <div>
            <div className="text-sm font-medium">{row.title}</div>
            <div className="text-[13px] text-muted mt-0.5">{row.sub}</div>
          </div>
          <div className="text-sm font-mono whitespace-nowrap">{row.amount}</div>
        </div>
      ))}

      <div className="px-5 py-4 flex justify-between items-center">
        <div className="font-semibold text-[15px]">Total</div>
        <div className="font-bold text-lg font-mono">$9,725</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-18 md:py-24 flex gap-12 items-center flex-wrap">
      <div className="flex-1 min-w-[320px]">
        <h1 className="text-[40px] md:text-[46px] leading-tight font-bold tracking-tight">
          Generate accurate construction estimates in minutes
        </h1>
        <p className="text-lg leading-relaxed text-muted mt-5 max-w-[460px]">
          Jobbid builds detailed estimates for roof, flooring, kitchen, and
          bathroom remodels using real local pricing — so your numbers hold up.
        </p>
        <div className="flex gap-3 mt-7">
          <button className="bg-accent text-accent-foreground rounded-lg px-[22px] py-3 text-[15px] font-medium flex items-center gap-2">
            Try for free <ArrowRight size={16} />
          </button>
          <button className="bg-card text-foreground border border-border rounded-lg px-[22px] py-3 text-[15px] font-medium">
            Watch demo
          </button>
        </div>
      </div>

      <div className="flex-1 min-w-[360px] flex justify-center">
        <EstimateCard />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex-1 min-w-[240px]">
      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center text-accent-dark mb-4">
        {icon}
      </div>
      <div className="font-semibold text-[15px] mb-1.5">{title}</div>
      <div className="text-sm text-muted leading-relaxed">{desc}</div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="max-w-[1100px] mx-auto px-6 pb-24">
      <div className="flex gap-4 flex-wrap">
        <FeatureCard icon={<Zap size={18} />} title="Fast estimates" desc="Turn a project description into a line-item estimate in minutes." />
        <FeatureCard icon={<MapPin size={18} />} title="Local pricing data" desc="Material and labor costs pulled from real pricing in your area." />
        <FeatureCard icon={<FileText size={18} />} title="Auto-generated contracts" desc="Send a clean, ready-to-sign contract straight from any estimate." />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Describe the job", desc: "Tell jobbid what the project involves — room type, scope, and any special requirements." },
    { title: "Get a detailed estimate", desc: "Jobbid breaks the job into labor and material line items, priced for your area." },
    { title: "Send a contract", desc: "Turn the estimate into a ready-to-sign contract and send it to your client." },
  ];

  return (
    <section id="how" className="max-w-[1100px] mx-auto px-6 pb-24">
      <h2 className="text-[28px] font-semibold tracking-tight mb-8">How it works</h2>
      <div className="flex gap-6 flex-wrap">
        {steps.map((step, i) => (
          <div key={step.title} className="flex-1 min-w-[220px]">
            <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-[13px] font-semibold text-accent-dark mb-3.5">
              {i + 1}
            </div>
            <div className="font-semibold text-[15px] mb-1.5">{step.title}</div>
            <div className="text-sm text-muted leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$39",
      desc: "For solo contractors who want fast, accurate estimates.",
      features: ["Unlimited estimates", "Roof, flooring, kitchen, bathroom", "Local pricing data", "Email support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$99",
      desc: "For contractors who want to go from estimate to signed contract.",
      features: ["Everything in Starter", "Auto-generated contracts", "E-signature workflow", "Priority support"],
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="max-w-[1100px] mx-auto px-6 pb-24">
      <h2 className="text-[28px] font-semibold tracking-tight mb-8">Pricing</h2>
      <div className="flex gap-5 flex-wrap">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 min-w-[260px] bg-card rounded-xl p-7 border ${
              plan.highlighted ? "border-accent" : "border-border"
            }`}
          >
            {plan.highlighted && (
              <span className="bg-accent-light text-accent-dark text-xs font-medium px-2.5 py-1 rounded-full">
                Most popular
              </span>
            )}
            <div className={plan.highlighted ? "mt-3.5" : ""}>
              <div className="text-[17px] font-semibold">{plan.name}</div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-[32px] font-bold">{plan.price}</span>
                <span className="text-sm text-muted">/mo</span>
              </div>
              <p className="text-sm text-muted mt-2.5 leading-relaxed">{plan.desc}</p>
              <ul className="list-none p-0 my-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm mb-2.5">
                    <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-medium ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground border border-border"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 py-7 flex justify-between text-[13px] text-muted">
        <span>© 2026 jobbid. All rights reserved.</span>
        <span>jobbid.app</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}
