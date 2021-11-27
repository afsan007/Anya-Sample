import React from "react";
import styled from "@emotion/styled";
import { ContentBox } from "./Body/ContentBox";
import { config } from "./Body/body.config";
const category = ["All", "Movies.Tv", "Game", "Books", "Music"];

const Container = styled.div`
  padding: 30px 0;
  flex:1;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const Category = styled.div<{ selected: boolean }>(({ selected }) => ({
  background: "#363636",
  boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  padding: "11px 13px",
  color: selected ? "#C65656" : "#b5b5b5",
  fontSize: "12px",
  border: selected ? "2px solid #C65656" : "inherit",
  marginLeft: "2px"
}));

export const Body = () => {
  return (
    <Container>
      <Head>
        {category.map((cat, idx) => (
          <Category selected={idx === 0} key={idx}>
            {cat}
          </Category>
        ))}
      </Head>
      {config.map((conf) => (
        <ContentBox config={conf} />
      ))}
    </Container>
  );
};
