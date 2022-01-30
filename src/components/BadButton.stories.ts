import type { Story, Meta } from "@storybook/vue3";
import BadButton from "./BadButton.vue";

export default {
  title: "BadButton",
  component: BadButton,
  argTypes: {},
} as Meta;

const Template: Story = (args) => ({
  components: { BadButton },
  setup() {
    return { args };
  },
  template: `<BadButton v-bind="args">Button</BadButton>`,
});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
};
