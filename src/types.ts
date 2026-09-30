export type Platform = 'instagram' | 'tiktok' | 'youtube' | 'x' | 'spotify' | 'facebook';

export type TaskType = 'follow' | 'like' | 'comment' | 'watch' | 'repost' | 'subscribe';

export type Currency = 'ZAR' | 'USD' | 'EUR' | 'GBP' | 'NGN';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rateToZar: number; // 1 ZAR = rate in target currency (or base relative multiplier)
  format: (amount: number) => string;
}

export interface PromotionTask {
  id: string;
  title: string;
  handle: string;
  platform: Platform;
  type: TaskType;
  description: string;
  rewardZar: number;
  totalSlots: number;
  completedSlots: number;
  avatarGradient: string;
  avatarUrl?: string;
  actionUrl: string;
  tags: string[];
  isHot?: boolean;
  timeEstimate: string;
}

export interface CampaignPlan {
  id: string;
  name: string;
  platform: Platform;
  goalType: string;
  quantity: number;
  priceZar: number;
  deliveryTime: string;
  perActionZar: number;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  role: 'creator' | 'promoter';
  avatar: string;
  platform: Platform;
  quote: string;
  stats: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'creators' | 'promoters' | 'payouts';
}

export interface LiveActivityEvent {
  id: string;
  user: string;
  action: string;
  platform: Platform;
  amountZar?: number;
  timestamp: string;
}
