import cron from 'node-cron';

// Placeholder jobs
const runRiskDetection = async () => { console.log('Running risk detection...'); };
const runEveningCheckin = async () => { console.log('Running evening checkin...'); };
const runHabitReminder = async () => { console.log('Running habit reminder...'); };
const runWeeklyInsights = async () => { console.log('Running weekly insights...'); };
const snapshotDailyProductivity = async () => { console.log('Running daily productivity snapshot...'); };

export function initScheduledJobs() {
  // Risk detection: every day at 8:00 AM
  cron.schedule('0 8 * * *', runRiskDetection);
  
  // Evening checkin reminder: every day at 7:00 PM
  cron.schedule('0 19 * * *', runEveningCheckin);
  
  // Habit reminder: every day at 9:00 AM
  cron.schedule('0 9 * * *', runHabitReminder);
  
  // Weekly insights: every Sunday at 8:00 PM
  cron.schedule('0 20 * * 0', runWeeklyInsights);
  
  // Productivity log: every day at 11:59 PM (snapshot the day)
  cron.schedule('59 23 * * *', snapshotDailyProductivity);
}
