import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-10 flex flex-col gap-12">
          <Hero />
          <Features />
        </div>
      </main>

      <Footer />
    </div>
  );
}