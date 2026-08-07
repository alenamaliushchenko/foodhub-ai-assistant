import Link from "next/link";
import FormInput from "@/components/common/FormInput";
import AuthCard from "./AuthCard";

export default function ForgotPasswordForm() {
  return (
    <AuthCard title="Forgot Password" subtitle="Enter your email and we'll send you a link to reset your password.">
      <form className="flex flex-col gap-4">
        <FormInput label="Email" type="email" name="email" placeholder="alona@example.com" />

        <button
          type="submit"
          className="mt-2 rounded-lg bg-green-600 py-2.5 font-semibold text-white transition hover:bg-green-700"
        >
          Send Reset Link
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        <Link href="/login" className="font-semibold text-green-600 hover:text-green-700">
          Back to Login
        </Link>
      </p>
    </AuthCard>
  );
}