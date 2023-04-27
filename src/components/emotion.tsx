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
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
