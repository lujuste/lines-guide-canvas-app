import React, { useEffect, useRef, useState } from "react";
import Konva from "konva";
import { Layer, Stage, Rect, Transformer, Line } from "react-konva";
import { useMainHook } from "../../../../../hooks/main";
import { usePagesEditor } from "../../../hooks/pagesEditor";
import { useWorkspaceEditor } from "../../../hooks/workspaceEditor";
import Rendering from "../Rendering";
import { useSelection } from "../../../hooks/selection";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const widthCanvas: number = 596;
const heigthCanvas: number = 842;

const SceneKonva: React.FC<any> = ({ item, index }) => {
  //const Konva = window.Konva;
  const { addToHistory } = useMainHook();
  const { setStagePointerPosition } = usePagesEditor();
  const [h_lines, setHlines] = useState([]);
  const [v_lines, setVlines] = useState([]);
  const { checkDeselect } = useWorkspaceEditor();
  const { addToRefs, setSelectedGroup } = useMainHook();
  const GUIDELINE_OFFSET = 5;
  const {
    addToMultipleSelectionRef,
    multipleSelectionRefs,
    currentMultipleSelection,
    setSelectedObject,
    selectedObject,

    setSelectedObjects
  } = useSelection();

  const { idPage, setIdPage } = usePagesEditor();

  const windows = window as any;
  const Konvas = windows.Konva;

  const oldPos = useRef(null);
  const selectionRectRef = useRef(null);
  const layerRef = useRef(null);
  const selection = useRef({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  });

  const updateSelectionRect = () => {
    const node = selectionRectRef.current;
    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
      fill: "rgba(140, 161, 255, 0.3)"
    });
    node.getLayer().batchDraw();
  };

  const onMouseDown = e => {
    if (e.target instanceof Konva.Stage) {
      setSelectedObject(null);

      // cleaning currentMutipleSelection
      if (currentMultipleSelection.current) {
        currentMultipleSelection.current.setNodes([]);
        setSelectedObjects([]);
      }

      const pos = e.target.getStage().getPointerPosition();
      selection.current.visible = true;
      selection.current.x1 = pos.x;
      selection.current.y1 = pos.y;
      selection.current.x2 = pos.x;
      selection.current.y2 = pos.y;
      updateSelectionRect();
      return;
    }
  };

  const onMouseMove = e => {
    if (!selection.current.visible) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseUp = event => {
    //assigning currentMutipleSelection to the multpleSelection in the stage with it's index

    console.log(event.target);
    console.log(multipleSelectionRefs.current);
    const currentIndex = event.currentTarget.attrs.id - 1;
    currentMultipleSelection.current =
      multipleSelectionRefs.current[currentIndex];

    oldPos.current = null;
    if (!selection.current.visible) {
      return;
    }
    // getting properties of selectionRect
    const selBox = selectionRectRef.current.getClientRect();

    const elements = [];

    layerRef.current.children.forEach((elementNode, index) => {
      if (
        elementNode !== currentMultipleSelection.current &&
        elementNode !== selectionRectRef.current
      ) {
        const elBox = elementNode.getClientRect();

        if (Konva.Util.haveIntersection(selBox, elBox)) {
          elements.push(elementNode);
        }
      }
    });

    currentMultipleSelection.current.setNodes(elements);
    setSelectedObjects(elements);

    selection.current.visible = false;
    updateSelectionRect();
  };

  // // Unload UseEffect
  // useEffect(() => {
  //   return () => {
  //     //unloading mutitpleSelections every time user leave the screen

  //     //TA BUGANDO AQUI
  //     console.log('DELETANDO')
  //     multipleSelectionRefs.current = [];
  //   };
  // }, []);
  // where can we snap our objects?
  const getLineGuideStops = skipShape => {
    // we can snap to stage borders and the center of the stage
    let vertical = [
      0,
      skipShape.getStage().width() / 2,
      skipShape.getStage().width()
    ];
    let horizontal = [
      0,
      skipShape.getStage().height() / 2,
      skipShape.getStage().height()
    ];

    // and we snap over edges and center of each object on the canvas
    skipShape
      .getStage()
      .find(".rectangle")
      .forEach(guideItem => {
        if (guideItem === skipShape) {
          return;
        }
        let box = guideItem.getClientRect({
          relativeTo: skipShape.getStage()
        });
        // and we can snap to all edges of shapes
        vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
        horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
      });

    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat()
    };
  };

  // what points of the object will trigger to snapping?
  // it can be just center of the object
  // but we will enable all edges and center
  const getObjectSnappingEdges = node => {
    let box = node.getClientRect({ relativeTo: node.getStage() });
    let absPos = node.absolutePosition();

    return {
      vertical: [
        {
          guide: Math.round(box.x),
          offset: Math.round(absPos.x - box.x),
          snap: "start"
        },
        {
          guide: Math.round(box.x + box.width / 2),
          offset: Math.round(absPos.x - box.x - box.width / 2),
          snap: "center"
        },
        {
          guide: Math.round(box.x + box.width),
          offset: Math.round(absPos.x - box.x - box.width),
          snap: "end"
        }
      ],
      horizontal: [
        {
          guide: Math.round(box.y),
          offset: Math.round(absPos.y - box.y),
          snap: "start"
        },
        {
          guide: Math.round(box.y + box.height / 2),
          offset: Math.round(absPos.y - box.y - box.height / 2),
          snap: "center"
        },
        {
          guide: Math.round(box.y + box.height),
          offset: Math.round(absPos.y - box.y - box.height),
          snap: "end"
        }
      ]
    };
  };

  // find all snapping possibilities
  const getGuides = (lineGuideStops, itemBounds) => {
    let resultV = [];
    let resultH = [];

    lineGuideStops.vertical.forEach(lineGuide => {
      itemBounds.vertical.forEach(itemBound => {
        let diff = Math.abs(lineGuide - itemBound.guide);
        // if the distance between guild line and object snap point is close we can consider this for snapping
        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });

    lineGuideStops.horizontal.forEach(lineGuide => {
      itemBounds.horizontal.forEach(itemBound => {
        let diff = Math.abs(lineGuide - itemBound.guide);
        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });

    let guides = [];

    // find closest snap
    let minV = resultV.sort((a, b) => a.diff - b.diff)[0];
    let minH = resultH.sort((a, b) => a.diff - b.diff)[0];
    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: "V",
        snap: minV.snap
      });
    }
    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: "H",
        snap: minH.snap
      });
    }
    return guides;
  };

  const drawGuides = guides => {
    if (guides) {
      guides.forEach(lg => {
        if (lg.orientation === "H") {
          let guide = {
            points: [-6000, 0, 6000, 0],
            stroke: "rgb(0, 161, 255)",
            strokeWidth: 1,
            name: "guid-line",
            dash: [4, 6],
            x: 0,
            y: lg.lineGuide
          };
          setHlines([...guides, guide]);
        } else if (lg.orientation === "V") {
          let guide = {
            points: [0, -6000, 0, 6000],
            stroke: "rgb(0, 161, 255)",
            strokeWidth: 1,
            name: "guid-line",
            dash: [4, 6],
            x: lg.lineGuide,
            y: 0
          };
          setVlines([...guides, guide]);
        }
      });
    }
  };

  const onDragMove = e => {
    // clear all previous lines on the screen
    // layer.find('.guid-line').destroy();

    // find possible snapping lines
    let lineGuideStops = getLineGuideStops(e.target);
    // find snapping points of current object
    let itemBounds = getObjectSnappingEdges(e.target);

    // now find where can we snap current object
    let guides = getGuides(lineGuideStops, itemBounds);

    // do nothing of no snapping
    if (!guides.length) {
      return;
    }

    drawGuides(guides);

    let absPos = e.target.absolutePosition();
    // now force object position
    guides.forEach(lg => {
      switch (lg.snap) {
        case "start": {
          switch (lg.orientation) {
            case "V": {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case "H": {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        case "center": {
          switch (lg.orientation) {
            case "V": {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case "H": {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        case "end": {
          switch (lg.orientation) {
            case "V": {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case "H": {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        default:
          break;
      }
    });
    e.target.absolutePosition(absPos);
  };

  const onDragEnd = e => {
    setHlines([]);
    setVlines([]);
  };

  return (
    <Stage
      ref={e => {
        addToRefs(e);
      }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          setSelectedObject(null);
        }
      }}
      onContextMenu={e => {
        const absPosition = e.target.getStage().getPointerPosition();
        setStagePointerPosition(absPosition);
      }}
      pixelRatio={2}
      scaleX={1}
      scaleY={1}
      width={widthCanvas}
      height={heigthCanvas}
      className={idPage === index + 1 ? "" : ""}
      id={`${index + 1}`}
      onMouseDown={event => {
        checkDeselect(event);
        onMouseDown(event);
      }}
      onMouseEnter={e => {
        setIdPage(e.currentTarget.attrs.id);
      }}
      onMouseMove={onMouseMove}
      onTouchStart={checkDeselect}
      onMouseUp={onMouseUp}
    >
      <Layer
        onDragMove={e => onDragMove(e)}
        onDragEnd={e => onDragEnd(e)}
        ref={layerRef}
      >
        {item.renderObjects.map((objectProps, index) => (
          <Rendering
            selectedObject={selectedObject}
            setSelectedObject={setSelectedObject}
            objectProps={objectProps}
            addToHistory={addToHistory}
            currentMultipleSelection={currentMultipleSelection}
          />
        ))}
        {h_lines.map((item, i) => {
          return <Line key={i} {...item} />;
        })}
        {v_lines.map((item, i) => {
          return <Line key={i} {...item} />;
        })}
        <Rect ref={selectionRectRef} />
        <Transformer ref={addToMultipleSelectionRef} borderStroke="gold" />
      </Layer>
    </Stage>
  );
};

export default SceneKonva;

