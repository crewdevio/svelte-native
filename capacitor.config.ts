import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.svelte.app",
  appName: "svelte-native",
  bundledWebRuntime: true,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
    },
  },
};

export default config;
