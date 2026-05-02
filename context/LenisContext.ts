"use client"
import { createContext, RefObject } from "react";
import Lenis from "@studio-freight/lenis";

export const LenisContext = createContext<{
  lenis: RefObject<Lenis | null>;
}>({
  lenis: { current: null },
});