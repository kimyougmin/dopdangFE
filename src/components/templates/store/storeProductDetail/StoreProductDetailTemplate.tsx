import { ProductDetailType } from '@/app/store/products/[product_id]/page';
import StoreDetailInfo from '@/components/organisms/store/StoreDetailInfo';
import StoreProductImageTitle from '@/components/organisms/store/StoreProductImageTitle';

export default function StoreProductDetailTemplate({ product }: { product: ProductDetailType }) {
  return (
    <div className=" max-w-846 flex flex-col gap-40">
      {/* 상품이미지와 이름 */}
      <StoreProductImageTitle product={product} />

      {/* 탭과 상품정보 */}
      <StoreDetailInfo product={product} />
    </div>
  );
}
