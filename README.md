# پکیج استقرار داکر پلتفرم آی‌بی‌شاپ (iBshop Docker Deployment Package)

این مخزن حاوی فایل‌های استقرار کانتینری (`Docker Compose`)، تنظیمات مسیریابی (`Nginx Gateway`) و فایل‌های کانفیگ بیرونی پلتفرم **iBshop (پرتال عمومی SSR، پنل مدیریت CMS و سرویس بک‌اند .NET 10)** ویژه سرور لینوکس است.

---

## ۱. لیست سرویس‌ها و پورت‌ها

| نام سرویس | نام کانتینر | پورت پیش‌فرض روی سرور لینوکس | توضیحات |
| :--- | :--- | :---: | :--- |
| **پرتال وب عمومی (SSR) + درگاه API** | `ibshop-gateway` / `ibshop-web-portal` | **`8080`** | سایت اصلی (`http://SERVER_IP:8080`) + مستندات `/swagger` |
| **پنل مدیریت CMS (Admin SPA)** | `ibshop-gateway` / `ibshop-admin-panel` | **`8081`** | پنل مدیریت (`http://SERVER_IP:8081`) |
| **سرویس بک‌اند (.NET 10 API)** | `ibshop-cms-api` | **`5215`** | دسترسی مستقیم به API و `/api/system/version` |
| **دیتابیس SQL Server 2022** | `ibshop-sqlserver` | **`14333`** | دیتابیس `iBshopDb` (ایجاد خودکار جداول و دیتای اولیه در اولین اجرا) |
| **سرویس کش Redis 7** | `ibshop-redis` | داخلی (`6379`) | کش توزیع‌شده و مدیریت Idempotency |

---

## ۲. راهنمای راه‌اندازی سریع روی سرور لینوکس

### روش اول: راه‌اندازی آفلاین (مخصوص سرور بدون اینترنت با فایل `.tar.gz`)
۱. فایل‌های این مخزن را به همراه فایل فشرده ایمیج‌ها (`ibshop-images-v0.1.1-20261109.2.tar.gz`) از بخش **[Releases](../../releases)** دانلود کرده و در یک پوشه (مثلاً `/opt/ibshop`) روی سرور لینوکس قرار دهید.
۲. دستور زیر را اجرا کنید:
```bash
chmod +x deploy.sh
./deploy.sh v0.1.1-20261109.2
```
*(اسکریپت `deploy.sh` به‌صورت خودکار ایمیج‌ها را با `docker load` بارگذاری کرده و تمام کانتینرها را با `docker compose up -d` بالا می‌آورد).*

### روش دوم: راه‌اندازی آنلاین (در صورت دسترسی سرور به اینترنت/پروکسی)
```bash
cp .env.example .env
docker compose pull
docker compose up -d
```

---

## ۳. تغییر تنظیمات (CORS، دیتابیس، کوکی و آدرس‌ها) بدون نیاز به بیلد مجدد

تمامی تنظیمات حساس سیستم **خارج از ایمیج‌های داکر** قرار دارند و در هر زمان بدون نیاز به بیلد مجدد قابل تغییر هستند:

1. **فایل `.env`:**
   * تغییر پورت‌ها (`PORTAL_HTTP_PORT`, `ADMIN_HTTP_PORT`)
   * تغییر آدرس دیتابیس (`DB_CONNECTION_STRING`) در صورت استفاده از SQL Server مجزا
   * تنظیمات CORS (`CORS_ALLOW_ANY_ORIGIN=true` یا لیست دامنه‌ها در `CORS_ALLOWED_ORIGINS`)
   * سیاست کوکی روی HTTP یا HTTPS (`COOKIE_SECURE_POLICY=SameAsRequest`)
2. **فایل `config/appsettings.Production.json`:**
   * به صورت Volume داخل کانتینر بک‌اند Mount شده است. با هر تغییر و اجرای `docker compose restart cms-api` تنظیمات جدید اعمال می‌شود.
3. **فایل‌های `config/admin-app-config.json` و `config/portal-app-config.json`:**
   * تنظیمات زمان اجرای فرانت‌اند (از جمله `apiUrl` و `timeout`). در حالت پیش‌فرض روی `"/"` قرار دارد تا بدون وابستگی به IP یا دامنه، به همان آدرس سرور متصل شود.

---

## ۴. بررسی سلامت و نسخه در حال اجرا (Health & Version Check)

پس از بالا آمدن کانتینرها، برای اطمینان از نسخه دقیق در حال اجرا و اعمال شدن دیتابیس، آدرس زیر را باز کنید:
```text
http://<SERVER_IP>:8080/api/system/version
```
