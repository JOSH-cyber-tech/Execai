import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function useAuthHeaders() {
  const { getToken } = useAuth();
  return async () => {
    const token = await getToken();
    return { Authorization: `Bearer ${token}` };
  };
}

export function useTasks() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/tasks`, { headers });
      return data;
    }
  });
}

export function useQuickAddTask() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (input: string) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/tasks/quickadd`, { input }, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    }
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; status?: string; title?: string; deadline?: string; description?: string; estimatedMinutes?: number }) => {
      const headers = await getHeaders();
      const { data } = await axios.patch(`${API_URL}/api/tasks/${id}`, updates, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['analytics'] });
      queryClient.invalidateQueries({ queryKey: ['assistant-checkin'] });
    }
  });
}

export function useAssistantCommand() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (input: string) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/assistant/command`, { input }, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['schedule'] });
      queryClient.invalidateQueries({ queryKey: ['analytics'] });
      queryClient.invalidateQueries({ queryKey: ['assistant-checkin'] });
      queryClient.invalidateQueries({ queryKey: ['assistant-monitor'] });
    }
  });
}

export function useAssistantCheckIn(enabled = true) {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['assistant-checkin'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/assistant/checkin`, { headers });
      return data;
    },
    enabled,
  });
}

export function useAssistantMonitor(enabled = true) {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['assistant-monitor'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/assistant/monitor`, { headers });
      return data;
    },
    enabled,
    refetchInterval: 60 * 1000,
  });
}

export function useGenerateStudyPlan() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (days: number) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/assistant/plan`, { days }, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedule'] });
      queryClient.invalidateQueries({ queryKey: ['assistant-checkin'] });
    }
  });
}

export function useGoals() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['goals'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/goals`, { headers });
      return data;
    }
  });
}

export function useCreateGoal() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (goal: { title: string; description: string; days: number }) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/goals`, goal, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
    }
  });
}

export function useSubmitCheckIn() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (checkIn: {
      reflection: string;
      obstacles: string;
      tomorrowPlan: string;
    }) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/checkin`, checkIn, { headers });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['checkins'] });
    }
  });
}

export function useSchedule() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['schedule'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/schedule`, { headers });
      return data;
    }
  });
}

export function useCreateScheduleBlock() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (block: { title: string; startTime: string; endTime: string; blockType?: string }) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/schedule`, block, { headers });
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['schedule'] })
  });
}

export function useHabits() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['habits'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/habits`, { headers });
      return data;
    }
  });
}

export function useCreateHabit() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (habit: { name: string; description?: string }) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/habits`, habit, { headers });
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['habits'] })
  });
}

export function useCompleteHabit() {
  const queryClient = useQueryClient();
  const getHeaders = useAuthHeaders();

  return useMutation({
    mutationFn: async (id: string) => {
      const headers = await getHeaders();
      const { data } = await axios.post(`${API_URL}/api/habits/${id}/complete`, {}, { headers });
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['habits'] })
  });
}

export function useAnalytics() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/analytics`, { headers });
      return data;
    }
  });
}

export function useNotifications() {
  const getHeaders = useAuthHeaders();

  return useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const headers = await getHeaders();
      const { data } = await axios.get(`${API_URL}/api/notifications`, { headers });
      return data;
    },
    refetchInterval: 30 * 1000,
  });
}
