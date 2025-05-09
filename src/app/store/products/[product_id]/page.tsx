import getProduct from '@/apis/store/getProduct';
import getProductList from '@/apis/store/getProductList';
import StoreProductDetailTemplate from '@/components/templates/store/storeProductDetail/StoreProductDetailTemplate';

export default async function ProductIdPage({ params }: { params: { product_id: string } }) {
  // 상품 상세정보 조회 api 호출
  const { product_id } = await params;
  const productData = await getProduct(Number(product_id));
  const recommends = await getProductList({
    page: 1,
  });
  return (
    <div className="flex justify-center">
      <StoreProductDetailTemplate product={productData} recommends={recommends} />
    </div>
  );
}
