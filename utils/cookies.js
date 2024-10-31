"use server";

import { cookies } from "next/headers";

export async function setCookie(name, data) {
  const cookieStore = await cookies();

  cookieStore.set(name, data);
}

export async function getCookie(name) {
  const cookieStore = await cookies();

  return cookieStore.has(name);
}
