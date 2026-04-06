import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import NewsletterBox from '../components/NewsletterBox';
import NotificationCenter from '../components/NotificationCenter';
import { products } from '../data/mockData';

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <section className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {products.slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)}
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        <NewsletterBox />
        <NotificationCenter />
      </section>
    </div>
  );
}
