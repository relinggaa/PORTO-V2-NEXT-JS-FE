import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../services/AuthService';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      // Token is automatically stored in httpOnly cookie
      router.push('/dashboard/home');
    },
  });
};
