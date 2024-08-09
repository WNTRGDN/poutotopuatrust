import { cookies } from "next/headers"

export async function createCookie(value: string) {
  if (value === "") return;
  cookies().set({
    name: "campaign",
    value: value,
    httpOnly: true,
    secure: true,
    path: "/"
  })
}