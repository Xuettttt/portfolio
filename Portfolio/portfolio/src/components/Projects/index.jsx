import React, {useState} from "react";
import "./index.css";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import academic_web from "../../Assets/academic_web.jpg";
import pet_community from "../../Assets/pet_community.jpg";
import tourist from "../../Assets/tourist_analysis.jpg";
import whiteboard from "../../Assets/whiteboard.jpg";

/**
 * projects screen shot
 */
const cards = [
  academic_web,
  pet_community,
  tourist,
  whiteboard
]

const to = i => (
  {
    x: 0, 
    y:i * -10, 
    scale: 1, 
    rot: -10 + Math.random() * 20,
    delay: i * 300
  }
)

const from = i => (
  {
    x: 0,
    rot: 0,
    scale: 1.5,
    y: -1000
  }
)

const trans = (r, s) => 
  `perspective(1500px) rotateX(30deg) rotateY(${r/10}deg) rotateZ(${r}deg) scale(${s})`

function Projects() {

  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      direction:[xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if(!down && trigger)
        gone.add(index);
      set(i => {
        if(index !== i) return;
        const isGone = gone.has(index);
        /**
         * 三种卡片状态下的动画处理：
         * 1. 被甩出去了 （松手 + 快）
         * 2. 拖着没松手中
         * 3. 松手但没甩出去
         */
        const x = isGone
          ? (200 + window.innerWidth) * dir
          : down
          ? xDelta
          : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 500,
            tension: down ? 800 : isGone ? 200 : 500
          }
        };
      })
      if(!down && gone.size === cards.length)
        setTimeout(() => 
          gone.clear() || set(i => to(i)), 600
        );
    }
  );

  return (
    <div className="deck-container">
      <h1>hhh</h1>
      
    </div>
  );
}

export default Projects;