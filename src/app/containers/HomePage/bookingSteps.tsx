import { styled } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    front-extrabold
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-15
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-16
    md:w-96
    intems-center
    transitions-colors
    hover:text-red-500
  `}
`;

const Step = styled.div`
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6

  `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
  `}
`;

export function BookingSteps() {
  return <></>;
}
