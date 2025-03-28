import React from 'react';
import Image from 'next/image';
import CheckBadge from "public/icons/CheckBadge.svg"

interface props {
  text: string;
}

function CertificationBadge({text}: props) {
  return (
    <div className="flex bg-black1 rounded-sm border border-black4 py-4 pl-4 pr-8 max-w-fit">
      <Image src={CheckBadge} alt={""} width={22} height={22} />
      <label className="pl-2 text-13 font-medium">{text} 전문가</label>
    </div>
  );
}

export default CertificationBadge;