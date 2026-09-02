// ============================================================
// firebase-db.js — LiVi Coffee | Firestore Real-Time Reviews
// ============================================================
// INSTRUCTIONS: Fill in your Firebase project config below.
// Get it from: Firebase Console → Project Settings → Your Apps
// ============================================================

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  increment,
  serverTimestamp,
  writeBatch
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// ─────────────────────────────────────────────
// 🔥 YOUR FIREBASE CONFIG — Fill this in!
// ─────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA2tq8O9LjksBktKG_PAZIxZtBnAzOUG6c",
  authDomain:        "livi-coffee.firebaseapp.com",
  projectId:         "livi-coffee",
  storageBucket:     "livi-coffee.firebasestorage.app",
  messagingSenderId: "926870446037",
  appId:             "1:926870446037:web:2f99ecd0da74faf21c275c",
  measurementId:     "G-40BCR03J9C"
};

// ─────────────────────────────────────────────
// Initial Seed Reviews (loaded once to Firestore)
// ─────────────────────────────────────────────
const SEED_REVIEWS = [
  {
    id: 'seed-1',
    name: { en: 'Tarek Mansour', ar: 'طارق منصور' },
    initials: 'TM',
    rating: 5,
    item: 'Molten Cake & V60',
    text: {
      en: 'The Molten Cake here is to die for! Flowing warm chocolate paired with a V60 coffee is absolute heaven. Desouk has never had a place this high-end.',
      ar: 'المولتن كيك خرافية والشوكولاتة دايبة مع القهوة المقطرة V60 مفيش أجمل من كده! كافيه فندقي راقي في دسوق.'
    },
    tag: { en: 'Amazing Taste', ar: 'طعم رائع' },
    helpfulCount: 45,
    verified: true,
    seeded: true
  },
  {
    id: 'seed-2',
    name: { en: 'Nouran El-Sayed', ar: 'نوران السيد' },
    initials: 'NE',
    rating: 5,
    item: 'Pancake Stack & Nutella Shake',
    text: {
      en: 'The Pancake stack is golden, fluffy, and covered in fresh berries. Loved the Nutella Shake and the cozy atmosphere!',
      ar: 'البان كيك هش وجميل جداً مع التوت وصوص المابل. والميلك شيك بالنوتيلا فظيع، وجلسات المكان هادية ومريحة.'
    },
    tag: { en: 'Cozy Atmosphere', ar: 'أجواء مريحة' },
    helpfulCount: 38,
    verified: true,
    seeded: true
  },
  {
    id: 'seed-3',
    name: { en: 'Dr. Hesham Adel', ar: 'د. هشام عادل' },
    initials: 'HA',
    rating: 5,
    item: 'Cinnabon & Flat White',
    text: {
      en: 'Fresh warm Cinnabon with extra nuts alongside a Flat White. Top-notch ingredients and swift service.',
      ar: 'السينابون فريش ودافئ مع مكسرات وفلات وايت ممتاز. خامات نظيفة ومكان يشرف وخدمة ممتازة.'
    },
    tag: { en: 'Best in Desouk', ar: 'الأفضل في دسوق' },
    helpfulCount: 52,
    verified: true,
    seeded: true
  }
];

// ─────────────────────────────────────────────
// Module State
// ─────────────────────────────────────────────
let _db = null;
let _reviewsCol = null;
let _unsubscribe = null;
let _isConfigured = false;

function isFirebaseConfigured() {
  return (
    FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY' &&
    FIREBASE_CONFIG.projectId !== 'YOUR_PROJECT_ID'
  );
}

// ─────────────────────────────────────────────
// Initialize Firebase
// ─────────────────────────────────────────────
export function initFirebase() {
  if (!isFirebaseConfigured()) {
    console.warn('[LiVi DB] Firebase not configured yet. Using localStorage fallback.');
    return false;
  }
  try {
    const app = initializeApp(FIREBASE_CONFIG);
    _db = getFirestore(app);
    _reviewsCol = collection(_db, 'reviews');
    _isConfigured = true;
    console.log('[LiVi DB] Firebase connected!');
    return true;
  } catch (err) {
    console.error('[LiVi DB] Firebase init error:', err);
    return false;
  }
}

// ─────────────────────────────────────────────
// Seed initial reviews once
// ─────────────────────────────────────────────
export async function seedInitialReviews() {
  if (!_isConfigured) return;
  try {
    const snapshot = await getDocs(query(_reviewsCol));
    if (!snapshot.empty) {
      console.log('[LiVi DB] Seed already done, skipping.');
      return;
    }
    const batch = writeBatch(_db);
    const baseTime = Date.now();
    SEED_REVIEWS.forEach((review, i) => {
      const ref = doc(_reviewsCol, review.id);
      batch.set(ref, {
        ...review,
        createdAt: serverTimestamp(),
        sortOrder: -(baseTime - (i * 1000000))
      });
    });
    await batch.commit();
    console.log('[LiVi DB] Seed reviews uploaded.');
  } catch (err) {
    console.error('[LiVi DB] Seed error:', err);
  }
}

// ─────────────────────────────────────────────
// Save a new review to Firestore
// ─────────────────────────────────────────────
export async function saveReview(review) {
  if (!_isConfigured) return null;
  try {
    const docRef = await addDoc(_reviewsCol, {
      ...review,
      createdAt: serverTimestamp(),
      sortOrder: -Date.now()
    });
    console.log('[LiVi DB] Review saved:', docRef.id);
    return docRef;
  } catch (err) {
    console.error('[LiVi DB] Save error:', err);
    return null;
  }
}

// ─────────────────────────────────────────────
// Increment helpfulCount for a review
// ─────────────────────────────────────────────
export async function incrementHelpful(reviewId) {
  if (!_isConfigured) return;
  try {
    const ref = doc(_reviewsCol, reviewId);
    await updateDoc(ref, { helpfulCount: increment(1) });
  } catch (err) {
    console.error('[LiVi DB] Helpful error:', err);
  }
}

// ─────────────────────────────────────────────
// Real-Time Listener — calls callback on every change
// ─────────────────────────────────────────────
export function listenToReviews(callback) {
  if (!_isConfigured) return null;
  if (_unsubscribe) _unsubscribe();

  const q = query(_reviewsCol, orderBy('sortOrder', 'asc'));

  _unsubscribe = onSnapshot(q, (snapshot) => {
    const reviews = snapshot.docs.map((d) => ({
      firestoreId: d.id,
      ...d.data()
    }));
    callback(reviews);
  }, (err) => {
    console.error('[LiVi DB] Listener error:', err);
  });

  return _unsubscribe;
}

export function stopListening() {
  if (_unsubscribe) {
    _unsubscribe();
    _unsubscribe = null;
  }
}

export function isDbReady() {
  return _isConfigured;
}
