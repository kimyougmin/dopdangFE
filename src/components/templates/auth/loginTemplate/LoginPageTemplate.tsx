'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import LoginForm from '@/components/organisms/auth/loginForm/LoginForm';
import GoToSignUp from '@/components/atoms/texts/goToSignUp/GoToSignUp';
import SocialLoginButtonConainter from '@/components/molecules/socialLoginButtonConainter/SocialLoginButtonConainter';
import { BaseFormData } from '@/utils/FormValidator';
import { APIBuilder } from '@/utils/APIBuilder';

const LoginPageTemplate = () => {
  const router = useRouter();

  // 로그인 제출 처리
  const handleLoginSubmit = async (data: BaseFormData) => {
    try {
      const response = await APIBuilder.post('/auth/login', data).build().call();

      if (response.status === 200) {
        // TODO: 토큰 저장 로직 추가
        router.push('/');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-72">
      <DopdangLogo type="en" />
      <LoginForm onSubmit={handleLoginSubmit} />
      <GoToSignUp />
      <SocialLoginButtonConainter />
    </div>
  );
};

export default LoginPageTemplate;
