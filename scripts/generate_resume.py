from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "samuel-abraham-resume.pdf"
PUBLIC_OUTPUT = ROOT / "public" / "resume.pdf"
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
    fontSize=23,
    leading=24,
    textColor=INK,
    spaceAfter=2,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=10.5,
    leading=13,
    textColor=ACCENT,
    spaceAfter=3,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=7.6,
    leading=10.2,
    textColor=MUTED,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName=MONO,
    fontSize=7.4,
    leading=9,
    textColor=ACCENT,
    spaceBefore=6,
    spaceAfter=3,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=8.25,
    leading=10.6,
    textColor=INK,
    spaceAfter=2,
)
muted_style = ParagraphStyle(
    "Muted",
    parent=body_style,
    fontSize=7.7,
    leading=9.8,
    textColor=MUTED,
)
item_title_style = ParagraphStyle(
    "ItemTitle",
    parent=body_style,
    fontSize=8.7,
    leading=10.8,
    spaceAfter=0.5,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=9,
    firstLineIndent=-7,
    spaceAfter=1.2,
)


def section(title: str):
    return [
        Paragraph(title.upper(), section_style),
        HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=3),
    ]


def experience_item(
    role: str,
    company: str,
    location: str,
    dates: str,
    bullets: list[str],
):
    content = [
        Paragraph(f"<b>{role}</b> | {company} | {location}", item_title_style),
        Paragraph(dates, muted_style),
    ]
    content.extend(Paragraph(f"- {bullet}", bullet_style) for bullet in bullets)
    return KeepTogether(content)


def project_item(
    title: str,
    links: str,
    summary: str,
):
    return KeepTogether(
        [
            Paragraph(f"<b>{title}</b> | {links}", item_title_style),
            Paragraph(summary, body_style),
        ]
    )


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.46 * inch,
        bottomMargin=0.45 * inch,
        title="Samuel Abraham - Resume",
        author="Samuel Abraham",
        subject="User Support Technician and IT Support resume",
    )

    story = [
        Paragraph("Samuel Abraham", name_style),
        Paragraph("USER SUPPORT TECHNICIAN / IT SUPPORT", role_style),
        Paragraph(
            "Oshawa, Ontario, Canada | "
            '<link href="mailto:samuelabraham321@gmail.com">samuelabraham321@gmail.com</link> | '
            '<link href="https://linkedin.com/in/samuelabraham-ops">LinkedIn</link> | '
            '<link href="https://github.com/Shine0078">GitHub</link> | '
            '<link href="https://shine0078.github.io/portfolio/">Portfolio</link>',
            contact_style,
        ),
        Spacer(1, 4),
    ]

    story.extend(section("Professional summary"))
    story.append(
        Paragraph(
            "User support candidate with hands-on Windows, Microsoft 365, Active Directory, "
            "networking, and PowerShell experience. Resolves user issues, documents fixes, "
            "and automates repeatable support work.",
            body_style,
        )
    )

    story.extend(section("Technical skills"))
    for group, skills in [
        (
            "Operating systems and identity",
            "Windows 10/11, Windows Server 2022, Active Directory, Group Policy, Linux fundamentals",
        ),
        (
            "Networking",
            "TCP/IP, DNS, DHCP, subnetting, connectivity troubleshooting, virtual networking",
        ),
        (
            "Support workflow",
            "Microsoft 365, account provisioning, issue triage, escalation notes, software inventory, runbooks",
        ),
        (
            "Scripting and automation",
            "PowerShell, Python, Pester, CSV/JSON reporting, REST APIs",
        ),
    ]:
        story.append(Paragraph(f"<b>{group}:</b> {skills}", body_style))

    story.extend(section("Experience"))
    story.append(
        experience_item(
            "Order Picker - Fulfillment Operations",
            "GEODIS",
            "Oshawa, ON",
            "November 2025 - Present",
            [
                "Kept time-sensitive orders moving by identifying inventory discrepancies and escalating blockers before handoff.",
                "Protected fulfillment accuracy through documented picking, verification, safety procedures, and clear shift handoffs.",
            ],
        )
    )
    story.append(Spacer(1, 2))
    story.append(
        experience_item(
            "Fulfillment Center Associate",
            "Amazon",
            "Ontario",
            "June 2023 - October 2025",
            [
                "Met daily productivity and quality expectations across changing assignments and priorities.",
                "Reduced workflow interruptions through fast coordination while maintaining safe, accurate operations.",
            ],
        )
    )

    story.extend(section("Selected projects"))
    story.append(
        project_item(
            "eFootball League Dashboard",
            '<link href="https://efootball-league-dashboard-mu.vercel.app">Live demo</link> | '
            '<link href="https://github.com/Shine0078/efootball-league-dashboard">Source</link>',
            "Built a live Next.js league dashboard with public standings, authenticated administration, "
            "validated scoring, automatic fixtures, and an audit trail.",
        )
    )
    story.append(
        project_item(
            "Active Directory Home Lab",
            '<link href="https://github.com/Shine0078/Home-Lab">Source</link>',
            "Automated a three-VM Windows domain with 50 test users, eight Group Policies, delegated access, "
            "event forwarding, backup and recovery scripts, Pester tests, and six runbooks.",
        )
    )
    story.append(
        project_item(
            "IT Helpdesk Automation Toolkit",
            '<link href="https://github.com/Shine0078/IT-Helpdesk-Toolkit">Source</link>',
            "Created four PowerShell workflows for bulk users, password resets, health checks, and software "
            "inventory with dry-run safety, audit output, and Pester checks.",
        )
    )

    story.extend(section("Certifications and education"))
    for title, detail in [
        (
            "CompTIA A+",
            "In progress - studying hardware, Windows, networking, security, and support troubleshooting; not yet certified",
        ),
        (
            "Computer Programming and Analysis - Durham College",
            "Three-year advanced diploma - completed 2025",
        ),
        (
            "Cloud and Information Technology Systems - Durham College",
            "In progress - 2026",
        ),
    ]:
        story.append(Paragraph(f"<b>{title}</b> | {detail}", body_style))

    def draw_page(canvas, _document):
        canvas.saveState()
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, LETTER[0], LETTER[1], fill=1, stroke=0)
        canvas.setStrokeColor(ACCENT)
        canvas.setLineWidth(2)
        canvas.line(
            0.58 * inch,
            LETTER[1] - 0.26 * inch,
            LETTER[0] - 0.58 * inch,
            LETTER[1] - 0.26 * inch,
        )
        canvas.setFont(MONO, 6.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(0.58 * inch, 0.23 * inch, "SAMUEL ABRAHAM - RESUME")
        canvas.drawRightString(
            LETTER[0] - 0.58 * inch,
            0.23 * inch,
            "UPDATED JULY 2026",
        )
        canvas.restoreState()

    document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    copyfile(OUTPUT, PUBLIC_OUTPUT)
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    build_resume()
