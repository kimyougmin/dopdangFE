'use client';
import { ExpertType, getExpert } from '@/apis/expert/getExpert';
import { OfferResponseType } from '@/apis/offer/getOffer';
import ChattingButtonGroup from '@/components/molecules/chat/ChattingButtonGroup';
import ChattingExpertInfo from '@/components/molecules/chat/ChattingExpertInfo';
import OfferInfo from '@/components/molecules/chat/OfferInfo';

interface ClientChattingInfoProps {
  expertData: ExpertType | undefined;
  offerData: OfferResponseType | undefined;
  expertId: number | null;
}

export default function ClientChattingInfo({
  expertData,
  offerData,
  expertId,
}: ClientChattingInfoProps) {
  if (!offerData || !expertData || !expertId) {
    return null;
  }
  return (
    <div className="w-full max-w-402 flex flex-col gap-16">
      <ChattingButtonGroup offerInfo={offerData} expertInfo={expertData} />
      <OfferInfo
        offerInfo={offerData}
        type="client"
        service={expertData.categoryName}
        expertId={expertId}
      />
      <ChattingExpertInfo expertData={expertData} />
    </div>
  );
}
