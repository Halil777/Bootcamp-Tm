import React from "react";
import ContactLg from "../layout/contact/ContactLg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("contactUs")} | BootcampTm</title>
      </Helmet>
      <ContactLg />
    </>
  );
};

export default ContactUs;
