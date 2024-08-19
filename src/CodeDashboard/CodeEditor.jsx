import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import profile from "../Assets/client-logo.gif";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx.min";
import "./codedashboard.css"; // Include custom styles

const CodeEditor = () => {
  const [code, setCode] = useState(
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? 'Go to move #' + move
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}`
  );

  const [isEditable, setIsEditable] = useState(false);

  const highlightCode = (code) =>
    Prism.highlight(code, Prism.languages.jsx, "jsx");

  const lineCount = code.split("\n").length;
  const byteSize = new Blob([code]).size;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard");
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tictactoe.js";
    document.body.appendChild(element);
    element.click();
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <div>
        <div className="flex-row-custom mt-3">
          <div className="flex-row-custom align-items-center">
            <button className="btn ms-0">
              <div className="flex-row-custom align-items-center">
                <i className="bi bi-git me-2"></i>
                <i style={{ fontStyle: "normal" }}>main</i>
                <i className="bi bi-chevron-down ms-2"></i>
              </div>
            </button>
            <h6 className="ms-2">react-mini-dashboards / TikTakToe.jsx</h6>
          </div>
          <div>
            <div className="flex-row-custom">
              <button className="btn">Find file</button>
              <button className="btn">Blame</button>
              <button className="btn">History</button>
              <button className="btn">Permalink</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body pt-1 pb-0">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-start justify-content-between">
              <img
                src={profile}
                alt="profile"
                style={{
                  width: "32px",
                }}
              />
              <div className="ms-2">
                <a href="#" className="text-dark link-info">
                  Update file index.html
                </a>
                <p>
                  <a href="#" className="text-dark link-info me-2">
                    John Doe
                  </a>
                  authored 17 minutes ago
                </p>
              </div>
            </div>
            <div className="card d-flex align-items-center flex-row p-2">
              dh47482wkw2
              <i className="bi bi-clipboard2 ms-2"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="code-container">
        <div className="code-header">
          <div className="file-info">
            <span className="border px-2 rounded bg-white">Code</span>
            <span>·</span>
            <span>Blame</span>
          </div>
          <span>
            <i
              className="bi bi-filetype-jsx me-2"
              style={{
                color: "#FFB22C",
              }}
            ></i>
            TikTakToe.jsx
          </span>
          <span>
            {lineCount} lines ({lineCount} loc) · {byteSize} Bytes
          </span>
          <div className="file-actions">
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-backspace"></i>
            </button>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-trash"></i>
            </button>
            <button
              onClick={copyToClipboard}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-copy"></i>
            </button>
            <button
              onClick={downloadFile}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-download"></i>
            </button>
            <button
              onClick={toggleEdit}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-pen"></i>
            </button>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Tooltip on bottom"
            >
              <i className="bi bi-code"></i>
            </button>
          </div>
        </div>
        <div className="editor-wrapper">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={highlightCode}
            padding={10}
            readOnly={!isEditable}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              backgroundColor: "#f5f5f5",
              minHeight: "400px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
