import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Fruits & Vegetables", count: "120+ items", image: "/images/categories/vegetables.jpg", slug: "fruits-vegetables" },
  { name: "Dairy & Eggs", count: "80+ items", image: "/images/categories/dairy.jpg", slug: "dairy-eggs" },
  { name: "Meat & Fish", count: "60+ items", image: "/images/categories/meat.jpg", slug: "meat-fish" },
  { name: "Bakery", count: "90+ items", image: "/images/categories/bakery.jpg", slug: "bakery" },
  { name: "Snacks", count: "100+ items", image: "/images/categories/snacks.jpg", slug: "snacks" },
  { name: "Beverages", count: "70+ items", image: "/images/categories/beverages.jpg", slug: "beverages" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Shop by Categories</h2>
        <Link href="/shop" className="text-sm font-semibold text-green-600 hover:text-green-700">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 text-center transition hover:border-green-300 hover:shadow-md"
          >
            <div className="relative h-28 w-full overflow-hidden sm:h-32">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition group-hover:scale-110"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-slate-800">{cat.name}</p>
              <p className="text-xs text-slate-400">{cat.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}