"use client";

import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import MuseumsList from "./_components/MuseumsList";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <MuseumsList />
    </div>
  );
}
