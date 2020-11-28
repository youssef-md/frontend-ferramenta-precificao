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
  PREENCHER_JORNADA_USUARIO,
  PREENCHER_CUSTOS_ORGAO,
  PREENCHER_CUSTOS_TRANSFORMACAO,
} from '../../routes/routeObjects';

import { jornadaUsuarioForms } from './pagesObject';

import { Container, RightFormButton, LeftFormButton } from './styles';
import BasePage from '../BasePage';
import api from '../../service/api';
import { getJornadaUsuarioAtividadeReqObj } from './requestObject/atividades';

let mergedStepData = {};

let schemaObject = {};
let schemaValidator = {};

const mappedFormObjectWithStepType = {
  JORNADA_USUARIO: jornadaUsuarioForms,
  CUSTOS_ORGAO: jornadaUsuarioForms,
  CUSTOS_TRANSFORMAÇÃO: jornadaUsuarioForms,
};

const mappedEndpointWithStepType = {
  JORNADA_USUARIO: {
    pre: 'atividades-pre/',
    pos: 'atividades-pos/',
  },
};

const mappedRouteWithStepType = {
  JORNADA_USUARIO: PREENCHER_JORNADA_USUARIO,
  CUSTOS_ORGAO: PREENCHER_CUSTOS_ORGAO,
  CUSTOS_TRANSFORMAÇÃO: PREENCHER_CUSTOS_TRANSFORMACAO,
};

function PreencherModelo({ stepType }) {
  const currentPageRef = useRef(null);
  const {
    state: { idServico, nomeServico, etapaAtividadesIds },
  } = useLocation();
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const formPages = useMemo(() => mappedFormObjectWithStepType[stepType], [
    stepType,
  ]);

  useEffect(
    function setValidatorCurrentPage() {
      schemaObject = {};
      schemaValidator = {};

      const currentPage = formPages[currentFormIndex];

      if (!currentPage.form) return;

      currentPage.form.inputs.map(input => {
        const { step, activity } = currentPage;
        const inputTypeValidation =
          input.type === 'string'
            ? yup
                .string('Somente letras são permitidas')
                .typeError('Somente letras são permitidas')
            : yup
                .number('Somente números são permitidos')
                .typeError('Somente números são permitidos');

        schemaObject[
          `${input.name}-pre-${step}-${activity}`
        ] = inputTypeValidation.required('O campo é obrigatório');
        schemaObject[
          `${input.name}-pos-${step}-${activity}`
        ] = inputTypeValidation.required('O campo é obrigatório');
      });

      schemaValidator = yup.object().shape(schemaObject);

      return function resetValidatorAndMergedObj() {
        schemaObject = {};
        schemaValidator = {};
        mergedStepData = {};
      };
    },
    [formPages, currentFormIndex]
  );

  useEffect(
    function updateDefaultFormInputValues() {
      const {
        current: { formRef },
      } = currentPageRef;

      const isInInputPage = formPages[currentFormIndex].form;
      if (isInInputPage) formRef.setData(mergedStepData);
    },
    [currentFormIndex, formPages]
  );

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
      const currentPage = formPages[currentFormIndex];

      if (currentPage.type === 'page-form') {
        const inputsData = formRef.getData();
        formRef.setErrors({}); // reset past errors

        try {
          await schemaValidator.validate(inputsData, {
            abortEarly: false,
          });

          Object.keys(inputsData).map(key => {
            inputsData[key] = inputsData[key]
              .replace('R$ ', '')
              .replace('.', '')
              .replace(',', '.');
          });

          const etapaAtividadesIdsPre = etapaAtividadesIds.filter(
            etapa => etapa.etapaPre
          );
          const etapaAtividadesIdsPos = etapaAtividadesIds.filter(
            etapa => etapa.etapaPos
          );
          const etapa = Number(currentPage.step);
          const atividade = Number(currentPage.activity);
          const idEtapaPre = etapaAtividadesIdsPre[etapa - 1].etapaPre;
          const idEtapaPos = etapaAtividadesIdsPos[etapa - 1].etapaPos;
          const idAtividadePre = etapaAtividadesIdsPre[
            etapa - 1
          ].atividadesPre.split(' ')[atividade - 1];
          const idAtividadePos = etapaAtividadesIdsPos[
            etapa - 1
          ].atividadesPos.split(' ')[atividade - 1];
          const inputsPre = Object.keys(inputsData).filter(el =>
            el.includes('-pre-')
          );
          const inputsPos = Object.keys(inputsData).filter(el =>
            el.includes('-pos-')
          );
          const sanitizedInputsPre = inputsPre.reduce((acc, curr) => {
            return {
              ...acc,
              [curr.split('-')[0]]: inputsData[curr],
            };
          }, {});
          const sanitizedInputsPos = inputsPos.reduce((acc, curr) => {
            return {
              ...acc,
              [curr.split('-')[0]]: inputsData[curr],
            };
          }, {});
          const reqPreObject = getJornadaUsuarioAtividadeReqObj({
            idEtapa: idEtapaPre,
            idAtividade: idAtividadePre,
            ...sanitizedInputsPre,
          });
          const reqPosObject = getJornadaUsuarioAtividadeReqObj({
            idEtapa: idEtapaPos,
            idAtividade: idAtividadePos,
            ...sanitizedInputsPos,
          });

          mergedStepData = { ...mergedStepData, ...inputsData };

          Promise.all([
            api.put(`atividades-pre/etapa/${idEtapaPre}/`, [reqPreObject]),
            api.put(`atividades-pos/etapa/${idEtapaPos}/`, [reqPosObject]),
          ])
            .then(res => console.log(res))
            .catch(() => {});

          formRef.reset();
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
    [currentFormIndex, formPages, animatePageStepContainer, etapaAtividadesIds]
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
            mappedRouteWithStepType[stepType],
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
