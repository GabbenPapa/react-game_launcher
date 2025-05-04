import { useLaunchGame } from "./games.jsx";
import { Card, Row, Col, Spin, Typography } from "antd";
import "./App.css"; // hozzáadunk külső CSS fájlt

const { Title, Paragraph } = Typography;

function App() {
  const { games, loading } = useLaunchGame();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        borderRadius: "8px",
      }}
    >
      <Title level={1}>Game Launcher</Title>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {games.map((game, index) => (
            <Col span={24} key={index}>
              <Card
                className="game-card"
                hoverable
                onClick={() => console.log(game.title)}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={8} md={6}>
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      style={{ width: "80%", borderRadius: "8px" }}
                    />
                  </Col>
                  <Col xs={24} sm={16} md={18}>
                    <Title level={3} style={{ color: "white" }}>
                      {game.title}
                    </Title>
                    <Paragraph style={{ color: "white" }}>
                      <strong>Description:</strong> {game.description}
                    </Paragraph>
                    <Paragraph style={{ color: "white" }}>
                      <strong>Long Description:</strong> {game.longDescription}
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
