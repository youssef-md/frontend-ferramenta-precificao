import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';

import FormProgressState from '../../components/FormProgressState';
import Breadcrumbs from '../../components/Breadcrumbs';
import PageStep from './PageStep';
import {
  LISTAR_SERVICOS,
  SERVICO_SELECIONADO,
  PREENCHER_MODELO_JORNADA_USUARIO,
} from '../../routes/routeObjects';

import { jornadaUsuarioForms } from './pagesObject';

import { Container, RightFormButton, LeftFormButton } from './styles';
import BasePage from '../BasePage';

// receber o objeto com os campos via params ao cadastrar esse componente no react router
// passar o id do modelo para a rota? pra saber onde deve fazer o post com o json? (vai que ele só copia e cola a url)

// Na tela do serviço selecionado, checar se estou recebendo o obj do serviço, se ele acessar a rota diretamente tem que fazer uma req
// pegando o id que ta na url

let mergedStepData = {};

let schemaObject = {};
let schemaValidator = {};

const mappedFormObjectWithStepType = {
  JORNADA_USUARIO: jornadaUsuarioForms,
};

function PreencherModelo({ stepType }) {
  const currentPageRef = useRef(null);
  const {
    state: { idServico, nomeServico },
  } = useLocation();
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const formPages = useMemo(() => mappedFormObjectWithStepType[stepType], [
    stepType,
  ]);

  useEffect(
    function setValidatorCurrentPage() {
      if (!formPages[currentFormIndex].form) return;

      formPages[currentFormIndex].form.inputs.map(input => {
        const inputTypeValidation =
          input.type === 'string'
            ? yup
                .string('Somente letras são permitidas')
                .typeError('Somente letras são permitidas')
            : yup
                .number('Somente números são permitidos')
                .typeError('Somente números são permitidos');

        schemaObject[`${input.name}Pre`] = inputTypeValidation.required(
          'O campo é obrigatório'
        );
        schemaObject[`${input.name}Pos`] = inputTypeValidation.required(
          'O campo é obrigatório'
        );
      });

      schemaValidator = yup.object().shape(schemaObject);
    },
    [formPages, currentFormIndex]
  );

  const submitData = useCallback(() => {
    // fazer o post com o mergedStepData
    // Rota: muda
  }, []);

  const animatePageStepContainer = useCallback((translateX, opacity) => {
    const {
      current: { containerPageStep },
    } = currentPageRef;

    containerPageStep.style.transform = `translateX(${translateX}px)`;
    containerPageStep.style.opacity = opacity;
  }, []);

  const goToNextPage = useCallback(
    async event => {
      if (event) event.preventDefault();

      const {
        current: { formRef },
      } = currentPageRef;
      const isInInputPage = formPages[currentFormIndex].form;

      if (isInInputPage) {
        const inputsData = formRef.getData();
        formRef.setErrors({}); // reset past errors

        try {
          await schemaValidator.validate(inputsData, {
            abortEarly: false,
          });

          mergedStepData = { ...mergedStepData, ...inputsData };
          schemaObject = {};
          schemaValidator = {};
        } catch (error) {
          const validationErrors = {};
          if (error instanceof yup.ValidationError) {
            error.inner.forEach(error => {
              validationErrors[error.path] = error.message;
            });

            formRef.setErrors(validationErrors);
          }
          return;
        }
      }

      if (currentFormIndex < formPages.length - 1) {
        animatePageStepContainer(-200, 0);

        setTimeout(() => {
          setCurrentFormIndex(currentFormIndex + 1);
          animatePageStepContainer(200, 0);
        }, 150);
      }
    },
    [currentFormIndex, formPages, animatePageStepContainer]
  );

  const goToPreviousPage = useCallback(
    event => {
      if (event) event.preventDefault();
      if (currentFormIndex > 0) {
        animatePageStepContainer(200, 0);

        setTimeout(() => {
          setCurrentFormIndex(currentFormIndex - 1);
          animatePageStepContainer(-200, 0);
        }, 150);
      }
    },
    [currentFormIndex, animatePageStepContainer]
  );

  const handleKeyDownToSwitchPage = useCallback(
    event => {
      const { key, target } = event;
      if (target.nodeName === 'INPUT') return;

      if (key === 'ArrowRight') goToNextPage();
      else if (key === 'ArrowLeft') goToPreviousPage();
    },
    [goToNextPage, goToPreviousPage]
  );

  useEffect(
    function registerKeydownEventListener() {
      window.addEventListener('keydown', handleKeyDownToSwitchPage);

      return function remoteKeydownListener() {
        window.removeEventListener('keydown', handleKeyDownToSwitchPage);
      };
    },
    [handleKeyDownToSwitchPage]
  );

  useEffect(() => {
    setTimeout(() => {
      animatePageStepContainer(0, 1);
    }, 280);
  }, [currentFormIndex, animatePageStepContainer]);

  return (
    <BasePage>
      <Container>
        <Breadcrumbs
          currentRouting={[
            LISTAR_SERVICOS,
            SERVICO_SELECIONADO(nomeServico, idServico),
            PREENCHER_MODELO_JORNADA_USUARIO,
          ]}
        />
        <h2>{formPages[0].title}</h2>
        <FormProgressState
          formPages={formPages}
          currentFormIndex={currentFormIndex}
        />

        <LeftFormButton
          onClick={goToPreviousPage}
          type="secondary"
          disabled={currentFormIndex === 0}
        >
          <FaArrowLeft size={22} />
        </LeftFormButton>

        <RightFormButton
          onClick={goToNextPage}
          type="secondary"
          disabled={currentFormIndex === formPages.length - 1}
        >
          <FaArrowRight size={22} />
        </RightFormButton>

        <PageStep ref={currentPageRef} page={formPages[currentFormIndex]} />
      </Container>
    </BasePage>
  );
}

export default PreencherModelo;
