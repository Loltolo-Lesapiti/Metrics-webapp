import renderer from "react-test-renderer";
import Details from "./mock/details";

describe("Currency details", () => {
  it("Check if it renders correctly", () => {
    const tree = renderer.create(<Details />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
