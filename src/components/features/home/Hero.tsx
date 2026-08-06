import Image from "next/image";
import HeroFeatures from "./HeroFeatures";
import AIAssistantButton from "../../common/AIAssistantButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Smart shopping, powered by AI
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Your AI Assistant for{" "}
              <span className="text-green-600">Smarter Grocery Shopping</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-slate-500">
              Discover fresh products, get personalized recommendations and
              cook amazing meals with the power of AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                Shop Now
              </button>
              <AIAssistantButton variant="outline">Ask AI Assistant</AIAssistantButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <Image
              src="/images/hero/hero-phone.png"
              alt="FoodHub AI Assistant app preview"
              width={400}
              height={600}
              className="mx-auto h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <HeroFeatures />
      </div>
    </section>
  );
}