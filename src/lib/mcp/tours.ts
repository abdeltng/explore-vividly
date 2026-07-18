export type Tour = {
  slug: "1-hour" | "2-hours" | "3-hours" | "vip";
  title: string;
  duration: string;
  price: string;
  summary: string;
  detailsUrl: string;
  bookingWhatsApp: string;
};

const SITE = "https://mytuktukmadrid.com";
const WHATSAPP = "+34 611 581 388";

export const TOURS: Tour[] = [
  {
    slug: "1-hour",
    title: "Madrid Express Tuk-Tuk Tour – 1 Hour City Highlights",
    duration: "60 minutes",
    price: "€35 per person",
    summary:
      "Fast overview of Madrid's historic center: Royal Palace, Plaza Mayor, Retiro, Cibeles and more in a comfortable electric tuk-tuk with a local guide.",
    detailsUrl: `${SITE}/tours/1-hour`,
    bookingWhatsApp: WHATSAPP,
  },
  {
    slug: "2-hours",
    title: "Madrid Grand Tuk-Tuk Tour – 2 Hour Complete City Experience",
    duration: "120 minutes",
    price: "€60 per person",
    summary:
      "Extended tour covering iconic landmarks, historic districts, royal sites and vibrant neighborhoods with deeper history and culture.",
    detailsUrl: `${SITE}/tours/2-hours`,
    bookingWhatsApp: WHATSAPP,
  },
  {
    slug: "3-hours",
    title: "Madrid Ultimate Tuk-Tuk Tour – 3 Hours",
    duration: "180 minutes",
    price: "€85 per person",
    summary:
      "The most complete tuk-tuk tour of Madrid: monuments, hidden gems, local neighborhoods, and photo stops at every key landmark.",
    detailsUrl: `${SITE}/tours/3-hours`,
    bookingWhatsApp: WHATSAPP,
  },
  {
    slug: "vip",
    title: "Private VIP Tuk-Tuk Tour",
    duration: "Custom",
    price: "From €120",
    summary:
      "Fully private, personalized tuk-tuk experience with a dedicated guide, flexible route, and premium comfort.",
    detailsUrl: `${SITE}/tours/vip`,
    bookingWhatsApp: WHATSAPP,
  },
];

export const MEETING_POINT = "Calle de Vergara 1, Madrid";
export const CANCELLATION_POLICY =
  "Free cancellation up to 24 hours before the tour. Full refund or rescheduling available. Refund in case of bad weather or operator cancellation. No-shows are charged in full.";