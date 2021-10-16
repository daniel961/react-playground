import { PanelContainer, DetailBlock } from "./styled/DetailsPanel.styled";

function DetailsPanel({ ipInfo }) {
  const { ip, location, timezone, isp } = ipInfo;
  return (
    <PanelContainer>
      <DetailBlock>
        <h3>IP ADDRESS</h3>
        <h2>{ip ? ip : "-"}</h2>
      </DetailBlock>
      <DetailBlock>
        <h3>LOCATION</h3>
        <h2>{location ? location : "-"}</h2>
      </DetailBlock>
      <DetailBlock>
        <h3>TIMEZONE</h3>
        <h2>{timezone ? timezone : "-"}</h2>
      </DetailBlock>
      <DetailBlock>
        <h3>ISP</h3>
        <h2>{isp ? isp : "-"}</h2>
      </DetailBlock>
    </PanelContainer>
  );
}

export default DetailsPanel;
