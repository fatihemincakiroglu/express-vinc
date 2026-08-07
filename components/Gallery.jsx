import { T } from "@/lib/i18n";

const IMGS = [
  { src: "/gallery/g4.jpg", big: true },
  ...[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17].map((i) => ({ src: `/gallery/g${i}.jpg` })),
];

export default function Gallery({ lang = "tr" }) {
  const t = T[lang].gallery;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>
        <div className="gallery-grid">
          {IMGS.map((im) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={im.src} src={im.src} alt="Express Vinç" className={im.big ? "g-big" : ""} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
