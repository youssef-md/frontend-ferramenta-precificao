import React from 'react';

import { FaCheck } from 'react-icons/fa';

import { Container, Indicator, EndPageCheck } from './styles';

function FormProgressState({ formPages, currentFormIndex }) {
  return (
    <Container>
      {formPages.map(function createProgressIndicator(page, pageIndex) {
        const isPageIntro = page.type === 'page-intro';
        const isPageEnd = page.type === 'page-end';
        const isValid = pageIndex < currentFormIndex;
        const isCurrent = pageIndex === currentFormIndex;

        return (
          <Indicator
            key={page.subTitle + page.description}
            size={isPageIntro || isPageEnd ? 'big' : 'small'}
            isValid={isValid || isPageIntro}
            isCurrent={isCurrent}
          >
            {isPageIntro && page.step}
            {isPageEnd && <EndPageCheck size={22} isCurrent={isCurrent} />}
            {!isPageIntro && isValid && <FaCheck size={14} />}
          </Indicator>
        );
      })}
    </Container>
  );
}

export default FormProgressState;
