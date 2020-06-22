import React from 'react';

import { Container, Indicator } from './styles';
import faCheck from '../../assets/fa-check.svg';

function FormProgressState({ formPages, currentFormIndex }) {
  return (
    <Container>
      {formPages.map(function createProgressIndicator(page, pageIndex) {
        const isPageIntro = page.type === 'page-intro';
        const isValid = page.valid;
        const isCurrent = pageIndex === currentFormIndex;

        return (
          <Indicator
            key={page.subTitle}
            size={isPageIntro ? 'big' : 'small'}
            isValid={isValid}
            isCurrent={isCurrent}
          >
            {isPageIntro && page.step}
            {!isPageIntro && isValid && <img src={faCheck} alt="check" />}
          </Indicator>
        );
      })}
    </Container>
  );
}

export default FormProgressState;
