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

import {
  jornadaUsuarioForms,
  custoOrgaoForms,
  transformacaoForms,
} from './pagesObject';

import { Container, RightFormButton, LeftFormButton } from './styles';
import BasePage from '../BasePage';
import api from '../../service/api';
import {
  getCustosOrgaoAtividadeReqObj,
  getJornadaUsuarioAtividadeReqObj,
} from './requestObject/atividades';

const mappedFormObjectWithStepType = {
  JORNADA_USUARIO: jornadaUsuarioForms,
  CUSTOS_ORGAO: custoOrgaoForms,
  CUSTOS_TRANSFORMACAO: transformacaoForms,
};

const mappedRouteWithStepType = {
  JORNADA_USUARIO: PREENCHER_JORNADA_USUARIO,
  CUSTOS_ORGAO: PREENCHER_CUSTOS_ORGAO,
  CUSTOS_TRANSFORMACAO: PREENCHER_CUSTOS_TRANSFORMACAO,
};

let mergedDataAtividade = {};
let mergedDataOrgao = {};
let mergedDataTransformacao = {};

let schemaObject = {};
let schemaValidator = {};

function PreencherModelo({ stepType }) {
  const currentPageRef = useRef(null);
  const {
    state: {
      servico,
      idModelo,
      etapaAtividadesIds,
      orgaoPreIds,
      orgaoPosIds,
      transformacaoIds,
    },
  } = useLocation();
  console.log({ orgaoPosIds, orgaoPreIds, transformacaoIds });
  const { idServico, nome: nomeServico } = servico;
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const formPages = useMemo(() => mappedFormObjectWithStepType[stepType], [
    stepType,
  ]);

  const etapaAtividadesIdsPre = etapaAtividadesIds.filter(
    etapa => etapa.etapaPre
  );
  const etapaAtividadesIdsPos = etapaAtividadesIds.filter(
    etapa => etapa.etapaPos
  );

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

        if (currentPage.form.pre && currentPage.form.pos) {
          schemaObject[
            `${input.name}-pre-${step}-${activity}`
          ] = inputTypeValidation.required('O campo é obrigatório');
          schemaObject[
            `${input.name}-pos-${step}-${activity}`
          ] = inputTypeValidation.required('O campo é obrigatório');
        } else {
          schemaObject[`${input.name}`] = inputTypeValidation.required(
            'O campo é obrigatório'
          );
        }
      });

      schemaValidator = yup.object().shape(schemaObject);

      // return function resetValidatorAndMergedObj() {
      //   schemaObject = {};
      //   schemaValidator = {};
      //   mergedDataAtividade = {};
      //   mergedDataOrgao = {};
      //   mergedDataTransformacao = {};
      // };
    },
    [formPages, currentFormIndex]
  );

  const animatePageStepContainer = useCallback((translateX, opacity) => {
    const { current } = currentPageRef;
    if (current && current.containerPageStep) {
      const { containerPageStep } = current;
      containerPageStep.style.transform = `translateX(${translateX}px)`;
      containerPageStep.style.opacity = opacity;
    }
  }, []);

  const populateAtividadeInputsWithSavedValues = useCallback(
    (etapaPreenchida, etapa, type) => {
      etapaPreenchida.data.map((atividade, index) => {
        const {
          custos: {
            custoMonetario,
            frequencia,
            quantidadeUsuarios,
            rendimentoMedio,
            tempoMedio,
          },
        } = atividade;
        const custoMonetarioInput = `custoMonetario-${type}-${etapa}-${
          index + 1
        }`;
        const frequenciaInput = `frequencia-${type}-${etapa}-${index + 1}`;
        const quantidadeUsuariosInput = `quantidadeUsuarios-${type}-${etapa}-${
          index + 1
        }`;
        const rendimentoMedioInput = `rendimentoMedio-${type}-${etapa}-${
          index + 1
        }`;
        const tempoMedioInput = `tempoMedio-${type}-${etapa}-${index + 1}`;

        mergedDataAtividade[custoMonetarioInput] = custoMonetario;
        mergedDataAtividade[frequenciaInput] = frequencia;
        mergedDataAtividade[quantidadeUsuariosInput] = quantidadeUsuarios;
        mergedDataAtividade[rendimentoMedioInput] = rendimentoMedio;
        mergedDataAtividade[tempoMedioInput] = tempoMedio;
      });
    },
    []
  );

  useEffect(
    function updateDefaultFormInputValues() {
      const { current } = currentPageRef;
      if (current && current.formRef) {
        const { formRef } = current;
        // const isInInputPage = formPages[currentFormIndex].form;
        // if (isInInputPage) formRef.setData(mergedStepData);

        const currentPage = formPages[currentFormIndex];

        if (currentPage.type === 'page-form') {
          const etapa = Number(currentPage.step);

          // Melhorar para atender Orgao e Transformação

          const idEtapaPre = etapaAtividadesIdsPre[etapa - 1].etapaPre;
          const idEtapaPos = etapaAtividadesIdsPos[etapa - 1].etapaPos;

          if (stepType === 'JORNADA_USUARIO') {
            Promise.all([
              api.get(`/atividades-pre/etapa/${idEtapaPre}/`),
              api.get(`/atividades-pos/etapa/${idEtapaPos}/`),
            ]).then(([pre, pos]) => {
              populateAtividadeInputsWithSavedValues(pre, etapa, 'pre');
              populateAtividadeInputsWithSavedValues(pos, etapa, 'pos');
              formRef.setData(mergedDataAtividade);
            });
          }
        }
      }
    },
    [
      stepType,
      currentFormIndex,
      formPages,
      etapaAtividadesIdsPre,
      etapaAtividadesIdsPos,
      etapaAtividadesIds,
      populateAtividadeInputsWithSavedValues,
    ]
  );

  function getSanitizedInputsPrePos(inputsData) {
    function separator(match) {
      return Object.keys(inputsData).filter(el => el.includes(match));
    }

    function sanitizer(data) {
      return data.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.split('-')[0]]: inputsData[curr],
        };
      }, {});
    }

    const inputsPre = separator('-pre-');
    const inputsPos = separator('-pos-');
    const sanitizedInputsPre = sanitizer(inputsPre);
    const sanitizedInputsPos = sanitizer(inputsPos);

    return [sanitizedInputsPre, sanitizedInputsPos];
  }

  const sendAtividadeData = useCallback(
    inputsData => {
      const currentPage = formPages[currentFormIndex];

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
      const [sanitizedPre, sanitizedPos] = getSanitizedInputsPrePos(inputsData);

      let reqPreObject = null;
      let reqPosObject = null;

      reqPreObject = getJornadaUsuarioAtividadeReqObj({
        idEtapa: idEtapaPre,
        idAtividade: idAtividadePre,
        ...sanitizedPre,
      });
      reqPosObject = getJornadaUsuarioAtividadeReqObj({
        idEtapa: idEtapaPos,
        idAtividade: idAtividadePos,
        ...sanitizedPos,
      });

      Promise.all([
        api.put(`atividades-pre/etapa/${idEtapaPre}/`, [reqPreObject]),
        api.put(`atividades-pos/etapa/${idEtapaPos}/`, [reqPosObject]),
      ])
        .then(() => {})
        .catch(() => {});
    },
    [currentFormIndex, etapaAtividadesIdsPos, etapaAtividadesIdsPre, formPages]
  );

  const sendOrgaoData = useCallback(
    inputsData => {
      const [sanitizedPre, sanitizedPos] = getSanitizedInputsPrePos(
        mergedDataOrgao
      );

      const reqPre = getCustosOrgaoAtividadeReqObj({
        ...sanitizedPre,
        ...orgaoPreIds,
        idModelo,
      });
      const reqPos = getCustosOrgaoAtividadeReqObj({
        ...sanitizedPos,
        ...orgaoPosIds,
        idModelo,
      });
      console.log({ reqPre, reqPos });

      Promise.all([
        api.put(`custos-orgao-pre/modelo/${idModelo}/`, reqPre),
        api.put(`custos-orgao-pos/modelo/${idModelo}/`, reqPos),
      ])
        .then(() => {})
        .catch(() => {});
    },
    [idModelo, orgaoPreIds, orgaoPosIds]
  );

  const sendTransformacaoData = useCallback(() => {}, []);

  const goToNextPage = useCallback(
    async event => {
      if (event) event.preventDefault();
      const {
        current: { formRef },
      } = currentPageRef;
      const currentPage = formPages[currentFormIndex];

      if (currentPage.type === 'page-form') {
        const formTypeMethods = {
          JORNADA_USUARIO: sendAtividadeData,
          CUSTOS_ORGAO: sendOrgaoData,
          CUSTOS_TRANSFORMACAO: sendTransformacaoData,
        };

        const inputsData = formRef.getData();
        formRef.setErrors({}); // reset past errors
        console.log({ inputsData });

        try {
          await schemaValidator.validate(inputsData, {
            abortEarly: false,
          });

          if (stepType === 'JORNADA_USUARIO')
            mergedDataAtividade = { ...mergedDataAtividade, ...inputsData };
          if (stepType === 'CUSTOS_ORGAO')
            mergedDataOrgao = { ...mergedDataOrgao, ...inputsData };
          if (stepType === 'CUSTOS_TRANSFORMACAO') {
            mergedDataTransformacao = {
              ...mergedDataTransformacao,
              ...inputsData,
            };
            console.log('oi');
          }

          console.log({
            mergedDataAtividade,
            mergedDataOrgao,
            mergedDataTransformacao,
          });

          if (
            stepType === 'JORNADA_USUARIO' ||
            formPages[currentFormIndex + 1].type === 'page-end'
          ) {
            // Enviar somente no final para Custos Órgão e Custos Transformação
            formTypeMethods[stepType](inputsData);
          }

          formRef.reset();
        } catch (error) {
          console.log(error);
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
    [
      currentFormIndex,
      formPages,
      animatePageStepContainer,
      stepType,
      sendAtividadeData,
      sendOrgaoData,
      sendTransformacaoData,
    ]
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

        <PageStep
          ref={currentPageRef}
          page={formPages[currentFormIndex]}
          servico={servico}
        />
      </Container>
    </BasePage>
  );
}

export default PreencherModelo;
