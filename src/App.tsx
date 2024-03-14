import { useState } from "react";
import { Button } from "@/components/ui/button";

// Styles
import "@/App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Button onClick={() => setCount((p) => p + 1)}>Hello {count}</Button>;
}

export default App;
