import {
  Page
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      This is home page
    </Page>
  );
}
