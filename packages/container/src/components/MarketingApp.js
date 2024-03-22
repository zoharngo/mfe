import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        const { pathname: nextPathname } = location; // this is the path that the Marketing App is trying to navigate to
        const { pathname: currentPathname } = history.location; // this is the current path that the Container App is on
        if (currentPathname !== nextPathname) {
          history.push(nextPathname); // this is how we navigate to the path that the Marketing App is trying to navigate to
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
