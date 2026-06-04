import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="font-mono text-6xl font-bold text-muted-foreground">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <Button asChild className="mt-8" variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </Container>
    </div>
  );
}