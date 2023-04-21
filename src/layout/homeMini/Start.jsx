import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  coursesButton,
  enrollButton,
  homeFirstButton,
  homeTitleFirst,
  homeTitleSecond,
} from "../../style/homeStyle.mjs";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

function getStackContent(selectedLanguage, t) {
  const startNew = t("startNew");
  const startNCont = t("startNCont");
  const bootcampTm = t("bootcampTm");

  if (selectedLanguage === "tm") {
    return (
      <>
        <Typography sx={homeTitleFirst}>{startNew}</Typography>
        <Typography sx={homeTitleSecond}>{bootcampTm}</Typography>
        <Typography sx={homeTitleFirst}>{startNCont}</Typography>
      </>
    );
  } else {
    return (
      <>
        <Typography sx={homeTitleFirst}>{startNew}</Typography>
        <Typography sx={homeTitleFirst}>{startNCont}</Typography>
        <Typography sx={homeTitleSecond}>{bootcampTm}</Typography>
      </>
    );
  }
}

const Start = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none", sm: "none" },
        overflowX: "hidden",
        pl: 2,
      }}
    >
      <Stack spacing={2} sx={{ pr: 2 }}>
        <Button
          sx={{ ...homeFirstButton, fontSize: "12px" }}
          variant="contained"
        >
          {t("fisrtBootcamp")}
        </Button>
        <Stack>{getStackContent(selectedLanguage, t)}</Stack>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" width="100%">
        <div
          style={{
            width: "70%",
            height: "300px",
            background: "url(/image/womens.png)",
            backgroundPosition: "90px 0px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </Stack>
      <Stack spacing={2} sx={{ pr: 2, mt: -6 }}>
        <Button variant="outlined" sx={coursesButton}>
          {t("courses")}
        </Button>
        <Button variant="contained" sx={enrollButton}>
          {t("enrolNow")}
        </Button>
      </Stack>
    </Box>
  );
};

export default Start;
