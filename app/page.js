import { redirect } from "next/navigation";
// views
import LoginView from "@/views/login";
import LoginBackground from "@/views/login/background";
// components
import ChangeTheme from "@/components/change-theme";
// utils
import { hasCookie } from "@/utils/cookies";

export default async function Login() {
  const isAuthenticated = await hasCookie("token");

  if (isAuthenticated) redirect("/accounts");

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <ChangeTheme fixedPosition />
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <LoginBackground />
      </div>
      <div className="lg:p-8">
        <LoginView />
      </div>
    </div>
  );
}
