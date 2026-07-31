type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  titleId: string;
  lead?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  titleId,
  lead,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-label">
        <b>{index}</b>
        {label}
        <i aria-hidden="true" />
      </p>
      <h2 id={titleId}>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
