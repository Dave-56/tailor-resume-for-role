const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TabStopPosition,
  TabStopType,
  HeadingLevel,
  LevelFormat,
  BorderStyle,
} = require("docx");

const outputPath = path.resolve(
  __dirname,
  "../output/Precious_Emakenemi_Front_PM.docx",
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

const doc = new Document({
  creator: "Codex",
  title: "Precious Emakenemi - Front PM Resume",
  description: "Tailored resume for Front Product Manager role",
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
              "Product manager with experience building self-serve onboarding, diagnostics, documentation, and AI-assisted experiences for complex B2B products. Combines customer insight, product analytics, and technical depth to turn support pain points into roadmap priorities that improve adoption, reduce escalations, and speed time-to-value. Effective cross-functional partner across engineering, content, field, product marketing, and business stakeholders.",
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
          "Increased 90-day retention by 12% by launching a product health dashboard that unified telemetry, surfaced adoption gaps, and informed product iteration.",
        ),
        bullet(
          "Cut support escalations by 25% by owning roadmap priorities, writing PM specs, and shipping a real-time diagnostics and observability experience that enabled self-serve troubleshooting during complex deployments.",
        ),
        bullet(
          "Improved enterprise onboarding by prioritizing private-network deployment guidance and related product improvements, helping unblock 8 enterprise customer deployments and accelerate time-to-deploy.",
        ),
        bullet(
          "Reduced support inquiries by 20% by synthesizing feedback from customers, field teams, and troubleshooting sessions into prioritized product and documentation improvements.",
        ),
        bullet(
          "Published public-facing documentation in partnership with content teams for auth, certificate, and networking workflows, shortening time-to-first-success by 10% and reducing setup confusion.",
        ),
        bullet(
          "Partner with engineering and content teams on AI-assisted documentation and chat experiences for Azure IoT Operations to help customers self-serve private-network deployments more easily.",
        ),
        bullet(
          "Defined pricing, packaging, and target segments for the AIO Basic SKU with Product Marketing and Business Planning, identifying a $40M-$80M ARR opportunity.",
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
          "Surfaced recurring implementation pain points from customer issues and helped inform product improvements for integration-heavy workflows.",
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
        bullet(
          "Contributed product recommendations by evaluating tradeoffs across cost, scalability, and rollout feasibility.",
        ),
        roleHeading(
          "The BubaHub Project",
          "Co-Founder & Product Lead",
          "01/2017-08/2017",
          "Lagos, Nigeria",
        ),
        bullet(
          "Launched a two-sided marketplace from zero to 100+ active users in 2 months by iterating on onboarding and reducing time-to-first value to under 10 minutes.",
        ),
        bullet(
          "Set MVP priorities, drove product and technical decisions, led a 4-person team, and shortened the launch timeline by more than 1 month.",
        ),
        sectionHeading("PROJECTS"),
        projectHeading(
          "tinylemon.xyz",
          "Generative AI Fashion Studio",
          "03/2026-Present",
        ),
        bullet(
          "Built a generative image workflow for Shopify brands that replaced costly photoshoots, improved content turnaround, and preserved brand, lighting, and garment consistency.",
        ),
        bullet(
          "Use the product in real customer workflows to identify edge cases and refine prompts and process controls.",
        ),
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
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Product Management: ", bold: true }),
            new TextRun(
              "Product strategy, roadmap prioritization, product requirements, discovery, KPI tracking, onboarding and activation, retention, pricing and packaging, cross-functional execution",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Customer Operations: ", bold: true }),
            new TextRun(
              "Customer empathy, support workflows, self-serve troubleshooting, public documentation, user feedback synthesis, implementation pain-point analysis",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Technical Domains: ", bold: true }),
            new TextRun(
              "B2B SaaS, platform products, enterprise onboarding, integrations, APIs, eventing and webhooks, telemetry, diagnostics, observability, private networking",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Analytics and Tools: ", bold: true }),
            new TextRun(
              "SQL, Power BI, Grafana, Prometheus, usage segmentation, retention analysis",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Technical: ", bold: true }),
            new TextRun("Kubernetes, Python, React, Node, LLM workflows"),
          ],
        }),
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
