import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { TOURS, MEETING_POINT, CANCELLATION_POLICY } from "../tours";

export default defineTool({
  name: "get_tour",
  title: "Get tour details",
  description:
    "Get full details for a specific tuk-tuk tour by slug (1-hour, 2-hours, 3-hours, or vip), including meeting point and cancellation policy.",
  inputSchema: {
    slug: z
      .enum(["1-hour", "2-hours", "3-hours", "vip"])
      .describe("The tour slug."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const tour = TOURS.find((t) => t.slug === slug);
    if (!tour) {
      return { content: [{ type: "text", text: `Unknown tour slug: ${slug}` }], isError: true };
    }
    const payload = { ...tour, meetingPoint: MEETING_POINT, cancellationPolicy: CANCELLATION_POLICY };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});