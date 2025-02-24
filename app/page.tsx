"use client";

import Card from "./components/Card/Card";

export default function Home() {
  return <div style={{ height: "100%", width: "100%", overflow: "scroll" }}>
    <Card title="Hi!">
      <p> { "Welcome to my portfolio website!" } </p>
      {/* <Button> Primary Button </Button>
      <Button variant="secondary"> Secondary Button </Button> */}
    </Card>

    {/* <Container size="lg">
      { "default" }
    </Container>

    <Container size="sm" variant="danger">
      { "default" }
    </Container>

    <Container size="sm" variant="success">
      { "default" }
    </Container>

    <Container size="md" variant="warning">
      { "default" }
    </Container> */}
  </div>
};