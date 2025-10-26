export default function Blog() {
  const posts = [
    {
      id: 'b1',
      title: 'Inside the Mark VII: Materials and Fit',
      excerpt: 'We deconstruct the iconic assault-class armour and explore composite layering, exo-fit tolerances, and weight distribution.',
      badge: 'Engineering',
      gradient: 'from-emerald-300/20 to-cyan-400/20',
    },
    {
      id: 'b2',
      title: 'Powering Repulsors Safely',
      excerpt: 'A safety-first guide to handling energy modules, cooling pathways, and thermal management for extended use.',
      badge: 'Safety',
      gradient: 'from-rose-300/20 to-fuchsia-400/20',
    },
    {
      id: 'b3',
      title: 'Nanotech: Myths vs Reality',
      excerpt: 'Separating cinematic fantasy from lab-tested kits. What your gauntlet can and cannot do.',
      badge: 'Research',
      gradient: 'from-amber-300/20 to-lime-400/20',
    },
  ];

  return (
    <section id="blogs" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-emerald-300/80 text-xs tracking-widest uppercase mb-2">Knowledge Base</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest from the Lab</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">Guides, teardown notes, and expert commentary to help you get the most from your StarkWorks gear.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-white/10 overflow-hidden bg-neutral-950 hover:bg-neutral-900/60 transition">
              <div className={`h-32 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-5">
                <span className="inline-flex text-xs text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-1 mb-3">{p.badge}</span>
                <h3 className="font-semibold text-lg group-hover:text-white">{p.title}</h3>
                <p className="text-neutral-400 text-sm mt-2">{p.excerpt}</p>
                <div className="mt-4 text-sm text-emerald-300">Read more →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
