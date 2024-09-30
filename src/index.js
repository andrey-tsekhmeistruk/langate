import './styles.scss';

import { Select } from './js/select';
import { Tabs } from './js/tabs';

document.addEventListener('DOMContentLoaded', async () => {
  const selectIds = ['select-1', 'select-2'];

  selectIds.forEach(selectId => {
    const select = new Select(selectId);
    select.initialize();
  });

  const tabs = new Tabs('tabs');

  tabs.initialize();
});
