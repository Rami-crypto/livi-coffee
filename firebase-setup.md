# دليل إعداد Firebase لـ LiVi Coffee

## الخطوة 1 — إنشاء مشروع Firebase

1. افتح [console.firebase.google.com](https://console.firebase.google.com)
2. اضغط **"Add project"** (أضف مشروعاً)
3. اسم المشروع: `livi-coffee` (أو أي اسم تريده)
4. وافق على الشروط واضغط **"Create project"**

---

## الخطوة 2 — إنشاء قاعدة Firestore

1. من القائمة الجانبية → **"Firestore Database"**
2. اضغط **"Create database"**
3. اختر **"Start in test mode"** (وضع الاختبار — مجاني لـ 30 يوم)
4. اختر المنطقة الأقرب: `eur3 (Europe)` أو `me-central1 (Middle East)`
5. اضغط **"Done"**

---

## الخطوة 3 — الحصول على بيانات التهيئة

1. من القائمة الجانبية → **"Project Settings"** (أيقونة الترس)
2. انتقل لتبويب **"Your apps"**
3. اضغط أيقونة `</>`  (Web App)
4. أدخل اسم التطبيق: `LiVi Web`
5. اضغط **"Register app"**
6. **انسخ** بيانات الـ config التي تظهر، تبدو كالتالي:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "livi-coffee.firebaseapp.com",
  projectId: "livi-coffee",
  storageBucket: "livi-coffee.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## الخطوة 4 — تحديث ملف firebase-db.js

1. افتح ملف `firebase-db.js` في أي محرر نصوص
2. ابحث عن قسم `FIREBASE_CONFIG`
3. استبدل القيم بما نسخته:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",         // ← ضع apiKey هنا
  authDomain:        "livi-coffee.firebaseapp.com",
  projectId:         "livi-coffee",       // ← اسم مشروعك
  storageBucket:     "livi-coffee.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

4. احفظ الملف

---

## الخطوة 5 — ضبط Security Rules (مهم!)

1. من Firestore Console → **"Rules"**
2. استبدل القواعد بما يلي (يسمح بالقراءة للجميع والكتابة للجميع):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.resource.data.text is string
                    && request.resource.data.text.size() > 0
                    && request.resource.data.text.size() < 1000
                    && request.resource.data.name is string
                    && request.resource.data.name.size() > 0;
      allow update: if request.resource.data.diff(resource.data).affectedKeys()
                       .hasOnly(['helpfulCount']);
    }
  }
}
```

3. اضغط **"Publish"**

---

## الخطوة 6 — رفع الملفات ونشر الموقع

- ارفع الملفات (`app.js`, `firebase-db.js`, `index.html`) على GitHub Pages أو أي hosting
- **ملاحظة:** الموقع يجب يُخدَّم عبر HTTPS (مش file://) لتعمل Firebase

---

## التحقق من النجاح

بعد فتح الموقع:
1. افتح Developer Tools → Console
2. يجب أن تظهر: `[LiVi DB] ✅ Firebase connected!`
3. بعد أول فتح: `[LiVi DB] ✅ Seed reviews uploaded.`
4. افتح الموقع في متصفح آخر وأضف تقييماً → يجب أن يظهر فوراً في المتصفح الأول!

---

## ملاحظات الـ Quota المجاني (Spark Plan)

| العملية | الحد اليومي المجاني |
|---------|---------------------|
| قراءة   | 50,000 / يوم        |
| كتابة   | 20,000 / يوم        |
| حذف     | 20,000 / يوم        |
| تخزين   | 1 GB                |

هذا كافي جداً لموقع كافيه.
