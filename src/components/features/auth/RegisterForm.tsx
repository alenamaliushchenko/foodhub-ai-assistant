import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import AuthCard from "./AuthCard";

export default function RegisterForm() {
  return (
    <AuthCard title="Create Account" subtitle="Join FoodHub and start shopping smarter.">
      <form className="flex flex-col gap-4">
        <FormInput label="Full Name" type="text" name="fullName" placeholder="Alona Maliushchenko" />
        <FormInput label="Email" type="email" name="email" placeholder="alona@example.com" />
        <FormInput label="Password" type="password" name="password" placeholder="••••••••" />

        <button
          type="submit"
          className="mt-2 rounded-lg bg-green-600 py-2.5 font-semibold text-white transition hover:bg-green-700"
        >
          Register
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">or continue with</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Google
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Apple
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-green-600 hover:text-green-700">
          Login
        </Link>
      </p>
    </AuthCard>
  );
}