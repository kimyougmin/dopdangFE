'use client';

import { GetRoomsResponse } from '@/apis/chat/getRooms';
import { getExpert } from '@/apis/expert/getExpert';
import getOfferList from '@/apis/offer/getOffer';
import ClientChattingInfo from '@/components/organisms/chatting/chattingInfo/client/ClientChattingInfo';
import ChattingList from '@/components/organisms/chatting/chattingLIst/ChattingList';
import ChattingRoom from '@/components/organisms/chatting/chattingRoom/ChattingRoom';
import { useQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';

export default function ChattingTemplate({ chatRoomList }: { chatRoomList: GetRoomsResponse }) {
  const [room, setRoom] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<number | null>(null); // 현제 선택된 프로젝트 Id
  const [expertId, setExpertId] = useState<number | null>(null); // 현제 선택된 전문가 Id

  const { data: expertData, isLoading: isLoadingExpert } = useQuery({
    queryKey: ['expert', expertId],
    queryFn: () => getExpert({ expertId: String(expertId) }),
    enabled: !!expertId,
  });

  const { data: offerData, isLoading: isLoadingOffer } = useQuery({
    queryKey: ['offer', projectId, expertId],
    queryFn: () => getOfferList({ projectId: 53, expertId: expertId! }),
    enabled: !!projectId && !!expertId,
  });

  const handleRoomChange = (roomId: string, projectId: number, userId: number) => {
    setRoom(roomId);
    setProjectId(projectId);
    setExpertId(userId);
  };

  return (
    <div className="flex gap-24 mt-46 items-start jusitfy-center w-1670">
      <Suspense>
        <ChattingList chatRoomList={chatRoomList} handleRoomChange={handleRoomChange} room={room} />
      </Suspense>
      <ChattingRoom />
      <ClientChattingInfo expertData={expertData} offerData={offerData} expertId={expertId} />
    </div>
  );
}
