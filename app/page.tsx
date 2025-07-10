"use client";

import { TabType } from "@/types/tabs-list";
import { useState } from "react";
import Header from "@/components/layouts/header";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import MainLayout from "@/components/pages/main";
import BannerSection from "@/components/pages/hotel/banner";
import PlanTripSection from "@/components/pages/hotel/plan-trip";
import FeaturedHotelsSection from "@/components/pages/hotel/featured-hotels";
import InspirationTripSection from "@/components/pages/hotel/inspiration-trip";
import TrendingCitiesSection from "@/components/pages/flight/trending-cities";
import AirlinePartnerSection from "@/components/pages/flight/airline-partners";
import BookTransferBannerSection from "@/components/pages/book-transfer/banner";
import PopularCarSection from "@/components/pages/book-transfer/popular-car";
import PopularDestinationSection from "@/components/pages/book-transfer/popular-destination";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("hotel");

  return (
    <>
      <Navbar />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainLayout>
        {activeTab === "hotel" && (
          <>
            <BannerSection />
            <PlanTripSection />
            <FeaturedHotelsSection />
          </>
        )}
        {activeTab === "flight" && (
          <>
            <TrendingCitiesSection />
            <AirlinePartnerSection />
            <FeaturedHotelsSection />
          </>
        )}
        {activeTab === "book-transfer" && (
          <>
            <BookTransferBannerSection />
            <PopularCarSection />
            <PopularDestinationSection />
          </>
        )}
        <InspirationTripSection />
      </MainLayout>
      <Footer />
    </>
  );
}
