import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import IconSelectBox, { IconSelectBoxProps } from '@/components/organisms/iconSelectBox/IconSelectBox';

interface LessonStepTwoTemplateProps extends IconSelectBoxProps{
  checkSelectBoxProps1: CheckboxProps[];
  checkSelectBoxProps2: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
}
export default function LessonStepTwoTemplate({checkSelectBoxProps1, checkSelectBoxProps2, onClickBefore, onClickNext, iconSelectBoxProps }: LessonStepTwoTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'3.과목 정보'} progressStep={3} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <IconSelectBox iconSelectBoxProps={iconSelectBoxProps} title={'과목 분류를 선택해주세요.'}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps1} title={'어떤 교과 과목을 공부하고 싶나요?'}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps2} title={'어떤 교과 외 과목을 공부하고 싶나요?'}/>
          <div className="float-end mr-40 mt-16">
            <StandardButton text={'완료'} disabled={false} onClick={onClickNext} state={'dark'} size={'fit'} />
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList
            selectedOptionIndex={[{ '과외 학생': '고등학교 1학년', '과외 형태': '개인' }, { '과목 구분': '교과 과정 내', '선택 과목': '한국사' }]} />
        </div>
      </div>
    </div>
  );
}