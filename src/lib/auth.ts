import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { UserProfile } from "../types";

/*
  createUserProfile = নতুন user এর profile Firebase এ save করে
  
  uid = user এর unique ID
  phone = ফোন নম্বর
  
  Firestore এ "users" collection এ save হবে
  প্রতিটা user এর document ID হবে তার uid
*/
export async function createUserProfile(
  uid: string,
  phone: string
): Promise<void> {
  try {
    // আগে check করো এই user আগে থেকে আছে কিনা
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    // যদি আগে থেকে না থাকে, নতুন profile বানাও
    if (!userSnap.exists()) {
      const newProfile: UserProfile = {
        uid: uid,
        phone: phone,
        displayName: "",
        username: "user_" + uid.slice(0, 8),
        bio: "",
        avatar: "",
        photos: [],
        badges: [
          {
            id: "newcomer",
            name: "Newcomer",
            icon: "🌟",
            color: "#fdcb6e",
            earnedAt: Date.now(),
          },
        ],
        interests: [],
        customColors: {
          primary: "#6c5ce7",
          secondary: "#00b894",
          accent: "#fd79a8",
        },
        age: 0,
        gender: "",
        location: "",
        hourlyRate: 0,
        rating: 5.0,
        totalHires: 0,
        isOnline: true,
        isVerified: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      await setDoc(userRef, newProfile);
      console.log("✅ নতুন profile তৈরি হয়েছে!");
    } else {
      console.log("✅ Profile আগে থেকেই আছে");
    }
  } catch (error) {
    console.error("❌ Profile save করতে সমস্যা:", error);
    throw error;
  }
}

/*
  getUserProfile = Firebase থেকে user এর profile পড়ে আনে
  
  uid দিলে সেই user এর সব data return করে
  না পেলে null return করে
*/
export async function getUserProfile(
  uid: string
): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error("❌ Profile পড়তে সমস্যা:", error);
    return null;
  }
}

/*
  updateUserProfile = আগের profile update করে
  
  uid = কার profile
  data = কী কী change করবে
*/
export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(
      userRef,
      { ...data, updatedAt: Date.now() },
      { merge: true }
    );
    console.log("✅ Profile update হয়েছে!");
  } catch (error) {
    console.error("❌ Profile update সমস্যা:", error);
    throw error;
  }
}