/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Eski Türkçe slug'lı EN/DE adresleri yeni yerelleştirilmiş adreslere kalıcı yönlendir
      { source: "/en/hizmetler", destination: "/en/services", permanent: true },
      { source: "/en/hakkimizda", destination: "/en/about", permanent: true },
      { source: "/en/iletisim", destination: "/en/contact", permanent: true },
      { source: "/en/rezervasyon", destination: "/en/reservation", permanent: true },
      { source: "/de/hizmetler", destination: "/de/leistungen", permanent: true },
      { source: "/de/hakkimizda", destination: "/de/ueber-uns", permanent: true },
      { source: "/de/iletisim", destination: "/de/kontakt", permanent: true },
      { source: "/de/rezervasyon", destination: "/de/reservierung", permanent: true },
      // Eski Türkçe blog slug'ları EN/DE altında
      { source: "/en/blog/orumcek-vinc-nedir", destination: "/en/blog/what-is-a-spider-crane", permanent: true },
      { source: "/en/blog/makasli-platform-kiralama-rehberi", destination: "/en/blog/scissor-lift-rental-guide", permanent: true },
      { source: "/en/blog/vinc-operasyonlarinda-is-guvenligi", destination: "/en/blog/crane-safety-golden-rules", permanent: true },
      { source: "/en/blog/arac-ustu-platform-avantajlari", destination: "/en/blog/truck-mounted-platform-advantages", permanent: true },
      { source: "/de/blog/orumcek-vinc-nedir", destination: "/de/blog/was-ist-ein-minikran", permanent: true },
      { source: "/de/blog/makasli-platform-kiralama-rehberi", destination: "/de/blog/scherenbuehne-mieten-ratgeber", permanent: true },
      { source: "/de/blog/vinc-operasyonlarinda-is-guvenligi", destination: "/de/blog/kransicherheit-goldene-regeln", permanent: true },
      { source: "/de/blog/arac-ustu-platform-avantajlari", destination: "/de/blog/lkw-arbeitsbuehnen-vorteile", permanent: true },
    ];
  },
};
export default nextConfig;
