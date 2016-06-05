import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SidePane from '../containers/side-pane';
import VideoContent from '../containers/video-content';
import NotFound from '../components/NotFound/NotFound';

export default (
  <Route>
    <Route path="/" component={SidePane}>
      <IndexRoute component={VideoContent} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
);
