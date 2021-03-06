import React, { useEffect, useRef } from 'react';

import renderGridlines from '+/../canvas/render-gridlines';
import useTab from '+/hooks/use-tab';
import useWorkspace from '+/hooks/use-workspace';

export default function Gridlines({ width, height }) {
  const canvasRef = useRef();
  const tab = useTab();
  const workspace = useWorkspace();
  const dpr = window.devicePixelRatio;

  useEffect(() => {
    if (workspace) {
      const ctx = canvasRef.current.getContext('2d');
      const offsets = { x: tab.x, y: tab.y };
      const xCoordinates = workspace.guidelines.x.map((g) => +g.value);
      const yCoordinates = workspace.guidelines.y.map((g) => +g.value);

      renderGridlines({
        ctx,
        xCoordinates,
        yCoordinates,
        offsets,
      });
    }
  }, [width, height, tab, workspace]);

  return (
    <canvas style={{ width, height }} width={width * dpr} height={height * dpr} ref={canvasRef} />
  );
}
