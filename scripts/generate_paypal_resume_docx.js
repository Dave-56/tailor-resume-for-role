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
  "../output/Precious_Emakenemi_PayPal_PM.docx",
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

const doc = new Document({
  creator: "Codex",
  title: "Precious Emakenemi - PayPal PM Resume",
  description: "Tailored resume for PayPal Product Manager role",
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
              "Data-driven product manager with experience translating customer pain points, telemetry, and implementation feedback into product requirements, prioritization, and shipped improvements across Azure IoT Operations and Azure IoT Edge. Combines technical fluency with strong cross-functional execution across engineering, content, field, and business stakeholders to improve onboarding, deployment reliability, and customer experience in complex cloud-to-edge environments.",
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
          "Increased 90-day retention by 12% by launching a product health dashboard that unified telemetry, surfaced adoption gaps, and informed faster product iteration.",
        ),
        bullet(
          "Cut support escalations by 25% by defining PM specs and prioritizing a real-time diagnostics and observability experience that enabled self-serve troubleshooting during complex enterprise deployments.",
        ),
        bullet(
          "Managed recurring customer and field issue triage across Azure IoT Operations and Azure IoT Edge, translating deployment, monitoring, and support pain points into backlog priorities, release inputs, and clearer product requirements for engineering.",
        ),
        bullet(
          "Improved deployment reliability by shipping long-running operation states and event-driven webhooks for Kubernetes CRDs, giving customers clearer feedback and reducing ambiguity during sensitive rollouts.",
        ),
        bullet(
          "Improved enterprise onboarding by owning private-network deployment guidance for Azure IoT Operations and helping unblock 8 enterprise customer deployments in complex environments.",
        ),
        bullet(
          "Partnered with content developers to update deployment guides, tutorials, and setup documentation for auth, certificate, and networking workflows, shortening time-to-first-success by 10% and reducing setup confusion.",
        ),
        bullet(
          "Defined pricing, packaging, and target segments for the AIO Basic SKU in partnership with Product Marketing and Business Planning, identifying a $40M-$80M ARR opportunity.",
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
          "Launched a two-sided marketplace from zero to 100+ active users in 2 months by iterating on onboarding and reducing time-to-first-value to under 10 minutes.",
        ),
        bullet(
          "Set MVP priorities, translated user needs into product and technical decisions, and led a 4-person team to accelerate launch by more than 1 month.",
        ),
        sectionHeading("CORE SKILLS"),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Product Management: ", bold: true }),
            new TextRun(
              "Product requirements, backlog prioritization, roadmap prioritization, release planning, customer discovery, KPI tracking, onboarding and activation, pricing and packaging, cross-functional execution",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Insights and Analysis: ", bold: true }),
            new TextRun(
              "Telemetry analysis, customer feedback synthesis, market analysis, implementation feedback, unit economics, SQL, Power BI, Grafana, Prometheus",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Cross-Functional Delivery: ", bold: true }),
            new TextRun(
              "Engineering partnership, content collaboration, field and customer issue triage, stakeholder alignment, documentation and tutorial workflows",
            ),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 36 },
          children: [
            new TextRun({ text: "Technical Domains: ", bold: true }),
            new TextRun(
              "Enterprise SaaS, platform products, integrations, APIs, eventing and webhooks, observability, diagnostics, Kubernetes, private networking, Python",
            ),
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
