import Hero from "@/components/features/home/Hero";
import Categories from "@/components/features/home/Categories";
import MealIdeas from "@/components/features/home/MealIdeas";
import TrustedBy from "@/components/features/home/TrustedBy";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <MealIdeas />
      <TrustedBy />
    </main>
  );
}