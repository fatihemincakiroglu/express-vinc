// ============================================
// ÜRÜN KATALOĞU — makine eklemek/çıkarmak için bu listeyi düzenleyin
// cat: kategori indeksi (0-7, T[lang].cats sırası)
// h: çalışma yüksekliği (m) · cap: kapasite (kg) · power: 0 Dizel, 1 Akülü, 2 Çift Enerjili
// ============================================
export const PRODUCTS = [
  // 0 — Akülü Makaslı Platformlar
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS0607HD-Li", h: 8,  cap: 230, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS0808HD-Li", h: 10, cap: 230, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS1012HD-Li", h: 12, cap: 320, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS1414HD-Li", h: 16, cap: 320, power: 1 },
  { cat: 0, model: "JCPT0807HA", h: 8, cap: 230, power: 1 },

  // 1 — Dizel Makaslı Platformlar
  { cat: 1, model: "4x4 Dizel Makaslı 12 m", h: 12, cap: 560, power: 0 },
  { cat: 1, model: "4x4 Dizel Makaslı 15 m", h: 15, cap: 680, power: 0 },
  { cat: 1, brand: "Zoomlion", model: "Zoomlion ZS1623RT 4x4", h: 18, cap: 680, power: 0 },
  { cat: 1, model: "4x4 Dizel Makaslı 22 m", h: 22, cap: 680, power: 0 },

  // 2 — Dikey Platformlar
  { cat: 2, model: "Dikey Platform 8 m",  h: 8,  cap: 200, power: 1 },
  { cat: 2, model: "Dikey Platform 10 m", h: 10, cap: 200, power: 1 },
  { cat: 2, model: "Dikey Platform 12 m", h: 12, cap: 200, power: 1 },

  // 3 — Eklemli Platformlar
  { cat: 3, brand: "JLG", model: "JLG M450AJ", h: 16, cap: 230, power: 1 },
  { cat: 3, brand: "Genie", model: "Genie Z-45/25J DC", h: 16, cap: 227, power: 1 },
  { cat: 3, model: "Eklemli Platform 20 m 4x4", h: 20, cap: 230, power: 0 },

  // 4 — Örümcek Platformlar
  { cat: 4, model: "Örümcek Platform 15 m", h: 15, cap: 200, power: 2 },
  { cat: 4, model: "Örümcek Platform 20 m", h: 20, cap: 200, power: 2 },
  { cat: 4, model: "Örümcek Platform 25 m", h: 25, cap: 230, power: 2 },
  { cat: 4, model: "Örümcek Platform 30 m", h: 30, cap: 230, power: 2 },

  // 5 — Örümcek Vinçler
  { cat: 5, brand: "Jekko", model: "Jekko SPX328", h: 12.8, cap: 2800, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/SPX328-Extended-683x1024.png" },
  { cat: 5, brand: "Jekko", model: "Jekko SPX532", h: 17.3, cap: 3200, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/SPX532.2.png" },
  { cat: 5, brand: "Jekko", model: "Jekko SPX650", h: 23.5, cap: 5000, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/SPX650-1-scaled.png" },
  { cat: 5, brand: "Jekko", model: "Jekko SPX1280", h: 26.6, cap: 8000, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/jekko-SPX1280.png" },
  { cat: 5, brand: "Jekko", model: "Jekko MPK06 Minipicker", h: 4, cap: 600, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/MPK06.2-956x1024.png" },
  { cat: 5, brand: "Jekko", model: "Jekko MPK10 Minipicker", h: 4.8, cap: 990, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/MPK10.2-scaled.png" },
  { cat: 5, brand: "Jekko", model: "Jekko MPK20R Minipicker", h: 7.4, cap: 2000, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/MPK20.2-scaled.png" },
  { cat: 5, brand: "Jekko", model: "Jekko MPK50 Minipicker", h: 9.3, cap: 5000, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/mpk50_2-1024x829.png" },
  { cat: 5, brand: "Jekko", model: "Jekko JF235", h: 25, cap: 6150, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/JF235.png" },
  { cat: 5, brand: "Jekko", model: "Jekko JF365", h: 30, cap: 11500, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/jekko-JF365-1.png" },
  { cat: 5, brand: "Jekko", model: "Jekko JF545 (ACC-545)", h: 30, cap: 15500, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/JF545.2_Open-scaled.png" },
  { cat: 5, brand: "Jekko", model: "Jekko JF1050", h: 34.5, cap: 22000, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/JF1050.png" },
  { cat: 5, brand: "Jekko", model: "Jekko TRX32 Kamyon Vinci", h: 17.5, cap: 3200, power: 2,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/TRX32.png" },
  { cat: 5, brand: "Jekko", model: "Jekko TRX80 Kamyon Vinci", h: 27.2, cap: 8000, power: 1,
    img: "https://www.jekkoturkey.com/wp-content/uploads/prodotti/jekko-trx80-truck-mounted-crane-extension-isolated.png" },
  { cat: 5, model: "Örümcek Vinç 5 t", h: 15, cap: 5000, power: 2 },
  { cat: 5, model: "Örümcek Vinç 8 t", h: 20, cap: 8000, power: 0 },

  // 6 — Araç Üstü Platformlar
  { cat: 6, model: "Araç Üstü Platform 21 m", h: 21, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 28 m", h: 28, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 36 m", h: 36, cap: 200, power: 0 },
  { cat: 6, model: "Araç Üstü Platform 45 m", h: 45, cap: 200, power: 0 },

  // 7 — Kiralık Forkliftler
  { cat: 7, brand: "VMAX", model: "VMAX CPCD30 4x4", h: 4.5, cap: 3000, power: 0 },
  { cat: 7, model: "Dizel Forklift 5 t", h: 4.5, cap: 5000, power: 0 },
  { cat: 7, model: "Akülü Forklift 2 t", h: 4.5, cap: 2000, power: 1 },

  // --- Zoomlion Türkiye platform serisi ---
  // Eklemli Platformlar
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA10RJE", h: 12, cap: 230, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA14NJE-Li", h: 16, cap: 230, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA14J", h: 16, cap: 230, power: 0 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA14JE-Li", h: 16, cap: 230, power: 1,
    img: "https://www.zoomlion.com.tr/uploads/images/urunler/ZA14JE-ZA14JE-Li/large/1706019385_za14je-za14je-lI-akulu-eklemli-platformlar.jpg" },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA16JERT-Li 4x4", h: 18, cap: 230, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA20J", h: 22, cap: 230, power: 0 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA20JE", h: 22, cap: 230, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA20JERT-Li 4x4", h: 22, cap: 250, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZA24J", h: 26, cap: 250, power: 0 },
  // Teleskopik Platformlar
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZT22JE/ZT26JE Elektrikli Teleskopik", h: 26, cap: 300, power: 1 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZT30J Teleskopik", h: 32, cap: 300, power: 0 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZT34J Teleskopik", h: 36, cap: 300, power: 0 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZT42J Teleskopik", h: 44, cap: 300, power: 0 },
  { cat: 3, brand: "Zoomlion", model: "Zoomlion ZT51JEH-V Hibrit Teleskopik", h: 51, cap: 400, power: 2 },
  // Makaslı Platformlar
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS0407DC-Li", h: 6, cap: 240, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS1218ERT 4x4", h: 14, cap: 560, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS2023ERT 4x4", h: 22, cap: 680, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion HA Serisi Makaslı", h: 14, cap: 320, power: 1 },
  { cat: 0, brand: "Zoomlion", model: "Zoomlion ZS0610C/ZS1216C Paletli Makaslı", h: 14, cap: 230, power: 1 },
  // Örümcek Platformlar
  { cat: 4, brand: "Zoomlion", model: "Zoomlion ZX23AE/ZX27AE Örümcek", h: 27, cap: 230, power: 2 },
  // Telehandler
  { cat: 7, brand: "Zoomlion", model: "Zoomlion ZTH2506/ZTH3507/ZTH3513 Telehandler", h: 13, cap: 3500, power: 0 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion ZTH4525R/ZTH4518R Telehandler", h: 25, cap: 4500, power: 0 },
  // Dikey Bomlu Sipariş Toplayıcı
  { cat: 2, brand: "Zoomlion", model: "Zoomlion ZMP04/ZMP06 Sipariş Toplayıcı", h: 6, cap: 200, power: 1 },
  { cat: 2, brand: "Zoomlion", model: "Zoomlion ZMP09J Sipariş Toplayıcı", h: 9, cap: 200, power: 1 },
  // Zoomlion Forkliftler (zoomlion.com.tr)
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FB20/25H Elektrikli Forklift", h: 3, cap: 2500, power: 1,
    img: "https://www.zoomlion.com.tr/uploads/images/urunler/FB20-25H/large/1643028518_fb2025h.jpeg" },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FE16/18/20H Elektrikli Forklift", h: 3, cap: 2000, power: 1 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FB10-35 Serisi Elektrikli Forklift", h: 3, cap: 3500, power: 1,
    img: "https://www.zoomlion.com.tr/uploads/images/urunler/FB10-15-20-25-30-35/large/1643027229_fb101520253035.jpeg" },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion DB10/12/15E-WA1 Elektrikli İstifleyici", h: 3.5, cap: 1500, power: 1 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FD30/35 Dizel Forklift", h: 4.5, cap: 3500, power: 0 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FD50 Dizel Forklift", h: 3, cap: 5000, power: 0 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FD50/60/70 LPG Forklift", h: 3, cap: 7000, power: 0 },
  { cat: 7, brand: "Zoomlion", model: "Zoomlion FD50-70Z İçten Yanmalı Forklift", h: 3, cap: 7000, power: 0 },
  // --- Zoomlion Mobil Vinçler (zoomlion.com.tr) ---
  // All-Terrain
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZAT1200V All-Terrain Vinç", h: 66, cap: 120000, power: 0,
    img: "https://zoomlion.com.tr/uploads/images/large/1721132226_zat1200v-all-terrain-vinc.webp" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZAT1600E All-Terrain Vinç", h: 84, cap: 160000, power: 0,
    img: "https://zoomlion.com.tr/uploads/images/large/1720602024_zoomlion-all-terrain-vinc.webp" },
  // Arazi Tipi (RT)
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZRT400V452 Arazi Tipi Vinç", h: 34, cap: 40000, power: 0,
    img: "https://zoomlion.com.tr/uploads/images/urunler/ZRT400/large/1644330623_zrt400-1.jpeg" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZRT600V552.1 Arazi Tipi Vinç", h: 45, cap: 60000, power: 0,
    img: "https://zoomlion.com.tr/uploads/images/urunler/ZRT600/large/1644330849_zrt600.jpeg" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZRT850V552.1 Arazi Tipi Vinç", h: 49, cap: 85000, power: 0,
    img: "https://zoomlion.com.tr/uploads/images/urunler/ZRT850/large/1644331204_zrt850-1.jpeg" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZRT1100V552 Arazi Tipi Vinç", h: 48, cap: 110000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZRT1300V552 Arazi Tipi Vinç", h: 50, cap: 130000, power: 0 },
  // Kafes Bomlu Paletli
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC850V-1E5 Paletli Vinç", h: 61, cap: 85000, power: 0,
    img: "https://www.zoomlion.com.tr/uploads/images/large/1721719968_zcc850v-1e5.webp" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC1000V-1E5 Paletli Vinç", h: 61, cap: 100000, power: 0,
    img: "https://www.zoomlion.com.tr/uploads/images/large/1721721948_zcc1000v-1e5.webp" },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC1500VE5 Paletli Vinç", h: 67, cap: 150000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC2200V-E5 Paletli Vinç", h: 74, cap: 220000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC3500V-2E5 Paletli Vinç", h: 80, cap: 350000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC4000VE5 Paletli Vinç", h: 84, cap: 400000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC7200E5 Paletli Vinç", h: 96, cap: 720000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC9800WE5 Paletli Vinç", h: 100, cap: 980000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCC18000 Paletli Vinç", h: 102, cap: 1600000, power: 0,
    img: "https://www.zoomlion.com.tr/uploads/images/large/1721830063_zcc18000-kafes-bomlu-paletli-vinc.webp" },
  // Teleskopik Bomlu Paletli
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCT600V552 Teleskopik Paletli Vinç", h: 44, cap: 60000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCT1000V552.1 Teleskopik Paletli Vinç", h: 47, cap: 100000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCT1500V653 Teleskopik Paletli Vinç", h: 52, cap: 150000, power: 0 },
  { cat: 8, brand: "Zoomlion", model: "Zoomlion ZCT3000V853 Teleskopik Paletli Vinç", h: 60, cap: 300000, power: 0 },
  // --- Liebherr LTM Mobil Vinçler (liebherr.com) ---
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1030-2.1 Mobil Vinç", h: 30, cap: 35000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1040-2.1 Mobil Vinç", h: 35, cap: 40000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1050-3.1 Mobil Vinç", h: 38, cap: 50000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1055-3.2 Mobil Vinç", h: 40, cap: 55000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1060-3.1 Mobil Vinç", h: 48, cap: 60000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1070-4.2 Mobil Vinç", h: 50, cap: 70000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1090-4.2 Mobil Vinç", h: 60, cap: 90000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1095-5.1 Mobil Vinç", h: 58, cap: 95000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1100-5.3 Mobil Vinç", h: 62, cap: 100000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1110-5.1 Mobil Vinç", h: 60, cap: 110000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1120-4.1 Mobil Vinç", h: 66, cap: 120000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1130-5.1 Mobil Vinç", h: 60, cap: 130000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1160-5.2 Mobil Vinç", h: 62, cap: 160000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1200-5.1 Mobil Vinç", h: 72, cap: 200000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1230-5.1 Mobil Vinç", h: 75, cap: 230000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1250-5.1 Mobil Vinç", h: 70, cap: 250000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1300-6.2 Mobil Vinç", h: 90, cap: 300000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1350-6.1 Mobil Vinç", h: 70, cap: 350000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1400-7.1 Mobil Vinç", h: 60, cap: 400000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1450-8.1 Mobil Vinç", h: 85, cap: 450000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1500-8.1 Mobil Vinç", h: 84, cap: 500000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1650-8.1 Mobil Vinç", h: 80, cap: 700000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 1750-9.1 Mobil Vinç", h: 100, cap: 800000, power: 0 },
  { cat: 8, brand: "Liebherr", model: "Liebherr LTM 11200-9.1 Mobil Vinç", h: 100, cap: 1200000, power: 0 },
  // --- Haulotte (haulotte.co.uk) ---
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 6", h: 5.8, cap: 230, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 6 CRAWLER", h: 5.8, cap: 200, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 6 PICKING", h: 5.8, cap: 210, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 8 S", h: 8, cap: 200, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 8 PICKING", h: 8, cap: 200, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Star 10", h: 10, cap: 200, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Quick Up 8", h: 8, cap: 159, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Quick Up 9", h: 9, cap: 159, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Quick Up 11", h: 11, cap: 159, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Quick Up 12", h: 12, cap: 136, power: 0 },
  { cat: 2, brand: "Haulotte", model: "Haulotte Quick Up 14", h: 14, cap: 136, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte Optimum 8", h: 8, cap: 230, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte Compact 8N", h: 8, cap: 350, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte Compact 10", h: 10, cap: 450, power: 0,
    img: "https://haulotte.ephoto.fr/link/3c9igq/etx1bf9v34s02lc.jpeg" },
  { cat: 0, brand: "Haulotte", model: "Haulotte Compact 10N DUAL", h: 10, cap: 250, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte Compact 12", h: 11.75, cap: 320, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte Compact 14 DUAL", h: 14, cap: 320, power: 0 },
  { cat: 1, brand: "Haulotte", model: "Haulotte Compact 10 DX", h: 10, cap: 565, power: 1 },
  { cat: 1, brand: "Haulotte", model: "Haulotte Compact 12 DX", h: 12, cap: 450, power: 1 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS15 E", h: 15, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS15 E PRO", h: 15, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS18 E", h: 18, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS18 E PRO", h: 18, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS18 E MAX", h: 18, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS21 E", h: 21, cap: 750, power: 0 },
  { cat: 0, brand: "Haulotte", model: "Haulotte HS21 E PRO", h: 21, cap: 750, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA12 CJ", h: 12, cap: 250, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA12 CJ Plus", h: 12, cap: 230, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA16 E", h: 16, cap: 300, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA16 E PRO", h: 16, cap: 300, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA16 RTJ", h: 16, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA16 RTJ O", h: 16, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA16 RTJ PRO", h: 16, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte Sigma 16", h: 16, cap: 230, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte Sigma 16 PRO", h: 16, cap: 230, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA20 E", h: 20.5, cap: 250, power: 0,
    img: "https://haulotte.ephoto.fr/link/3c9igq/ual1by8oxkufe4g.jpeg" },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA20 E PRO", h: 20.5, cap: 250, power: 0 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA20 RTJ", h: 20, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA20 RTJ PRO", h: 20, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA26 RTJ PRO", h: 26, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA32 RTJ PRO", h: 32, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HA41 RTJ PRO", h: 41, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT16 RTJ O", h: 16, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT16 RTJ PRO", h: 16.1, cap: 250, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT23 RTJ O", h: 23, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT23 RTJ PRO", h: 23, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT28 RTJ O", h: 28, cap: 230, power: 1 },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT28 RTJ PRO", h: 28, cap: 230, power: 1,
    img: "https://haulotte.ephoto.fr/link/3c9igq/dsn19ygrrswz6jk.jpeg" },
  { cat: 3, brand: "Haulotte", model: "Haulotte HT43 RTJ PRO", h: 43, cap: 230, power: 1 },
];

// Model adından URL dostu slug üret (tüm dillerde ortak)
const slugify = (m) =>
  m.toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c")
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

for (const p of PRODUCTS) p.slug = slugify(p.model);

// Kategori temsili görselleri (kendi saha fotoğraflarınız).
// Bir ürüne özel fotoğraf eklemek için ürün satırına  img: "/gallery/xx.jpg"  ekleyin.
export const CAT_IMAGES = [
  "/gallery/g10.jpg", // Akülü Makaslı
  "/gallery/g8.jpg",  // Dizel Makaslı
  "/gallery/g1.jpg",  // Dikey
  "/gallery/g6.jpg",  // Eklemli
  "/gallery/g3.jpg",  // Örümcek Platform
  "/gallery/g9.jpg",  // Örümcek Vinç
  "/gallery/g12.jpg", // Araç Üstü
  "/gallery/g7.jpg",  // Forklift
  "/gallery/g13.jpg", // Mobil Vinç
];
export const productImage = (p) => p.img || CAT_IMAGES[p.cat];

export const BRANDS = [...new Set(PRODUCTS.filter((p) => p.brand).map((p) => p.brand))];
export const productsByBrand = (brand) => PRODUCTS.filter((p) => p.brand === brand);

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

// Benzer ürünler: önce aynı kategori, sonra aynı grup içinde yüksekliği en yakın olanlar
export function similarProducts(product, count = 4) {
  const group = [5, 7].includes(product.cat) ? [5, 7] : [0, 1, 2, 3, 4, 6];
  const pool = PRODUCTS.filter((p) => p.slug !== product.slug && group.includes(p.cat));
  const score = (p) =>
    (p.cat === product.cat ? 0 : 100) + Math.abs(p.h - product.h);
  return pool.sort((a, b) => score(a) - score(b)).slice(0, count);
}

export const capText = (cap) => (cap >= 1000 ? `${cap / 1000} t` : `${cap} kg`);

// Asistan eşleştirme: taşınacak (0 insan / 1 malzeme), güç (0/1/2), hedef yükseklik
export function matchProducts(carry, power, height) {
  const cats = carry === 1 ? [5, 7, 8] : [0, 1, 2, 3, 4, 6];
  const powerOk = (p) => (power === 2 ? p.power === 2 : p.power === power || p.power === 2);
  let pool = PRODUCTS.filter((p) => cats.includes(p.cat) && powerOk(p));
  let fit = pool.filter((p) => p.h >= height);
  if (fit.length === 0) fit = pool; // hiçbiri yetmiyorsa en yükseklerini göster
  return fit.sort((a, b) => a.h - b.h).slice(0, 4);
}
