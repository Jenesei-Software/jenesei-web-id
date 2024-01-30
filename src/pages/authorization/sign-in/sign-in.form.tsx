import { SignInHookForm, SignInInfoFormContainer } from '.'
import { ButtonBig } from '@components/button-big'
import { InputDefault } from '@components/input-default'
import { useGoToLink } from '@hooks/use-go-to-link'
import { useProfile } from '@providers/profile-provider'
import { UIInterR16OnClick } from '@styles/components'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const SignInForm: FC = () => {
  const goToLink = useGoToLink()
  const { t } = useTranslation('sign-in')
  const { setProfile } = useProfile()
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInHookForm>()

  const onSubmit: SubmitHandler<SignInHookForm> = (data) => {
    setProfile({ id: '1' })
    console.log(data)
  }
  return (
    <SignInInfoFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputDefault
        placeholder={t('inputs.email-or-login')}
        register={{
          ...register('emailOrLogin', {
            required: true,
            minLength: 2,
            maxLength: 50,
          }),
        }}
      />
      <InputDefault
        placeholder={t('inputs.password')}
        type="password"
        register={{
          ...register('password', {
            required: true,
            minLength: 8,
            maxLength: 30,
          }),
        }}
      />
      <UIInterR16OnClick
        onClick={() => goToLink('/authorization/password-forgot')}
      >
        {t('forgot-password')}
      </UIInterR16OnClick>
      <ButtonBig
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        title={t('buttons.login')}
        variant={'product'}
      />
    </SignInInfoFormContainer>
  )
}
