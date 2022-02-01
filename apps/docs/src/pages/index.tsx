import { Button } from "@openui/core";
import { useIsomorphicLayoutEffect } from "@openui/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Open UI docs page");
  }, []);
  return (
    <div>
      <h1>Open UI Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
