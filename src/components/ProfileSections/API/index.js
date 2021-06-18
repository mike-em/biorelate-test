import React, { useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import Button from "../../Common/Button";
import {
  StyledInput,
  ButtonGroup,
  FormGroup,
  SectionContainer,
  StyledIcon,
} from "./API.styles";

const ApiSection = () => {
  const [apiKey, setApiKey] = useState(0);
  const [copyCode, setCopyCode] = useState("");
  const [success, setSuccess] = useState(false);

  const handleKeyGenerator = () => {
    const numArr = [];
    for (let i = 0; i < 5; i++) {
      numArr.push(
        Math.random()
          .toString(36)
          .replace(/[^a-z1-9]+/g, "")
          .substr(0, 5)
      );
    }
    setApiKey(numArr.join("-"));
    setSuccess(false);
  };

  const handleCopyToClipboard = () => {
    const el = copyCode;
    el.select();
    document.execCommand("copy");
    el.setSelectionRange(0, 0);
    el.blur();
    setSuccess(true);
  };

  return (
    <SectionContainer>
      <SectionTitle>Access token</SectionTitle>
      <p>Generate your unique key to access Galactic Data™</p>
      <FormGroup>
        <label htmlFor="key">{apiKey ? "Your unique key" : "Key"}</label>
        <StyledInput
          type="text"
          name="key"
          value={apiKey || "0000-0000-0000-0000-0000"}
          ref={(code) => setCopyCode(code)}
          id="key"
          disabled={!apiKey}
        />
      </FormGroup>
      {apiKey ? (
        <ButtonGroup>
          <div>
            <Button secondary width="140px" onClick={handleCopyToClipboard}>
              <StyledIcon />
              Copy to clipboard
            </Button>
            {success ? <p>Copied!</p> : null}
          </div>
          <Button tertiary width="140px" onClick={handleKeyGenerator}>
            Generate another
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          width="140px"
          onClick={handleKeyGenerator}
          style={{ margin: "0" }} // need to fix
        >
          Generate key
        </Button>
      )}
    </SectionContainer>
  );
};

export default ApiSection;
