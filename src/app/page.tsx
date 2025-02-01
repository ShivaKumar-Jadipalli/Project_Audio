"use client";
import HeaderPresentation from "./landing/presentation/header";
import FeaturePresentation from "./landing/presentation/feature";
import LogosPresentation from "./landing/presentation/logos";
import DevFreePresentation from "./landing/presentation/developerFree";
import PalettePresentationFree from "./landing/presentation/palette";
import CodePresentation from "./landing/presentation/code";
import FreeToProPresentation from "./landing/presentation/freeToPro";
import AstroPresentation from "./landing/presentation/astro";
import PagesFreePresentation from "./landing/presentation/pagesFree";
import GithubPresentation from "./landing/presentation/github";
import PricingPresentation from "./landing/presentation/pricing";
import FooterFreePresentation from "./landing/presentation/footerFree";
import HeaderLanding from "./landing/presentation/headerlanding";
import CategoriesSection from "./landing/presentation/categories";
import ContentSection from "./landing/presentation/content";
import BasicSection from "./landing/presentation/starterPack";
import TestimonialSection from "./landing/presentation/testimonials";
import FooterSection from "./landing/presentation/footerlanding";
import Pricing from "./landing/presentation/Pricings";
import AuthHeader from "./landing/presentation/AuthHeader";
export default function Home() {
  return (
    <main>
      <AuthHeader />
      <p>part one done </p>
      <Pricing />
      <HeaderPresentation />
      <FeaturePresentation />
      <LogosPresentation />
      <DevFreePresentation />
      <PalettePresentationFree />
      <CodePresentation />
      <FreeToProPresentation />
      <AstroPresentation />
      <PagesFreePresentation />
      <PricingPresentation />
      <GithubPresentation />
      <FooterFreePresentation />
      <HeaderLanding />
      <CategoriesSection />
      <ContentSection />
      <BasicSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  );
}
