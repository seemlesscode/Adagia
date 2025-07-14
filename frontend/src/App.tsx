import { Button, Container } from "@mantine/core";
import TestFirestore from "./pages/TestFirestore";

export default function App() {
  return (
    <Container>
      <h1>Adagia 👋</h1>
      <Button variant="filled" color="indigo">
        Button
      </Button>
      <TestFirestore />
    </Container>
  );
}
