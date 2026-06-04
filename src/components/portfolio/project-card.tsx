"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.href} target="_blank" rel="noopener noreferrer">
      <Card
        className={cn(
          "group h-full transition-all duration-300 hover:-translate-y-1 hover:glow-border",
          project.featured && "border-[var(--gradient-end)]/30",
        )}
      >
        <CardHeader className="flex-row items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              {project.year}
            </p>
            <CardTitle className="mt-1 text-lg">{project.title}</CardTitle>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}