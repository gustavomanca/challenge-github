import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    & {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      position: absolute;
      inset: 50%;
      transform: translate(-50%, -50%);
    }

    & div {
      position: absolute;
      top: 3.2rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    & div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    & div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    & div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    & div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }

    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  `}
`

export const Overlay = styled.span`
  position: fixed;
  inset: 0 0 0 0;
  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.4);
`
