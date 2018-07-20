import checkWin from "../helpers/checkWin";

describe("checkWin function", () => {
  it("identifies draws", () => {
    expect(
      checkWin(
        [["O", "X", "O"], ["X", "O", "X"], ["X", "O", "X"]],
        0,
        0,
        "O",
        9
      )
    ).toBe("draw");
  });

  it("identifies column wins", () => {
    expect(
      checkWin(
        [["X", "O", null], ["X", "O", null], ["X", null, null]],
        2,
        0,
        "X",
        5
      )
    ).toBe("X");
  });

  it("identifies row wins", () => {
    expect(
      checkWin(
        [["X", null, null], ["X", "X", null], ["O", "O", "O"]],
        2,
        2,
        "O",
        6
      )
    ).toBe("O");
  });

  it("identifies diagonal wins", () => {
    expect(
      checkWin(
        [["X", "O", null], [null, "X", null], [null, "O", "X"]],
        2,
        2,
        "X",
        5
      )
    ).toBe("X");

    expect(
      checkWin(
        [["X", null, "O"], ["X", "O", null], ["O", "X", null]],
        2,
        0,
        "O",
        6
      )
    ).toBe("O");
  });

  it("identifies when no wins have occured", () => {
    expect(
      checkWin(
        [["X", "O", null], ["O", "X", null], [null, "X", null]],
        2,
        1,
        "X",
        5
      )
    ).toBe(false);
  });
});
