import { defineTool } from "@lovable.dev/mcp-js";
import { TOURS } from "../tours";

export default defineTool({
  name: "list_tours",
  title: "List tuk-tuk tours",
  description:
    "List all tuk-tuk tours offered by My TukTuk Madrid, with slug, title, duration, price, summary, and details URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TOURS, null, 2) }],
    structuredContent: { tours: TOURS },
  }),
});