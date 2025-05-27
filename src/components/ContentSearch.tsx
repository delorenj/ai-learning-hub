import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface ContentSearchProps {
  onSearch: (query: string) => void;
  onFilterByTag: (tag: string) => void;
  onClearFilters: () => void;
  availableTags: string[];
  activeFilters: string[];
  searchQuery: string;
}

export default function ContentSearch({
  onSearch,
  onFilterByTag,
  onClearFilters,
  availableTags,
  activeFilters,
  searchQuery
}: ContentSearchProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      onSearch("");
    }
  };

  return (
    <div className="mb-8 space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search guides..."
            value={inputValue}
            onChange={handleInputChange}
            className="pl-10"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {availableTags.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Filter by tag</h3>
            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="h-auto py-1 px-2 text-xs"
              >
                Clear filters
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => {
              const isActive = activeFilters.includes(tag);
              return (
                <Badge
                  key={tag}
                  variant={isActive ? "default" : "outline"}
                  className={`cursor-pointer ${
                    isActive ? "bg-primary" : "hover:bg-primary/10"
                  }`}
                  onClick={() => onFilterByTag(tag)}
                >
                  {tag}
                  {isActive && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
