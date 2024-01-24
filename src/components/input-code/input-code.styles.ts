import { FontInterR16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import InputMask from 'react-input-mask'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

export const StyledInputCode = styled(InputMask)`
  ${FontInterR16};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${theme.colors.black['60']};
  background: ${theme.colors.default.white};
  color: ${theme.colors.black['80']};
  box-shadow: ${theme.inputs.default.effects.boxShadow};

  &::placeholder {
    color: ${theme.colors.black['40']};
    font-weight: 700;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${theme.colors.black['40']};
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${theme.colors.black['100']};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`
