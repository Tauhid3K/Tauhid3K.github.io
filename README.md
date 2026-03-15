# Tauhid3K.github.io

Personal site hosted with **GitHub Pages**, using a custom **.me** domain.

---

## GitHub Pages + .me Domain Checklist (Simple)

### 1) Get a domain
- Get a free **.me** domain via **Namecheap** using the **GitHub Student Pack**.
- Make sure the domain is in your Namecheap account (and connected to your GitHub account if prompted).

---

### 2) Create the GitHub Pages repository
Create a repo named **exactly**:

`YourUsername.github.io`

Example: `Tauhid3K.github.io`

---

### 3) Add website files
Upload your site files to the repository.

**Required**
- `index.html` (must be in the repo root)

**Optional**
- `style.css`
- `script.js`
- `images/`
- `fonts/`
- `favicon.svg`

Important: `index.html` must be in the **root**, not inside a folder.

---

### 4) Add a `CNAME` file
Create a file named **CNAME** (no extension) in the repo root.

Put your custom domain inside (single line):

`tauhidshahriar.me`

---

### 5) Configure Namecheap DNS
In Namecheap: **Domain → Advanced DNS → Host Records**

Add these records:

**A Records (root / @)**
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

**CNAME (www)**
- `www` → `Tauhid3K.github.io`

---

### 6) Enable GitHub Pages
In your repo: **Settings → Pages**
- **Source:** `main` branch
- **Folder:** `/ (root)`
- **Custom domain:** `tauhidshahriar.me`
- Enable **Enforce HTTPS** (it may take a bit before this becomes available)

---

### 7) Wait for DNS + HTTPS
Typical timing:
- DNS: **10–30 minutes** (can be longer)
- GitHub Pages rebuild: **1–5 minutes**

---

### 8) Test your website
Try:
- `https://tauhidshahriar.me`

If it’s not working yet:
- `https://Tauhid3K.github.io`

---

## Notes
- This guide includes only public configuration details (no passwords, tokens, or private keys).
- If HTTPS isn’t available immediately, wait and check again in **Settings → Pages**.