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
import hinhHocKhongGian from "src/assets/GGBs/hinh-hoc-va-do-luong/hinh_hoc_khong_gian.ggb";

export default function HinhHocKhongGian() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Hình học không gian">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Hình học không gian"
          links={[
            {
              name: "Hình học và Đo lường",
              href: PATH_DASHBOARD.hinhHocVaDoLuong.root,
            },
            { name: "Hình học không gian" },
          ]}
        />
        <GeoGebra enable3d filename={hinhHocKhongGian} />
      </Container>
    </Page>
  );
};