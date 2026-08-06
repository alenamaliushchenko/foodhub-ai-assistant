import Image from "next/image";
import AIAssistantButton from "../../common/AIAssistantButton";

const meals = [
  { title: "Avocado Salad", time: "15 min", level: "Easy", image: "/images/meals/avocado-salad.jpg" },
  { title: "Oatmeal with Berries", time: "10 min", level: "Easy", image: "/images/meals/oatmeal-berries.jpg" },
  { title: "Chicken Stir Fry", time: "20 min", level: "Medium", image: "/images/meals/chicken-stir-fry.jpg" },
];

export default function MealIdeas() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="rounded-3xl bg-green-50 p-8 md:p-12">
        <div className="mx-auto mb-8 max-w-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            AI-Powered Meal Ideas For You
          </h2>
          <p className="mt-2 text-slate-600">
            Get personalized recipe ideas based on your preferences and
            ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {meals.map((meal) => (
            <div
              key={meal.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={meal.image}
                  alt={meal.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-800">{meal.title}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {meal.time} · {meal.level}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <AIAssistantButton variant="primary">Try AI Assistant</AIAssistantButton>
        </div>
      </div>
    </section>
  );
}