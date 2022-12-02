import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercelAdapter from "solid-start-vercel";

export default defineConfig({
  plugins: [
    solid({
      adapter: vercelAdapter(),
    }),
  ],
});
