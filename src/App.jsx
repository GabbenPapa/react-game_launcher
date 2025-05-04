import { useState } from "react";
import { useLaunchGame } from "./games.jsx";
import { Card, Row, Col, Spin, Typography, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./App.css";

const { Title, Paragraph } = Typography;

function App() {
  const { games, loading } = useLaunchGame();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const showDrawer = (game) => {
    setSelectedGame(game);
    setDrawerOpen(true);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Title
        level={1}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
      >
        <MenuOutlined onClick={() => setMenuOpen(true)} />
        Game Launcher
      </Title>

      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {games.map((game, index) => (
            <Col span={8} key={index}>
              <Card
                className="game-card"
                hoverable
                onClick={() => showDrawer(game)}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #3f0ba7, #a42deb)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                  }}
                />
                <Title level={3} style={{ color: "white", margin: 0 }}>
                  {game.title}
                </Title>
                <Paragraph style={{ color: "white" }}>
                  <strong>Description:</strong> {game.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Drawer
        title={
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {selectedGame?.title}
          </span>
        }
        placement="left"
        onClose={() => {
          setDrawerOpen(false);
          setSelectedGame(null);
        }}
        open={drawerOpen}
        width={400}
      >
        {selectedGame && (
          <>
            <img
              src={selectedGame.imageUrl}
              alt={selectedGame.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <Paragraph>
              <strong>Description:</strong> {selectedGame.description}
            </Paragraph>
            <Paragraph>
              <strong>Long Description:</strong> {selectedGame.longDescription}
            </Paragraph>
            <button className="drawer-button">Start</button>
          </>
        )}
      </Drawer>

      <Drawer
        title="Available Games"
        placement="left"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
      >
        {games.map((game, index) => (
          <p
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => {
              showDrawer(game);
              setMenuOpen(false);
            }}
          >
            {game.title}
          </p>
        ))}
      </Drawer>
    </div>
  );
}

export default App;
