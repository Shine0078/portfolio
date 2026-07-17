from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "samuel-abraham-resume.pdf"
GEIST = ROOT / "src" / "app" / "fonts" / "GeistVF.woff"
GEIST_MONO = ROOT / "src" / "app" / "fonts" / "GeistMonoVF.woff"

INK = colors.HexColor("#111820")
MUTED = colors.HexColor("#53606B")
ACCENT = colors.HexColor("#19756A")
LINE = colors.HexColor("#D8E0E5")
PAPER = colors.white


def register_fonts() -> tuple[str, str]:
    try:
        pdfmetrics.registerFont(TTFont("Geist", str(GEIST)))
        pdfmetrics.registerFont(TTFont("GeistMono", str(GEIST_MONO)))
        return "Geist", "GeistMono"
    except Exception:
        return "Helvetica", "Courier"


FONT, MONO = register_fonts()
styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=24,
    leading=25,
    textColor=INK,
    spaceAfter=3,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=10.5,
    leading=13,
    textColor=ACCENT,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=7.8,
    leading=11,
    textColor=MUTED,
    alignment=TA_RIGHT,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName=MONO,
    fontSize=7.5,
    leading=9,
    textColor=ACCENT,
    spaceBefore=7,
    spaceAfter=4,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=8.4,
    leading=11.1,
    textColor=INK,
    spaceAfter=3,
)
muted_style = ParagraphStyle(
    "Muted",
    parent=body_style,
    fontSize=7.7,
    leading=10,
    textColor=MUTED,
)
job_style = ParagraphStyle(
    "Job",
    parent=body_style,
    fontSize=9.2,
    leading=11.5,
    spaceAfter=1,
)
date_style = ParagraphStyle(
    "Date",
    parent=muted_style,
    alignment=TA_RIGHT,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=9,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceAfter=1.6,
)
project_style = ParagraphStyle(
    "Project",
    parent=body_style,
    fontSize=8.1,
    leading=10.6,
    spaceAfter=2.7,
)


def section(title: str):
    return [
        Paragraph(title.upper(), section_style),
        HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=4),
    ]


def role_row(title: str, organization: str, date: str):
    return Table(
        [
            [
                Paragraph(f"<b>{title}</b> · {organization}", job_style),
                Paragraph(date, date_style),
            ]
        ],
        colWidths=[5.7 * inch, 1.3 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.48 * inch,
        bottomMargin=0.45 * inch,
        title="Samuel Abraham — Resume",
        author="Samuel Abraham",
        subject="IT analyst, cloud support, and systems operations resume",
    )

    story = []
    header = Table(
        [
            [
                [
                    Paragraph("Samuel Abraham", name_style),
                    Paragraph("IT ANALYST · CLOUD SUPPORT · AUTOMATION", role_style),
                ],
                Paragraph(
                    "Oshawa, Ontario, Canada<br/>"
                    '<link href="mailto:samuelabraham321@gmail.com">samuelabraham321@gmail.com</link><br/>'
                    '<link href="https://linkedin.com/in/samuelabraham-ops">linkedin.com/in/samuelabraham-ops</link><br/>'
                    '<link href="https://github.com/Shine0078">github.com/Shine0078</link>',
                    contact_style,
                ),
            ]
        ],
        colWidths=[4.55 * inch, 2.45 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    story.extend([header, Spacer(1, 7)])

    story.extend(section("Profile"))
    story.append(
        Paragraph(
            "IT analyst with software-development training, current cloud systems coursework, "
            "and high-volume operations experience. Builds practical automation, documented "
            "infrastructure, and dependable data workflows with validation, tests, and safe defaults.",
            body_style,
        )
    )

    story.extend(section("Core capabilities"))
    capability_table = Table(
        [
            [
                Paragraph(
                    "<b>Systems & cloud</b><br/>AWS foundations · Windows · Active Directory · Linux · Hyper-V · Docker",
                    body_style,
                ),
                Paragraph(
                    "<b>Automation & data</b><br/>PowerShell · Python · SQL · REST APIs · Operational reporting",
                    body_style,
                ),
                Paragraph(
                    "<b>Engineering practice</b><br/>TypeScript · Next.js · Testing · GitHub Actions · Documentation",
                    body_style,
                ),
            ]
        ],
        colWidths=[2.33 * inch, 2.33 * inch, 2.34 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        ),
    )
    story.append(capability_table)

    story.extend(section("Selected projects"))
    story.append(
        Paragraph(
            '<b>Active Directory Home Lab</b> · <link href="https://github.com/Shine0078/Home-Lab">Source</link><br/>'
            "Scripted and documented a three-VM Hyper-V domain lab with Server 2022, two Windows 11 "
            "clients, role-based access, eight Group Policies, 50 test accounts, event forwarding, "
            "backup/recovery, Pester tests, and six operations runbooks.",
            project_style,
        )
    )
    story.append(
        Paragraph(
            '<b>IT Helpdesk Automation Toolkit</b> · '
            '<link href="https://github.com/Shine0078/IT-Helpdesk-Toolkit">Source</link><br/>'
            "Created four PowerShell support workflows for bulk provisioning, password operations, "
            "health checks, and software inventory with dry-run support, Pester tests, and CSV, JSON, "
            "and HTML reports.",
            project_style,
        )
    )
    story.append(
        Paragraph(
            '<b>eFootball League Dashboard</b> · '
            '<link href="https://efootball-league-dashboard-mu.vercel.app">Live</link> · '
            '<link href="https://github.com/Shine0078/efootball-league-dashboard">Source</link><br/>'
            "Built a Next.js dashboard with public read-only standings, session-gated administration, "
            "validated result entry, automatic home-and-away fixtures, and a recent-activity audit log.",
            project_style,
        )
    )

    story.extend(section("Experience"))
    story.append(
        KeepTogether(
            [
                role_row(
                    "Order Picker — Fulfillment Operations",
                    "GEODIS · Oshawa, ON",
                    "Nov 2025 — Present",
                ),
                Paragraph(
                    "• Track inventory and complete time-sensitive orders while following documented fulfillment and safety procedures.",
                    bullet_style,
                ),
                Paragraph(
                    "• Investigate discrepancies with cross-functional teams, escalate blockers, and maintain accurate shift handoffs.",
                    bullet_style,
                ),
            ]
        )
    )
    story.append(Spacer(1, 3))
    story.append(
        KeepTogether(
            [
                role_row(
                    "Fulfillment Center Associate",
                    "Amazon · Ontario",
                    "Jun 2023 — Oct 2025",
                ),
                Paragraph(
                    "• Worked against daily productivity and quality targets in a high-volume environment.",
                    bullet_style,
                ),
                Paragraph(
                    "• Adapted to rotating processes and coordinated across shifts to resolve workflow interruptions.",
                    bullet_style,
                ),
            ]
        )
    )

    story.extend(section("Education & credential status"))
    education = [
        [
            Paragraph("<b>Computer Programming & Analysis</b>", body_style),
            Paragraph("Durham College", muted_style),
            Paragraph("Advanced diploma · Completed 2025", date_style),
        ],
        [
            Paragraph("<b>Cloud and Information Technology Systems</b>", body_style),
            Paragraph("Durham College", muted_style),
            Paragraph("In progress · 2026", date_style),
        ],
        [
            Paragraph("<b>AWS Certified Cloud Practitioner</b>", body_style),
            Paragraph("Amazon Web Services", muted_style),
            Paragraph("Preparing · Not yet certified", date_style),
        ],
    ]
    story.append(
        Table(
            education,
            colWidths=[3.05 * inch, 1.75 * inch, 2.2 * inch],
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                    ("TOPPADDING", (0, 0), (-1, -1), 1.5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
                ]
            ),
        )
    )

    def draw_page(canvas, _document):
        canvas.saveState()
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, LETTER[0], LETTER[1], fill=1, stroke=0)
        canvas.setStrokeColor(ACCENT)
        canvas.setLineWidth(2)
        canvas.line(0.58 * inch, LETTER[1] - 0.26 * inch, LETTER[0] - 0.58 * inch, LETTER[1] - 0.26 * inch)
        canvas.setFont(MONO, 6.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(0.58 * inch, 0.23 * inch, "SAMUEL ABRAHAM · RESUME")
        canvas.drawRightString(LETTER[0] - 0.58 * inch, 0.23 * inch, "UPDATED JULY 2026")
        canvas.restoreState()

    document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
