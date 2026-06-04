"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/content/skills";
import { cn } from "@/lib/utils";

type SkillBarProps = {
  skill: Skill;
};

const levelLabels: Record<Skill["level"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <Badge variant="outline" className="font-mono text-[10px]">
          {levelLabels[skill.level]}
        </Badge>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]",
          )}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}