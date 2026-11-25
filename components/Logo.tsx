// Klasik küçük-büyük harf (small caps) logotip: kelimelerin ilk harfi tam boy,
// kalanı büyük harf ama küçültülmüş; altında geniş aralıklı "Hukuk Bürosu".
// Küçük harfler elle büyütülür (tr yerel ayarıyla), böylece "ı/i" doğru görünür.

const NAME = "Av. Furkan Arıkan";

function SmallCaps({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          {word.charAt(0)}
          <span style={{ fontSize: "0.8em" }}>{word.slice(1).toLocaleUpperCase("tr")}</span>
        </span>
      ))}
    </>
  );
}

export default function Logo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const nameClass = size === "nav" ? "text-[1.2rem] md:text-[1.45rem]" : "text-[1.45rem]";
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`${nameClass} font-semibold`}
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "#F4EDE4",
          letterSpacing: "0.06em",
        }}
      >
        <SmallCaps text={NAME} />
      </span>
      <span
        className="text-[10px] md:text-[11px] uppercase mt-1.5"
        style={{ color: "rgba(197,168,128,0.85)", letterSpacing: "0.32em" }}
      >
        Hukuk Bürosu
      </span>
    </span>
  );
}
