import React, { useState } from "react";
import "./index.css";
import { useSprings, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import academic_web from "../../Assets/Academic_Web.png";
import pet_community from "../../Assets/Pet_Community.png";
import tourist from "../../Assets/Tourist.png";
import whiteboard from "../../Assets/Whiteboard.png";

const cards = [tourist, whiteboard, pet_community, academic_web];

const to_2 = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 300,
});

const from = (i) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
});

const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`;

function Project() {
  const [gone, setGone] = useState(new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to_2(i),
    from: from(i),
  }));

  const bind = useGesture(
    {
      onDrag: ({ args: [index], down, movement: [mx], velocity: vx, direction: [xDir] }) => {
        const trigger = !down && (Math.abs(vx) > 0.2 || Math.abs(mx) > 190);
        const dir = xDir < 0 ? -1 : 1;

        let updatedGone = new Set(gone);
      
        const newGone = new Set(gone);

        if (trigger) {
          updatedGone.add(index);
          setGone(updatedGone);
        }

        api.start((i) => {
          if (index !== i) return;
          const isGone = updatedGone.has(index);
          const x = isGone
            ? (500 + window.innerWidth) * dir
            : down
            ? mx
            : 0;
          const rot = mx / 100 + (isGone ? dir * 10 * vx : 0);
          const scale = down ? 1.1 : 1;

          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          };
        });

        if (!down && updatedGone.size === cards.length) {
          setTimeout(() => {
            setGone(new Set());
            api.start((i) => to_2(i));
          }, 600);
        }

      },
    },
    { drag: { filterTaps: true, threshold: 10 } }
  );

  return (
    <div className="deck-container">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className="card-wrapper"
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            touchAction: "none",
          }}
        >
          <animated.div
            {...bind(i)}
            className="card"
            style={{
              transform: to([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              pointerEvents: "auto",
            }}
          />
        </animated.div>
      ))}
    </div>
    
  );
}

export default Project;