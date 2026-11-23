"""Yayından sonra son günlerde güncellenen sayfaları IndexNow'a bildirir.

Site haritasındaki <lastmod> değeri son N gün içinde olan URL'ler gönderilir.
Anahtar dosyası: https://furkanarikan.av.tr/<KEY>.txt
"""
import datetime, json, re, sys, urllib.request

HOST = "furkanarikan.av.tr"
KEY = "9edcea201dda7fd74f758b304705bde4"
DAYS = int(sys.argv[1]) if len(sys.argv) > 1 else 3

xml = urllib.request.urlopen(f"https://{HOST}/sitemap.xml", timeout=30).read().decode()
cutoff = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=DAYS)
urls = []
for loc, mod in re.findall(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", xml):
    when = datetime.datetime.fromisoformat(mod.replace("Z", "+00:00"))
    if when >= cutoff:
        urls.append(loc)
# Ana sayfa ve site haritası değişikliklerinde her zaman bildirilen sabit sayfalar
for extra in (f"https://{HOST}", f"https://{HOST}/llms.txt"):
    if extra not in urls:
        urls.append(extra)

body = json.dumps({"host": HOST, "key": KEY, "keyLocation": f"https://{HOST}/{KEY}.txt", "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body,
                             headers={"Content-Type": "application/json; charset=utf-8"})
try:
    with urllib.request.urlopen(req, timeout=30) as r:
        print(f"IndexNow {r.status}: {len(urls)} URL gönderildi")
except urllib.error.HTTPError as e:
    print(f"IndexNow hata {e.code}: {e.read().decode()[:300]}")
    sys.exit(1)
