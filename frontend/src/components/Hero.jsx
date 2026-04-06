import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.3),transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass relative mx-auto max-w-7xl rounded-3xl p-10"
      >
        <p className="mb-3 text-cyan-300">Exclusive Spring Drop</p>
        <h1 className="mb-4 text-4xl font-black md:text-6xl">Luxury Motion. Ocean Soul.</h1>
        <p className="mb-8 max-w-2xl text-slate-300">Premium curated clothes, shoes, and jewelry with animated shopping experiences.</p>
        <Link className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950" to="/shop">Shop Now</Link>
      </motion.div>
    </section>
  );
}
