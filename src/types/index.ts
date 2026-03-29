export interface UserProfile {
  uid: string;
  phone: string;
  displayName: string;
  username: string;
  bio: string;
  avatar: string;
  photos: string[];
  badges: Badge[];
  interests: string[];
  customColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  age: number;
  gender: string;
  location: string;
  hourlyRate: number;
  rating: number;
  totalHires: number;
  isOnline: boolean;
  isVerified: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  earnedAt: number;
}

export interface Like {
  id: string;
  fromUserId: string;
  toUserId: string;
  type: "like" | "superlike";
  createdAt: number;
}

export interface Match {
  id: string;
  users: string[];
  createdAt: number;
  chatUnlocked: boolean;
  discount: number;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  text: string;
  imageUrl?: string;
  createdAt: number;
  read: boolean;
}