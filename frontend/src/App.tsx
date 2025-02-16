import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000", { method: "GET" })
      .then((response) => response.json())
      .then((data) => { console.log(data); setMessage(data.message); })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6">
        <CardContent>
          <h1 className="text-2xl font-bold">Full Stack con Node & React</h1>
          <p className="mt-4 text-gray-700">{message}</p>
          <Button className="mt-4">¡Hola desde ShadCN!</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
