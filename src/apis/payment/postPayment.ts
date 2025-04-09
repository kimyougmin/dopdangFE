import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';
export interface PaymentRequestType {
  referenceId: number;
  paymentType: string;
  quantity?: number; // 주문 수량, 선택 사항
}

export interface PaymentResponseType {
  // 결제창 연동을 위한 key
  orderId: string;
  customerKey: string;
  // 구매 상품 정보
  expertName: string;
  category: string;
  price: number;
  startDate: string;
  endDate: string;
}
export interface ContractType {
  id: number;
  project: ProjectType;
  offer: any | null; // offer의 구조가 명확하지 않으므로 any로 설정
  client: any | null; // client의 구조가 명확하지 않으므로 any로 설정
  expert: ExpertType;
}

export interface ProjectType {
  createdAt: string; // ISO 날짜 문자열
  updatedAt: string; // ISO 날짜 문자열
  id: number;
  client: any | null; // client의 구조가 명확하지 않으므로 any로 설정
  category: CategoryType;
  title: string;
}

export interface CategoryType {
  id: number;
  name: string;
}

export interface ExpertType {
  id: number;
  member: any; // member의 구조가 명확하지 않으므로 any로 설정
  category: CategoryType;
  subCategories: any | null; // subCategories의 구조가 명확하지 않으므로 any로 설정
  introduction: string;
}

export interface RawDataType {
  orderId: string;
  customerKey: string;
  expertName: string;
  category: string;
  price: number;
  startDate: string; // ISO 날짜 문자열
  endDate: string; // ISO 날짜 문자열
  contract: ContractType;
  expert: ExpertType;
  title: string;
}

// 백엔드로 부터 결제창 오픈에 필요한 OrderId, CustomerKey를 가져오는 API
export const postPayment = async (request: PaymentRequestType) => {
  const { referenceId, paymentType } = request;
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  const requestBody = request.quantity
    ? {
        referenceId: referenceId,
        paymentType: paymentType,
        quantity: request.quantity,
      }
    : {
        referenceId: referenceId,
        paymentType: paymentType,
      };
  const response = await APIBuilder.post('/payments/orderId', requestBody)
    .headers({
      'Content-Type': 'application/json',
      Cookie: `accessToken=${token}`,
    })
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call<RawDataType>();

  const data = {
    orderId: response.data.orderId,
    customerKey: response.data.customerKey,
    expertName: response.data.expertName,
    category: response.data.category,
    price: response.data.price,
    startDate: response.data.startDate,
    endDate: response.data.endDate,
  };
  return data;
};
