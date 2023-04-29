"use client";
import { useGluedEmotionCache } from "./emotionNextjsGlue";
import { CacheProvider } from "@emotion/react";
import { MantineProvider } from "@mantine/core";

export default function EmotionProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const cache = useGluedEmotionCache();
  return (
    <CacheProvider value={cache}>
      {/* You can wrap ColorSchemeProvider right here but skipping that for brevity ;) */}
      <MantineProvider
        theme={{
          colorScheme: "dark",
          primaryColor: "orange",
          primaryShade: { dark: 5, light: 7 },
          colors: {
            dark: [
              "#f5f5f4",
              "#e7e5e4",
              "#d6d3d1",
              "#a8a29e",
              "#78716c",
              "#57534e",
              "#44403c",
              "#292524",
              "#1c1917",
              "#0c0a09",
            ],
            orange: [
              "#fffbeb",
              "#fef3c7",
              "#fde68a",
              "#fcd34d",
              "#fbbf24",
              "#f59e0b",
              "#d97706",
              "#b45309",
              "#92400e",
              "#78350f",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
