import getRooms, { GetRoomsResponse } from '@/apis/chat/getRooms';
import ChattingTemplate from '@/components/templates/chatTemplate/ChattingTemplate';

export default async function ClientChatPage() {
  const chatRoomList: GetRoomsResponse = await getRooms();

  return (
    <div className="w-full flex justify-center">
      <ChattingTemplate chatRoomList={chatRoomList} />
    </div>
  );
}
