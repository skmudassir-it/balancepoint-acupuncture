"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ProjectsClient() {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Success Stories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real transformations from real patients. See how BalancePoint
            Acupuncture has helped people reclaim their health and vitality.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Tabs + Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Tabs
          value={activeCategory}
          onValueChange={(v: string | null) => setActiveCategory(v || "All")}
        >
          <TabsList className="mx-auto mb-10 flex-wrap justify-center">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="glass-card flex flex-col overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="flex h-48 items-center justify-center bg-muted overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No stories found for this category.
          </p>
        )}
      </section>
    </main>
  );
}
