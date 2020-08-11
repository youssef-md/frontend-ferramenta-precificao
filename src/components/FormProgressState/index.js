import React from 'react';

import { FaCheck } from 'react-icons/fa';
import { Container, Indicator } from './styles';

function FormProgressState({ formPages, currentFormIndex }) {
  return (
    <Container>
      {formPages.map(function createProgressIndicator(page, pageIndex) {
        const isPageIntro = page.type === 'page-intro';
        const isValid = pageIndex < currentFormIndex;
        const isCurrent = pageIndex === currentFormIndex;

        return (
          <Indicator
            key={page.subTitle}
            size={isPageIntro ? 'big' : 'small'}
            isValid={isValid || isPageIntro}
            isCurrent={isCurrent}
          >
            {isPageIntro && page.step}
            {!isPageIntro && isValid && <FaCheck size={14} />}
          </Indicator>
        );
      })}
    </Container>
  );
}

export default FormProgressState;
