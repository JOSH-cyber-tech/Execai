import { PrismaClient } from './generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Clean up existing data
  await prisma.user.deleteMany({});
  
  const user = await prisma.user.create({
    data: {
      clerkId: 'user_2xyz',
      email: 'demo@example.com',
      name: 'Demo User',
      preferences: {
        freeTimeStart: "19:00",
        freeTimeEnd: "22:00",
        timezone: "Asia/Kolkata",
        notificationsEnabled: true
      }
    }
  });

  const goal = await prisma.goal.create({
    data: {
      userId: user.id,
      title: 'Pass DSA Placement Exam',
      description: 'Need to review core data structures and algorithms.',
      category: 'ACADEMIC',
      targetDate: new Date(new Date().setDate(new Date().getDate() + 8)),
      estimatedHours: 40,
      completionPct: 20
    }
  });

  await prisma.task.create({
    data: {
      userId: user.id,
      goalId: goal.id,
      title: 'Review Arrays and Strings',
      description: 'Practice two-pointer and sliding window problems.',
      estimatedMinutes: 120,
      priorityScore: 90,
      priorityLabel: 'CRITICAL',
      status: 'PENDING',
      deadline: new Date(new Date().setDate(new Date().getDate() + 2)),
      riskLevel: 'HIGH',
      riskReason: 'Only 2 days left, 10% complete',
      subtasks: {
        create: [
          { title: 'Read Grokking the Coding Interview section' },
          { title: 'Solve Two Sum' },
          { title: 'Solve Longest Substring Without Repeating Characters' }
        ]
      }
    }
  });

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
