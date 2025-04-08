import ky from "ky";

export const dddAPI = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_DDD_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
