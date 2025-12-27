"use client";

import ContantSection from "@/app/components/about/ContantSection";
import StorySection from "@/app/components/about/StorySection";
import TeamSection from "@/app/components/about/TeamSection";
import ValuesSection from "@/app/components/about/ValuesSection";
import Container from "@/app/components/Container/Container";
import ClientLayout from "@/app/layout/ClientLayout";
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
