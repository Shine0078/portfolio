const themes = [
  { value: "cyan", label: "Cyan" },
  { value: "amber", label: "Amber" },
  { value: "violet", label: "Violet" },
] as const;

export function ThemeSwitcher() {
  return (
    <div className="theme-switcher" role="group" aria-label="Accent color">
      <span className="theme-switcher-label">Accent</span>
      <span className="theme-options">
        {themes.map((theme) => (
          <button
            type="button"
            className="theme-option"
            data-theme-value={theme.value}
            aria-label={`Use ${theme.label.toLowerCase()} accent`}
            aria-pressed={theme.value === "cyan"}
            key={theme.value}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </span>
    </div>
  );
}
