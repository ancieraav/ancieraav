"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  FileText,
  Folder,
  Home,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { siteConfig } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go(`#${SECTION_IDS.hero}`)}>
            <Home className="size-4" />
            Home
          </CommandItem>
          <CommandItem onSelect={() => go(`#${SECTION_IDS.about}`)}>
            <User className="size-4" />
            About
          </CommandItem>
          <CommandItem onSelect={() => go(`#${SECTION_IDS.projects}`)}>
            <Folder className="size-4" />
            Projects
          </CommandItem>
          <CommandItem onSelect={() => go("/blog/")}>
            <FileText className="size-4" />
            Blog
          </CommandItem>
          <CommandItem onSelect={() => go(`#${SECTION_IDS.contact}`)}>
            <Mail className="size-4" />
            Contact
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => setTheme("light")}>
            <Sun className="size-4" />
            Light mode
            {theme === "light" ? " ✓" : ""}
          </CommandItem>
          <CommandItem onSelect={() => setTheme("dark")}>
            <Moon className="size-4" />
            Dark mode
            {theme === "dark" ? " ✓" : ""}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          {siteConfig.socials.map((s) => (
            <CommandItem
              key={s.href}
              onSelect={() => window.open(s.href, "_blank")}
            >
              {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}