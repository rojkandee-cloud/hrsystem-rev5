# 🏢 HR System Rev.5 — Claude AI Edition

ระบบบริหารจัดการทรัพยากรบุคคล พัฒนาด้วย React + TypeScript + Firebase  
ขับเคลื่อนโดย **Anthropic Claude AI** (Migration จาก Google Gemini)

---

## ✨ Features

| Feature | รายละเอียด |
|---------|-----------|
| 👤 จัดการพนักงาน | เพิ่ม/แก้ไข/ลบ พร้อมรูปถ่าย |
| 🪪 บัตรพนักงาน | สร้างบัตร CR80 (54×86mm) ด้านหน้า+หลัง |
| 🤖 AI Assistant | วิเคราะห์ข้อมูล HR ด้วย Claude |
| 🔐 Face Verification | ยืนยันตัวตนด้วย Claude Vision |
| 📊 Dashboard | Workforce, Attendance, Leave reports |
| 📅 Work Calendar | ปฏิทินวันทำงานและวันหยุด |
| 💬 LINE Bridge | ส่งรายงานสรุปเข้า LINE |
| 📍 Address Map | Geocoding ด้วย Claude |

---

## 🚀 เริ่มต้นใช้งาน

### Prerequisites
- Node.js 18+
- Firebase Project
- Anthropic Claude API Key → [console.anthropic.com](https://console.anthropic.com)

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/hrsystem-rev5.git
cd hrsystem-rev5
```

### 2. ติดตั้ง Dependencies
```bash
npm install
```

### 3. ตั้งค่า Environment Variables
```bash
cp .env.example .env.local
```
เปิด `.env.local` แล้วใส่ค่าจริง:
```env
VITE_CLAUDE_API_KEY=sk-ant-api03-...
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_PROJECT_ID=...
# ดูรายละเอียดใน .env.example
```

### 4. Run Development Server
```bash
npm run dev
```
เปิด browser → `http://localhost:3000`

---

## 📁 โครงสร้างโปรเจกต์

```
hrsystem-rev5/
├── components/
│   ├── IdCardGeneratorDialog.tsx   # บัตรพนักงาน (Rev.5)
│   ├── AiAssistant.tsx             # Claude AI Panel
│   ├── InsightPanel.tsx            # Data Insights
│   ├── LoginOverlay.tsx            # QR + Face Login
│   └── ...                        # 20+ components
├── services/
│   ├── claudeService.ts            # ✅ Claude API (Rev.5)
│   └── firebase.ts                 # ✅ Firebase (fixed)
├── .env.example                    # Template (safe to commit)
├── .env.local                      # ⚠️ ไม่ commit (อยู่ใน .gitignore)
├── vite.config.ts                  # Dev proxy สำหรับ Claude API
└── package.json
```

---

## 🤖 Claude AI Functions

| Function | Model | งาน |
|----------|-------|-----|
| `verifyLoginFace()` | claude-opus-4-5 | Face biometric login |
| `checkFaceUniqueness()` | claude-opus-4-5 | ตรวจซ้ำใบหน้า |
| `verifyIdentityMatch()` | claude-opus-4-5 | เทียบ portrait vs ID card |
| `checkDocumentQuality()` | claude-sonnet-4-5 | ตรวจคุณภาพเอกสาร |
| `askCrossCollectionQuestion()` | claude-opus-4-5 | AI Agent + Tool Use |
| `getCoordinatesFromAddress()` | claude-haiku-4-5 | Geocoding |
| `askAiForLineSharing()` | claude-haiku-4-5 | สรุปรายงาน LINE |
| `generateInsight()` | claude-haiku-4-5 | วิเคราะห์ข้อมูล |

---

## ⚠️ Security Notes

- **ห้าม** commit `.env.local` หรือไฟล์ที่มี API Key จริง
- `.gitignore` ได้ block ไฟล์เหล่านี้ไว้แล้ว
- ใช้ **GitHub Secrets** สำหรับ CI/CD
- Claude API Key ต้องอยู่ใน server-side เท่านั้น (Vite proxy จัดการให้แล้วใน dev)

---

## 🔧 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite 6
- **UI**: Tailwind CSS + Lucide Icons
- **Database**: Firebase Firestore (offline-first)
- **AI**: Anthropic Claude API
- **PDF**: jsPDF + html2canvas
- **QR**: jsQR + qrcode

---

## 📄 License

Private — บริษัท เหล็กฟ้าใส จำกัด
