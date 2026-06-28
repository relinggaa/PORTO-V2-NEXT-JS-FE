import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../services/AuthService';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      // API call clears cookies, redirect to login
      router.push('/login');
    },
    onError: () => {
      // Even if API fails (e.g. token already expired), force redirect to login
      router.push('/login');
    }
  });
};
