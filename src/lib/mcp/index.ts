import { defineMcp } from "@lovable.dev/mcp-js";
import listToursTool from "./tools/list-tours";
import getTourTool from "./tools/get-tour";
import bookingInfoTool from "./tools/booking-info";

export default defineMcp({
  name: "my-tuktuk-madrid-mcp",
  title: "My TukTuk Madrid",
  version: "0.1.0",
  instructions:
    "Tools for My TukTuk Madrid, an electric tuk-tuk tour company in Madrid, Spain. Use `list_tours` to see all tours, `get_tour` for detailed info on a specific tour (slug: 1-hour, 2-hours, 3-hours, vip), and `get_booking_info` for the meeting point, WhatsApp number, and cancellation policy.",
  tools: [listToursTool, getTourTool, bookingInfoTool],
});