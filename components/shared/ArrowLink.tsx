import * as React from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ArrowLink({ className, href, children, ...props }: ArrowLinkProps) {
  return (
    <Button 
      variant="link" 
      render={<Link href={href} {...props as any} />}
      className={cn("arrow-link p-0 h-auto no-underline hover:no-underline", className)}
    >
      {children}
      <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
    </Button>
  );
}
