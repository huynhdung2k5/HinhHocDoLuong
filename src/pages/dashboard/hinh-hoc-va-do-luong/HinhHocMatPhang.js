import GeoGebra from "src/sections/geogebra/Geogebra";
// @Mui
import { Container } from "@mui/material";
// Hooks
import useSettings from "src/hooks/useSettings";
// Routes
import { PATH_DASHBOARD } from "src/routes/paths";
// Components
import Page from "src/components/Page";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
// Files
import hinhHocMatPhang from "src/assets/GGBs/hinh-hoc-va-do-luong/hinh-hoc-mat-phang.ggb";

export default function HinhHocMatPhang() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Hình học mặt phẳng">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Hình học mặt phẳng"
          links={[
            {
              name: "Hình học và Đo lường",
              href: PATH_DASHBOARD.hinhHocVaDoLuong.root,
            },
            { name: "Hình học mặt phẳng" },
          ]}
        />
        <GeoGebra
          filename={hinhHocMatPhang}
          allowStyleBar={true}
          showAlgebraInput={false}
        />
      </Container>
    </Page>
  );
}
