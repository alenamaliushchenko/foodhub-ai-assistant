import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import AuthCard from "./AuthCard";

export default function LoginForm() {
  return (
    <AuthCard title="Login to FoodHub" subtitle="Welcome back! Please login to your account.">
      <form className="flex flex-col gap-4">
        <FormInput label="Email" type="email" name="email" placeholder="alona@example.com" />
        <FormInput label="Password" type="password" name="password" placeholder="••••••••" />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="rounded border-slate-300" />
            Remember me
          </label>
          <Link href="/forgot-password" className="font-medium text-green-600 hover:text-green-700">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-green-600 py-2.5 font-semibold text-white transition hover:bg-green-700"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-green-600 hover:text-green-700">
          Register
        </Link>
      </p>
    </AuthCard>
  );
}