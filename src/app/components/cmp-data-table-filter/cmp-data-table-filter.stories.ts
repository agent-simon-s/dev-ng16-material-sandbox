import type { Meta, StoryObj } from "@storybook/angular";
import { CmpDataTableFilterComponent } from "./cmp-data-table-filter.component";

// import { within } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";

const meta: Meta<CmpDataTableFilterComponent> = {
  component: CmpDataTableFilterComponent,
  title: "Tables/CmpDataTableFilterComponent",  
  tags: ['autodocs'],
  render: (args: CmpDataTableFilterComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<CmpDataTableFilterComponent>;

export const Primary: Story = {};

export const Paging: Story = {
  args: {
    updateGridData: "",
    url: "",
    filterDataUrl: "",
    showSearch: true,
    rowsheight: 50,
    statusbarheight: 60,
    pagermode: "default",
    pagesizeoptions: [1,2,3],
    pagerheight: 60,
    autoheight: true,
    pageable: true,
    sortable: true,
    linkItem: true,
    linkMore: true,
  },
};

export const NonPaging: Story = {
  args: {
    pageable:false,
  },
};

export const Other: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
    // expect(canvas.getByText(/custom-mat-grid-search works!/gi)).toBeTruthy();
  },
};
