import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      mainBackground: string;
      menuBackground: string;
      invoiceItemBackground: string;
      backgroundColorLight: string;
      mainFontColor: string;
      textColorLight: string;
      textColorLight2: string;
      statusPaid: string;
      statusPaidBackground: string;
      statusPending: string;
      statusPendingBackground: string;
      statusDraft: string;
      statusDraftBackground: string;
      warnButton: string;
      warnButtonHover: string;
      secondaryButton: string;
      secondaryButtonBackground: string;
      secondaryButtonHover: string;
      darkPurple: string;
      lightPurple: string;
      secondary?: string;
    };
  }
}
