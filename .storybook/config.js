import { configure, addParameters } from '@storybook/react';
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


addDecorator(withKnobs);



addParameters({
    viewport: {
    //   viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
      defaultViewport: 'iphone6',
      viewports: INITIAL_VIEWPORTS
    },
  });

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
