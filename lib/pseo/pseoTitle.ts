// Başlık + " | Av. Furkan Arıkan" son eki 60 karakteri aşarsa son eki düşür
// (arama sonucunda başlığın kesilmemesi için).
const SUFFIX = " | Av. Furkan Arıkan";

export function pseoTitle(t: string): string | { absolute: string } {
  return t.length + SUFFIX.length > 60 ? { absolute: t } : t;
}
