import { RateLimiterPrisma } from 'rate-limiter-flexible';
import { auth } from '@clerk/nextjs/server';

import prisma from './prisma';

const FREE_POINTS = 500;
const PRO_POINTS = 100;
const DURATION = 30 * 24 * 60 * 60; // 30 days
const GENERATION_COST = 1;

export async function getUsageTracker() {
  return {
    remainingPoints: 500,
    msBeforeNext: 0,
    consumedPoints: 0,
    isExceeded: false,
    consume: async () => ({ remainingPoints: 500, msBeforeNext: 0, consumedPoints: 0, isExceeded: false }),
    get: async () => ({ remainingPoints: 500, msBeforeNext: 0, consumedPoints: 0, isExceeded: false }),
  } as any;
}

export async function consumeCredits() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('User not autheticated');
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.consume(userId, GENERATION_COST);

  return result;
}

export async function getUsageStatus() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('User not autheticated');
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.get(userId);

  return result;
}
