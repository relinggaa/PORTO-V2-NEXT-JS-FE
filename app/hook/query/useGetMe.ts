import { useQuery } from '@tanstack/react-query';
import { AuthService } from '@/app/services/AuthService';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return await AuthService.getMe();
    },
    retry: false, // Don't retry if it fails (e.g., unauthorized)
  });
};
