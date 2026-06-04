"use client";

import { useMemo, useState } from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <SectionShell
      id={SECTION_IDS.projects}
      title="Projects"
      subtitle="Selected work across web, mobile, and AI."
    >
      <Tabs
        value={filter}
        onValueChange={(v) => setFilter(v as ProjectCategory)}
        className="mb-10"
      >
        <TabsList>
          {projectFilters.map((f) => (
            <TabsTrigger key={f.value} value={f.value}>
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}