"use server";

import { cookies } from "next/headers";

export async function setCookie(name, data) {
  const cookieStore = await cookies();

  cookieStore.set(name, data);
}

export async function deleteCookie(name) {
  const cookieStore = await cookies();

  cookieStore.delete(name);
}

export async function hasCookie(name) {
  const cookieStore = await cookies();

  return cookieStore.has(name);
}

export async function getCookie(name) {
  const cookieStore = await cookies();

  return cookieStore.get(name);
}
