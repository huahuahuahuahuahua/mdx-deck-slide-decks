import React, { Component } from "react";
import TextmMd from "text1.md";
class app extends Component {
  render() {
    return (
      <MDXProvider Components={createComponents()}>
        <RebassProvider>
          <Container>
            <TextmMd></TextmMd>
          </Container>
        </RebassProvider>
      </MDXProvider>
    );
  }
}

export default app;
