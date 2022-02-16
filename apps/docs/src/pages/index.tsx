import { Button } from "@openui/core";
import { useIsomorphicLayoutEffect } from "@openui/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Open UI docs page");
  }, []);
  return (
    <div>
      <h1>Open UI Documentation</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'start' }}>
        <Button>Click me</Button>
        <Button variant="primary">Click me</Button>
        <Button disabled>Click me</Button>
      </div>
    </div>
  );
}
