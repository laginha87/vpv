import React from 'react';
import { Icon, ICON_NAMES } from '../src/components/common/Icon';
import '../src/tailwind.css';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { TEXT_COLORS, BG_COLORS } from '../src/styles/colors';
const stories = storiesOf('Icon Stories', module);


stories.add('as dynamic variables', () => {
  const icons = select('Icon', ICON_NAMES);
  const bgColor = select('Bg Color', BG_COLORS);
  const textColor = select('Text Color', TEXT_COLORS);
  return <div className='p-6 w-full'>
  <div className={[bgColor, textColor].join(" ")}><Icon icon={icons}/></div>
</div>;
})