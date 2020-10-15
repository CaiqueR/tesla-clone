import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div className="ABACAXI">
          {[
            "Model S",
            "Model X",
            "Model 3",
            "Model Y",
            "Only $1.49/Watt for Solar on Existing Roofs",
            "Solar for New Roofs",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>

      <UniqueOverlay />
    </Container>
  );
};

export default Page;
