const whatsappBase = "https://wa.me/5571992747781";

export const whatsappUrl = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;
