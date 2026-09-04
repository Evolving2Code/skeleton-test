import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecognitionCards from "@/components/RecognitionCards";
import MyNotes from "@/components/MyNotes";
import PlatformTabs from "@/components/PlatformTabs";
import TrustedBy from "@/components/TrustedBy";
import CustomerStories from "@/components/CustomerStories";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RecognitionCards />
        <MyNotes />
        <PlatformTabs />
        <TrustedBy />
        <CustomerStories />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
