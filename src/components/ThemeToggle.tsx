import { Moon, Sun } from "@/components/Icons";

/**
 * Server-rendered button. The behaviour is attached by a small inline script
 * in the root layout, so the toggle costs no client bundle and works from the
 * first paint. Both icons are rendered; CSS shows whichever matches the
 * resolved colour scheme.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      className="icon-button"
      data-theme-toggle
      aria-label="Switch colour theme"
    >
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
    </button>
  );
}
