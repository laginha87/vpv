import React from 'react';
import { Icon, ICON_NAMES } from '../src/components/common/Icon';
import '../src/tailwind.css';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

const stories = storiesOf('Icon Stories', module);


stories.add('as dynamic variables', () => {
  const icons = select('Icon', ICON_NAMES);
  const colors = select('Icon', COLOR_NAMES);
  return <div className='p-6 w-full'>
  <Icon icon={icons}/>
</div>;
})