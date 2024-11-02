import Image from "next/image";
import { redirect } from "next/navigation";
// views
import LoginView from "@/views/login";
// utils
import { getCookie } from "@/utils/cookies";
// assets
import backgroundPattern from "@/assets/background.svg";

export default async function Component() {
  const isAuthenticated = await getCookie("token");

  if (isAuthenticated) redirect("/dashboard");

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900">
          <Image src={backgroundPattern} alt="background pattern" fill objectFit="cover" />
        </div>
      </div>
      <div className="lg:p-8">
        <LoginView />
      </div>
    </div>
  );
}
