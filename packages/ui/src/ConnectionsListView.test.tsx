import { render } from 'react-testing-library';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ConnectionsListView } from './ConnectionsListView';

it('renders the heading', () => {
  const noop = () => false;
  const { container } = render(
    <Router>
      <ConnectionsListView
        linkToConnectionCreate={'/create'}
        activeFilters={[]}
        filterTypes={[]}
        currentFilterType={{
          filterType: 'text',
          id: 'foo',
          placeholder: 'foo placeholder',
          title: 'Foo',
        }}
        currentSortType={'sort'}
        currentValue={''}
        isSortAscending={true}
        resultsCount={0}
        sortTypes={[]}
        onUpdateCurrentValue={noop}
        onValueKeyPress={noop}
        onFilterAdded={noop}
        onSelectFilterType={noop}
        onFilterValueSelected={noop}
        onRemoveFilter={noop}
        onClearFilters={noop}
        onToggleCurrentSortDirection={noop}
        onUpdateCurrentSortType={noop}
      />
    </Router>
  );
  expect(container).toBeTruthy();
});