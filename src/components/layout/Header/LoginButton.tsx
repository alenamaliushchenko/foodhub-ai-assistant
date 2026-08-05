import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      Login
    </Link>
  );
}