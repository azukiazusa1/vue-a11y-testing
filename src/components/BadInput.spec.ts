import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/vue";
import BadInput from "./BadInput.vue";

expect.extend(toHaveNoViolations);

describe("components/BadInput", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(BadInput, {
      props: {
        label: "name",
      },
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
