import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreasTicker from "@/components/PracticeAreasTicker";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Process from "@/components/Process";
import ToolsPreview from "@/components/ToolsPreview";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { posts } from "@/lib/posts";

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PracticeAreasTicker />
        <About />
        <PracticeAreas />
        <Process />
        <ToolsPreview />
        <BlogPreview posts={recentPosts} />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
