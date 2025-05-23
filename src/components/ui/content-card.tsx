import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc?: string;
  icon?: React.ReactNode;
}

const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ title, description, imageSrc, icon, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex flex-col items-center p-6 transition-colors",
          "hover:shadow-md focus-within:ring-2 focus-within:ring-primary/50",
          className
        )}
        {...props}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-16 h-16 object-cover rounded-md mb-4"
          />
        ) : icon ? (
          <div className="mb-4 text-4xl text-primary">{icon}</div>
        ) : null}
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-center">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          {description}
        </p>
      </div>
    );
  }
);

ContentCard.displayName = "ContentCard";

export { ContentCard };