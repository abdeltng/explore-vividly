import { defineTool } from "@lovable.dev/mcp-js";
import { MEETING_POINT, CANCELLATION_POLICY } from "../tours";

export default defineTool({
  name: "get_booking_info",
  title: "Get booking info",
  description:
    "Return contact and booking information for My TukTuk Madrid: WhatsApp number, website, meeting point, and cancellation policy.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      whatsapp: "+34 611 581 388",
      whatsappLink: "https://wa.me/34611581388",
      website: "https://mytuktukmadrid.com",
      meetingPoint: MEETING_POINT,
      cancellationPolicy: CANCELLATION_POLICY,
      capacity: "Each tuk-tuk seats up to 4 passengers. Larger groups use multiple tuk-tuks.",
      notes:
        "Suitable for children over 3. Pets welcome. Stroller friendly. Not wheelchair accessible.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});