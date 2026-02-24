"use client";

import ContantSection from "@/app/components/about/ContantSection";
import StorySection from "@/app/components/about/StorySection";
import TeamSection from "@/app/components/about/TeamSection";
import ValuesSection from "@/app/components/about/ValuesSection";
import Header from "@/app/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      {/* <Container> */}

      <StorySection />
      <ValuesSection />
      <TeamSection />
      <ContantSection />
      {/* </Container> */}
    </>
  );
}
