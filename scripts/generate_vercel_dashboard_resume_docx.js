const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} = require("docx");

const outputPath = path.resolve(
  __dirname,
  "../output/Precious_Emakenemi_Vercel_Dashboard_PM.docx",
);

const page = {
  size: {
    width: 12240,
    height: 15840,
  },
  margin: {
    top: 900,
    right: 900,
    bottom: 900,
    left: 900,
  },
};

const sectionHeading = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    border: {
      bottom: {
        style: BorderStyle.SINGLE,
        size: 6,
        color: "8A8F98",
        space: 1,
      },
    },
    spacing: { before: 140, after: 60 },
    children: [new TextRun(text)],
  });

const bullet = (text) =>
  new Paragraph({
    numbering: {
      reference: "resume-bullets",
      level: 0,
    },
    spacing: {
      before: 0,
      after: 36,
      line: 240,
    },
    children: [new TextRun(text)],
  });

const roleHeading = (company, title, dates, location) =>
  new Paragraph({
    spacing: { before: 80, after: 10 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: `${company} | ${title}`, bold: true }),
      new TextRun(`\t${dates} | ${location}`),
    ],
  });

const projectHeading = (name, subtitle, dates) =>
  new Paragraph({
    spacing: { before: 60, after: 10 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: `${name} | ${subtitle}`, bold: true }),
      new TextRun(`\t${dates}`),
    ],
  });

const skillLine = (label, value) =>
  new Paragraph({
    spacing: { before: 0, after: 36 },
    children: [
      new TextRun({ text: `${label}: `, bold: true }),
      new TextRun(value),
    ],
  });

const doc = new Document({
  creator: "Codex",
  title: "Precious Emakenemi - Vercel Dashboard PM Resume",
  description: "Tailored resume for Vercel Product Manager - Dashboard role",
  styles: {
    default: {
      document: {
        run: {
          font: "Arial",
          size: 19,
          color: "111111",
        },
        paragraph: {
          spacing: { line: 240 },
        },
      },
    },
    paragraphStyles: [
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: {
          font: "Arial",
          bold: true,
          size: 20,
          color: "111111",
        },
        paragraph: {
          spacing: { before: 180, after: 80 },
          outlineLevel: 1,
        },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "resume-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 280, hanging: 140 },
              },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: { page },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 40 },
          children: [
            new TextRun({
              text: "PRECIOUS EMAKENEMI",
              bold: true,
              size: 26,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 120 },
          children: [
            new TextRun(
              "Seattle, WA | pemakenemi56@gmail.com | (628) 224-0553 | linkedin.com/in/preciousemakenemi",
            ),
          ],
        }),
        sectionHeading("SUMMARY"),
        new Paragraph({
          spacing: { before: 0, after: 60, line: 240 },
          children: [
            new TextRun(
              "Product manager with experience building developer-facing and enterprise platform experiences across dashboards, onboarding, observability, integrations, and AI-assisted workflows. Uses telemetry, customer conversations, and technical depth to turn complex systems into clearer self-serve surfaces that improve adoption, reduce support friction, and help users take the right action faster.",
            ),
          ],
        }),
        sectionHeading("EXPERIENCE"),
        roleHeading(
          "Microsoft",
          "Product Manager II, Azure IoT Operations",
          "2022-Present",
          "Seattle, WA",
        ),
        bullet(
          "Increased 90-day retention by 12% by launching an internal product health dashboard for PM and engineering teams that tracked sessions, usage, adoption, and engagement signals to surface gaps and guide faster product iteration.",
        ),
        bullet(
          "Cut support escalations by 25% by defining PM specs and prioritizing a real-time diagnostics and observability experience that enabled developers to self-serve troubleshooting during complex deployments.",
        ),
        bullet(
          "Improved deployment reliability by shipping long-running operation states and event-driven webhooks for Kubernetes CRDs, giving developers clearer feedback during sensitive enterprise rollouts.",
        ),
        bullet(
          "Improved enterprise onboarding by owning private-network deployment guidance, helping unblock 8 enterprise customer deployments and accelerate time-to-deploy in complex environments.",
        ),
        bullet(
          "Reduced support inquiries by 20% by partnering with customers, field teams, and engineering during troubleshooting sessions, then translating recurring pain points into product feedback, documentation updates, and roadmap inputs.",
        ),
        bullet(
          "Published technical documentation and workflow tutorials for auth, certificate, and networking setup, shortening time-to-first-success by 10% and reducing setup confusion for developers and deployment teams.",
        ),
        roleHeading(
          "Clever",
          "Technical Solutions Specialist (Contract)",
          "05/2019-10/2019",
          "San Francisco, CA",
        ),
        bullet(
          "Owned integrations across 50+ school districts, diagnosed data-flow issues, and partnered with Product and Engineering to improve adoption, reliability, and customer outcomes.",
        ),
        bullet(
          "Synthesized recurring implementation pain points from customer issues into product feedback for integration-heavy workflows.",
        ),
        roleHeading(
          "ZoomSystems",
          "Product Manager Intern",
          "05/2018-08/2018",
          "San Francisco, CA",
        ),
        bullet(
          "Led buy-versus-build analysis and unit economics modeling that supported a $10M automated retail expansion.",
        ),
        roleHeading(
          "The BubaHub Project",
          "Co-Founder & Product Lead",
          "01/2017-08/2017",
          "Lagos, Nigeria",
        ),
        bullet(
          "Launched a two-sided marketplace from zero to 100+ active users in 2 months by iterating on onboarding and reducing time-to-first-value to under 10 minutes.",
        ),
        bullet(
          "Set MVP priorities, drove product and technical decisions, and led a 4-person team to accelerate launch by more than 1 month.",
        ),
        sectionHeading("SELECTED PROJECTS"),
        projectHeading(
          "Eliza",
          "Agentic Email and Follow-Up Assistant",
          "01/2025-08/2025",
        ),
        bullet(
          "Increased onboarding conversion by 30% by reframing the core problem around follow-up fatigue and sharpening the product's value proposition.",
        ),
        bullet(
          "Built a multi-step agent loop for reliable follow-ups, generated 100+ waitlist signups, and validated repeat usage patterns.",
        ),
        sectionHeading("CORE SKILLS"),
        skillLine(
          "Product Management",
          "Product strategy, roadmap prioritization, product requirements, developer-facing dashboards, onboarding and activation, retention, cross-functional execution",
        ),
        skillLine(
          "Developer and Platform",
          "Platform products, enterprise onboarding, observability, diagnostics, telemetry, integrations, APIs, eventing and webhooks, deployment workflows",
        ),
        skillLine(
          "Analytics and AI",
          "SQL, Power BI, Grafana, Prometheus, usage segmentation, retention analysis, LLM workflows, agent-assisted product concepts",
        ),
        skillLine("Technical", "Kubernetes, Python, React, Node"),
        sectionHeading("EDUCATION"),
        new Paragraph({
          spacing: { before: 0, after: 20 },
          children: [
            new TextRun({
              text: "M.S., Computer Science | New Jersey Institute of Technology",
            }),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 20 },
          children: [
            new TextRun({
              text: "M.S., International Business | Hult International Business School",
            }),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 0 },
          children: [
            new TextRun({
              text: "B.S., Computer Science | Landmark University",
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  process.stdout.write(`${outputPath}\n`);
});
