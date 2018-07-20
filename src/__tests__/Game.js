import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Game from "../Game";

describe("<Game /> initial state", () => {
  let wrapper;
  it("renders", () => {
    wrapper = shallow(<Game />);
  });

  it("matches snapshot", () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it("should have 'X' as initial player", () => {
    wrapper = mount(<Game />);
    expect(wrapper.state("currPlayer")).toBe("X");
  });

  it("should have an initial layout of null array of arrays", () => {
    expect(wrapper.state("layout")).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  it("should have an initial move count is 0", () => {
    expect(wrapper.state("moveCount")).toBe(0);
  });

  it("should have no initial winner", () => {
    expect(wrapper.state("winner")).toBe(false);
  });

  it("should have win screen initially frozen", () => {
    expect(wrapper.state("showWinScreen")).toBe(false);
  });
});

describe("<Game /> while played", () => {
  const wrapper = mount(<Game />);
  it("should update currPlayer, layout, and moveCount when square is clicked", () => {
    wrapper
      .find("[x=0]")
      .find("[y=0]")
      .simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "O",
      layout: [["X", null, null], [null, null, null], [null, null, null]],
      moveCount: 1,
      winner: false,
      showWinScreen: false
    });
  });

  it("should not change state when square is double clicked", () => {
    wrapper
      .find("[y=0]")
      .find("[x=0]")
      .simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "O",
      layout: [["X", null, null], [null, null, null], [null, null, null]],
      moveCount: 1,
      winner: false,
      showWinScreen: false
    });
  });

  it("should update state, including winner and showWinScreen when game is won by 'X'", () => {
    wrapper
      .find("[y=1]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=1]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=1]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=2]")
      .simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "X",
      layout: [["X", "O", null], ["O", "X", null], [null, null, "X"]],
      moveCount: 5,
      winner: "X",
      showWinScreen: true
    });
  });

  it("should reset state when reset button is clicked", () => {
    wrapper.find("#reset-btn").simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "X",
      layout: [[null, null, null], [null, null, null], [null, null, null]],
      moveCount: 0,
      winner: false,
      showWinScreen: false
    });
  });

  it("should update state, including winner and showWinScreen when game is won by 'O'", () => {
    wrapper
      .find("[y=1]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=1]")
      .simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=1]")
      .simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "O",
      layout: [["X", null, "X"], ["X", "O", "X"], ["O", "O", "O"]],
      moveCount: 8,
      winner: "O",
      showWinScreen: true
    });
  });

  it("should update state when game is a draw", () => {
    wrapper.find("#reset-btn").simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=1]")
      .simulate("click");
    wrapper
      .find("[y=1]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=0]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=2]")
      .simulate("click");
    wrapper
      .find("[y=0]")
      .find("[x=1]")
      .simulate("click");
    wrapper
      .find("[y=2]")
      .find("[x=1]")
      .simulate("click");
    expect(wrapper.state()).toEqual({
      currPlayer: "X",
      layout: [["X", "O", "X"], ["X", "O", "X"], ["O", "X", "O"]],
      moveCount: 9,
      winner: "draw",
      showWinScreen: true
    });
  });
});
