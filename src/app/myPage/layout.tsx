'use client';

import '../globals.css';
import ReactQueryClientProvider from '@/config/ReactQueryClientProvider';
import { useRouter } from 'next/navigation';
import MypageSidebar from '@/components/organisms/sidebar/mypageSidebar/MypageSidebar';
import { APIBuilder } from '@/utils/APIBuilder';
import { Member } from '@/types/user';
import { useUserStore } from '@/store/userStore';
import { useEffect, useState } from 'react';

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState<{
    profileImage: string;
    name: string;
  } | null>(null);
  const { member: storeMember, logout } = useUserStore();

  // 사용자 정보 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 임시 id 조회 로직
        const userInfo = await APIBuilder.get(`/users/me`).build().call<Member>();

        if (!userInfo.data) {
          await logout();
          return;
        }

        const memberId = userInfo.data.id;

        // store에 저장된 member의 id를 사용하여 /users/{id} 엔드포인트 호출
        const response = await APIBuilder.get(`/users/${memberId}`).build().call<Member>();
        const memberInfo = response.data as Member;

        // 프로필 정보 설정
        setProfileInfo({
          profileImage: memberInfo.profileImage,
          name: memberInfo.name,
        });
      } catch (error) {
        // API 호출 실패 시 상세 로깅
        console.error('사용자 정보 조회 실패:', error);

        // 에러 유형에 따른 처리
        if (error instanceof Error) {
          console.error(`에러 메시지: ${error.message}`);
          console.error(`에러 스택: ${error.stack}`);
        }

        // store 초기화 및 로그인 페이지로 리다이렉트
        await logout();
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [router, storeMember, logout]);

  // 로딩 중이거나 프로필 정보가 없는 경우 처리
  if (isLoading || !profileInfo) {
    return (
      <ReactQueryClientProvider>
        <div className="flex items-center justify-center h-screen">
          <div>로딩 중...</div>
        </div>
      </ReactQueryClientProvider>
    );
  }

  return (
    <ReactQueryClientProvider>
      <div className="flex gap-36 justify-center my-72">
        <MypageSidebar profileInfo={profileInfo} />
        <main className="w-750">{children}</main>
      </div>
    </ReactQueryClientProvider>
  );
}
