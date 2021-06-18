import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../Common/Button";
import RoundButton from "../../Common/RoundButton";
import { BiBookmarkMinus } from "react-icons/bi";
import { GoKebabVertical } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import { VscChevronDown } from "react-icons/vsc";
import {
  TitleContainer,
  ButtonGroup,
  StyledSectionHeader,
  ArticleCard,
  ArticleCardContent,
  ArticleCardButtons,
  FilterNumber,
} from "./Articles.styles";

const Articles = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      "https://mockend.com/biorelate/fe-mock-api/article?limit=10&published_order=desc"
    );
    setState(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const customDate = (d) => {
    let date = new Date(d);
    return (date = `${date.toLocaleString("en", {
      day: "numeric",
    })} ${date.toLocaleString("en", {
      month: "short",
    })} ${date.toLocaleString("en", { year: "numeric" })}`);
  };

  return (
    <div>
      <StyledSectionHeader>
        <TitleContainer>
          <h4>Articles</h4>
          <p>24 new since 05/04/21</p>
        </TitleContainer>
        <ButtonGroup>
          <Button
            secondary
            style={{
              backgroundColor: "rgba(26, 136, 232, 0.1)",
              border: "none",
            }}
          >
            <GiSettingsKnobs
              style={{
                transform: "rotate(90deg)",
                marginBottom: "-2px",
                marginRight: "8px",
              }}
            />{" "}
            Filter
            <FilterNumber>1</FilterNumber>
          </Button>
          <Button tertiary>
            Sort by:{" "}
            <span style={{ color: "#1a88e8" }}>
              Recent{" "}
              <VscChevronDown
                style={{ fontSize: "20px", marginBottom: "-5px" }}
              />
            </span>
          </Button>
          <Button tertiary style={{ margin: "0" }}>
            Create alert
          </Button>
        </ButtonGroup>
      </StyledSectionHeader>
      {state.length > 0
        ? state.map((item) => (
            <ArticleCard key={item.id}>
              <ArticleCardContent>
                <h3>{item.title}</h3>
                <h6>
                  Cameron Williamson | Jenny Wilson | Wade Warren |{" "}
                  <span>published: {customDate(item.published)}</span>
                </h6>
                <p>{item.snippet}</p>
              </ArticleCardContent>
              <ArticleCardButtons>
                <RoundButton>
                  <BiBookmarkMinus />
                </RoundButton>
                <RoundButton>
                  <GoKebabVertical />
                </RoundButton>
              </ArticleCardButtons>
            </ArticleCard>
          ))
        : "Loading..."}
    </div>
  );
};

export default Articles;
