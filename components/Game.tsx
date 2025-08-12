import React, { useState, useRef, useEffect } from "react";

export interface GameProps {
  rows: number;
  cols: number;
}

function createEmptyGrid(rows: number, cols: number): boolean[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );
}

function cloneGrid(grid: boolean[][]): boolean[][] {
  return grid.map((row) => [...row]);
}

function getNeighborCount(grid: boolean[][], x: number, y: number): number {
  const dirs = [
    [0, 1], [0, -1], [1, 0], [-1, 0],
    [1, 1], [-1, -1], [1, -1], [-1, 1]
  ];
  let count = 0;
  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (
      nx >= 0 &&
      nx < grid.length &&
      ny >= 0 &&
      ny < grid[0].length &&
      grid[nx][ny]
    ) {
      count++;
    }
  }
  return count;
}

export const Game: React.FC<GameProps> = ({ rows, cols }) => {
  const [grid, setGrid] = useState<boolean[][]>(() => createEmptyGrid(rows, cols));
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  // Step function: apply Game of Life rules
  const step = () => {
    setGrid((g) => {
      const next = cloneGrid(g);
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const neighbors = getNeighborCount(g, i, j);
          if (g[i][j]) {
            next[i][j] = neighbors === 2 || neighbors === 3;
          } else {
            next[i][j] = neighbors === 3;
          }
        }
      }
      return next;
    });
  };

  // Run simulation when running
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      step();
    }, 500);
    return () => clearInterval(interval);
  }, [running, rows, cols]);

  // Click to toggle cell when paused
  const handleCellClick = (i: number, j: number) => {
    if (!running) {
      setGrid((g) => {
        const next = cloneGrid(g);
        next[i][j] = !next[i][j];
        return next;
      });
    }
  };

  // Optional: Reset grid if dimensions change
  useEffect(() => {
    setGrid(createEmptyGrid(rows, cols));
  }, [rows, cols]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button
        onClick={() => setRunning((r) => !r)}
        style={{
          marginBottom: 16,
          padding: "8px 20px",
          fontSize: 16,
          borderRadius: 6,
          border: "1px solid #333",
          background: running ? "#e57373" : "#81c784",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        {running ? "Pause" : "Play"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
          gridTemplateRows: `repeat(${rows}, 20px)`,
          gap: 0,
          border: "2px solid #333",
          background: "#f7f7f7",
          userSelect: "none",
        }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => handleCellClick(i, j)}
              style={{
                width: 20,
                height: 20,
                background: cell ? "#111" : "#fff",
                border: "1px solid #bbb",
                boxSizing: "border-box",
                transition: "background 0.15s",
                cursor: running ? "not-allowed" : "pointer"
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Game;