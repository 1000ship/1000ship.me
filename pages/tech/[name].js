import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { useRouter } from "next/router";
import TechIconDatabase from "../../db/tech-icon.json";
import styled from "styled-components";

const TechIconDir = `/tech-icons/original/`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 8px 0px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

const Description = styled.p`
`

const TechShow = (props) => {
  const router = useRouter();
  const { name } = router.query;
  const techIcon = TechIconDatabase.find((each) => each.id === name);

  return (
    <Page>
      <Content>
        <img
          src={`${TechIconDir}${techIcon?.icon}`}
          alt={techIcon?.title}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
        <Title>{techIcon?.title}</Title>
        <Description>{techIcon?.description}</Description>
      </Content>
    </Page>
  );
};

export default TechShow;
