import { APIBuilder } from '@/utils/APIBuilder';

interface CreateReviewRequest {
  projectId: number;
  score: number;
  content: string;
  imageUrl: string;
}

interface CreateReviewResponse {
  id: number;
  reviewrerName: string;
  score: number;
  createdAt: string;
}

/**
 * 리뷰를 생성합니다.
 * @param data 리뷰 생성 요청 데이터
 * @returns 리뷰 생성 응답
 */
export const createReview = async (data: CreateReviewRequest): Promise<CreateReviewResponse> => {
  try {
    const response = await APIBuilder.post('/reviews', data)
      .timeout(10000)
      .build()
      .call<CreateReviewResponse>();

    return response.data;
  } catch (error) {
    console.error('리뷰 생성 실패:', error);
    throw error;
  }
};
