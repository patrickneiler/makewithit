import React, { useState, useEffect } from "react";

// Define the types for the player and obstacle objects
type Player = {
    x: number;
};

type Obstacle = {
    id: number;
    x: number;
    y: number;
};

export const FallingGame: React.FC = () => {
    const [player, setPlayer] = useState<Player>({ x: 0 });
    const [obstacles, setObstacles] = useState<Obstacle[]>([]);
    const [gameOver, setGameOver] = useState(false);

    // Function to handle player movement
    const handleKeyPress = (event: KeyboardEvent) => {
        const { key } = event;
        const playerSpeed = 10;

        if (key === "ArrowLeft") {
            setPlayer((prevPlayer) => ({ ...prevPlayer, x: prevPlayer.x - playerSpeed }));
        } else if (key === "ArrowRight") {
            setPlayer((prevPlayer) => ({ ...prevPlayer, x: prevPlayer.x + playerSpeed }));
        }
    };

    // Function to create a new obstacle
    const createObstacle = () => {
        const id = Math.random();
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = window.innerHeight;

        setObstacles((prevObstacles) => [...prevObstacles, { id, x, y }]);
    };

    // Function to update obstacle positions
    const updateObstacles = () => {
        setObstacles((prevObstacles) =>
            prevObstacles.map((obstacle) => ({
                ...obstacle,
                y: obstacle.y - 10, // Adjust the speed of obstacle movement here
            }))
        );
    };

    // Function to check for collision between player and obstacles
    const checkCollision = () => {
        for (let i = 0; i < obstacles.length; i++) {
            const obstacle = obstacles[i];
            if (
                player.x < obstacle.x + 50 && // Adjust the collision detection area here
                player.x + 50 > obstacle.x &&
                0 < obstacle.y + 50 && // Adjust the collision detection area here
                50 + player.x > obstacle.y
            ) {
                setGameOver(true);
                break;
            }
        }
    };

    // Set up event listeners for player movement
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    // Start the game loop
    useEffect(() => {
        const gameLoop = setInterval(() => {
            if (!gameOver) {
                createObstacle();
                updateObstacles();
                checkCollision();
            } else {
                clearInterval(gameLoop);
            }
        }, 5000);

        return () => {
            clearInterval(gameLoop);
        };
    }, [gameOver]);

    return (
        <div>
            {gameOver ? (
                <h1>FallingGame Over</h1>
            ) : (
                <div className="relative">
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: `${player.x}px`,
                            width: "50px",
                            height: "50px",
                            backgroundColor: "red",
                        }}
                    />
                    {obstacles.map((obstacle) => (
                        <div
                            key={obstacle.id}
                            style={{
                                position: "absolute",
                                top: `${obstacle.y}px`,
                                left: `${obstacle.x}px`,
                                width: "50px",
                                height: "50px",
                                backgroundColor: "blue",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FallingGame;
