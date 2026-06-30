const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create Demo User
  const user = await prisma.user.upsert({
    where: { clerkId: 'user_2xyz_demo' },
    update: {},
    create: {
      clerkId: 'user_2xyz_demo',
      email: 'demo@execai.com',
      firstName: 'Demo',
      lastName: 'User',
      settings: {
        workHoursStart: '09:00',
        workHoursEnd: '17:00',
        timezone: 'UTC',
        checkInTime: '20:00'
      }
    },
  });

  // Create Goal
  const goal = await prisma.goal.create({
    data: {
      userId: user.id,
      title: 'Launch ExecAI MVP',
      description: 'Complete all Phase 1 features for the hackathon',
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      status: 'in_progress',
      progress: 45
    }
  });

  // Create Tasks
  await prisma.task.createMany({
    data: [
      {
        userId: user.id,
        goalId: goal.id,
        title: 'Submit Hackathon project',
        description: 'Record demo, update readme, and submit on Devpost',
        deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        priority: 'high',
        riskLevel: 'critical',
        status: 'pending',
        timeEstimate: 120
      },
      {
        userId: user.id,
        goalId: goal.id,
        title: 'Implement Prisma Schema',
        description: 'Define User, Goal, Task, Habit, DailyCheckIn, Notification',
        deadline: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        priority: 'high',
        riskLevel: 'none',
        status: 'completed',
        timeEstimate: 60
      },
      {
        userId: user.id,
        title: 'Review PR for frontend components',
        deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        priority: 'medium',
        riskLevel: 'low',
        status: 'pending',
        timeEstimate: 30
      }
    ]
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
