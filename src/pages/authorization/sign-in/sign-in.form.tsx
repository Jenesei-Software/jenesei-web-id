import { ButtonBig } from "@components/button-big";
import { FC } from "react";
import { SignInInfoFormContainer, SignInProps, StyledStyledInterR16 } from ".";
import { useInputString } from "@hooks/inputs/use-input-string";
import { useTranslation } from "react-i18next";
import { StyledLink } from "@components/styled";

export const SignInForm: FC<SignInProps> = () => {
  const { t } = useTranslation("sign-in");
  const { value: valueEmailOrLogin, InputString: InputEmailOrLogin } = useInputString({
    placeholder: t("inputs.email-or-login"),
    noSpaces: true,
  });
  const { value: valuePassword, InputString: InputPassword } = useInputString({
    placeholder: t("inputs.password"),
    type: "password",
    noSpaces: true,
  });
  return (
    <SignInInfoFormContainer>
      {InputEmailOrLogin}
      {InputPassword}
      <StyledLink to="/authorization/password-forgot">
        <StyledStyledInterR16>{t("forgot-password")}</StyledStyledInterR16>
      </StyledLink>
      <ButtonBig title={t("buttons.login")} type={"product"} />
    </SignInInfoFormContainer>
  );
};
