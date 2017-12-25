'use strict';

export default function createRoutes(routerHelper) {
  const getStates = function getStates() {
    return [
      {
        name: 'song',
        title: 'Song',
        url: '/ui/song',
        component: 'song'
      },
    ];
  };

  routerHelper.configureStates(getStates());
  routerHelper.configureOtherwise('/ui/song');
};

