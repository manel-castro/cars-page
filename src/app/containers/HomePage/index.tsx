import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <div style={{ marginTop: "6em" }}></div>
      <BookCard />
      <div style={{ marginTop: "6em" }}></div>
      <BookingSteps />
      <div style={{ marginTop: "6em" }}></div>
      <AboutUs />
      <div style={{ marginTop: "6em" }}></div>
      <TopCars />
      <div style={{ marginTop: "6em" }}></div>
      <Footer />
    </PageContainer>
  );
}
