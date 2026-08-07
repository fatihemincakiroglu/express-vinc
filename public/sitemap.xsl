<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html lang="tr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Site Haritası | Express Vinç</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',system-ui,sans-serif;background:#F7F6F1;color:#182119;line-height:1.6}
    .wrap{max-width:1100px;margin:0 auto;padding:0 20px 60px}
    header{background:#0D0D0D;padding:34px 0;margin-bottom:34px;border-bottom:4px solid #FFDD13}
    header .wrap{padding-bottom:0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px}
    .brand{font-size:1.6rem;font-weight:800;color:#fff}
    .brand em{font-style:italic;color:#FFDD13}
    .badge{background:#FFDD13;color:#111;font-weight:800;font-size:.8rem;padding:8px 18px;border-radius:999px}
    h1{font-size:1.35rem;margin-bottom:6px}
    .sub{color:#616161;font-size:.9rem;margin-bottom:26px}
    table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 12px 34px rgba(0,0,0,.06)}
    th{background:#161616;color:#FFDD13;text-align:left;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;padding:14px 18px}
    td{padding:13px 18px;border-top:1px solid #EDEBE2;font-size:.9rem;vertical-align:middle}
    tr:hover td{background:#FFFDF2}
    a{color:#182119;text-decoration:none;font-weight:600;word-break:break-all}
    a:hover{color:#9E8500}
    .num{color:#9E8500;font-weight:800;width:46px}
    .pill{display:inline-block;background:#F1F0EA;border-radius:999px;padding:3px 10px;font-size:.72rem;font-weight:800;color:#555;margin-right:4px}
    .pill.gold{background:#FFDD13;color:#111}
    .meta{color:#8a8a82;font-size:.78rem;white-space:nowrap}
    footer{margin-top:26px;color:#8a8a82;font-size:.78rem;text-align:center}
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <div class="brand"><em>Express</em> Vinç</div>
      <xsl:choose>
        <xsl:when test="sm:sitemapindex">
          <div class="badge"><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/> dil sitemap'i</div>
        </xsl:when>
        <xsl:otherwise>
          <div class="badge"><xsl:value-of select="count(sm:urlset/sm:url)"/> sayfa</div>
        </xsl:otherwise>
      </xsl:choose>
    </div>
  </header>
  <div class="wrap">
    <xsl:choose>

      <!-- ======== SİTEMAP DİZİNİ ======== -->
      <xsl:when test="sm:sitemapindex">
        <h1>Site Haritası Dizini</h1>
        <p class="sub">Her dil için ayrı sitemap dosyası. Detay için satıra tıklayın.</p>
        <table>
          <tr><th>#</th><th>Sitemap</th><th>Son Güncelleme</th></tr>
          <xsl:for-each select="sm:sitemapindex/sm:sitemap">
            <tr>
              <td class="num"><xsl:value-of select="position()"/></td>
              <td>
                <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                <xsl:choose>
                  <xsl:when test="contains(sm:loc,'-tr.xml')"><span class="pill gold">TR · Varsayılan</span></xsl:when>
                  <xsl:when test="contains(sm:loc,'-en.xml')"><span class="pill">EN</span></xsl:when>
                  <xsl:when test="contains(sm:loc,'-de.xml')"><span class="pill">DE</span></xsl:when>
                </xsl:choose>
              </td>
              <td class="meta"><xsl:value-of select="sm:lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </xsl:when>

      <!-- ======== URL LİSTESİ ======== -->
      <xsl:otherwise>
        <h1>Site Haritası</h1>
        <p class="sub">Bu dosyadaki her sayfa; tr, en, de ve x-default hreflang alternatifleriyle birlikte listelenir.</p>
        <table>
          <tr><th>#</th><th>URL</th><th>Diller</th><th>Öncelik</th><th>Son Güncelleme</th></tr>
          <xsl:for-each select="sm:urlset/sm:url">
            <tr>
              <td class="num"><xsl:value-of select="position()"/></td>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td>
                <xsl:for-each select="xhtml:link[@hreflang!='x-default']">
                  <span class="pill"><xsl:value-of select="@hreflang"/></span>
                </xsl:for-each>
              </td>
              <td class="meta"><xsl:value-of select="sm:priority"/></td>
              <td class="meta"><xsl:value-of select="sm:lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </xsl:otherwise>
    </xsl:choose>
    <footer>Express Vinç · Otomatik oluşturulan site haritası · x-default = Türkçe</footer>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
