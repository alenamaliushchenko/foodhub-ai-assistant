import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import SearchButton from "./SearchButton";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <SearchButton />

      <CartButton />

      <LoginButton />
    </div>
  );
}