import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { implementation } from "./implementation";
import { Results } from "./results";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { TabsContent, BeyondTabs, Tabs } from "@bgroup/ui/tabs";`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-detail">
            <h4>Additional Information:</h4>
            <div>
              <p>
                If you pass the<code>data-path</code> property over the tabs
                each tab will do a<code>routing.replaceState</code> on the value
                passed to data-path. tab will do a routing.replaceState on the
                value passed to <code>data-path</code>
              </p>
            </div>
          </div>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
