import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import DatePickerWithTitle from '@/components/molecules/datePickerWithTitle/DatePickerWithTitle';
import { DatePickerProps } from '@/components/atoms/datePicker/DatePicker';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';

interface SettingFixStepTwoTemplateProps extends DatePickerProps{
  onClickBefore: () => void;
  onClickNext: () => void;
  checkSelectBoxProps:  CheckboxProps[];
}
export default function SettingFixStepTwoTemplate({checkSelectBoxProps, onClickBefore, onClickNext, selectedDay, setSelectedDay}: SettingFixStepTwoTemplateProps) {

  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.서비스 날짜 및 지역'} progressStep={4} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={"설치 및 수리의 대상이 무엇인가요?"} />
          <DatePickerWithTitle title={'날짜를 선택해주세요'} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
          <div className="float-end mr-40 mt-32">
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
