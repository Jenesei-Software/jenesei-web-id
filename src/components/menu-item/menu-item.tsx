import { StyledInterM12, StyledInterSB14 } from "@styles/fonts/inter";
import { MenuItemInfoContainer, MenuItemLogoContainer, MenuItemProps, MenuItemWrapper } from ".";
import { FC, useMemo } from "react";
import { theme } from "@styles/theme";
import { ButtonPlaystationShort } from "@components/button-playstation/short";
import React from "react";

export const MenuItem: FC<MenuItemProps> = React.memo(
  (props) => {
    const memoizedMenuItemInfo = useMemo(
      () => (
        <MenuItemInfoContainer>
          <StyledInterSB14 color={theme.colors.black[80]}>{props.title}</StyledInterSB14>
          <StyledInterM12 color={theme.colors.black[50]}>{props.description}</StyledInterM12>
        </MenuItemInfoContainer>
      ),
      [props.title, props.description]
    );

    return (
      <MenuItemWrapper checked={props.checked} onClick={props.onClick}>
        <MenuItemLogoContainer>
          <ButtonPlaystationShort icon={props.icon} checked={props.checked} />
        </MenuItemLogoContainer>
        {memoizedMenuItemInfo}
      </MenuItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.title === nextProps.title;
  }
);