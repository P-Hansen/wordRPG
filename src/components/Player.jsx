import Actor from "./Actor";
import useKeyPress from "../hooks/use-key-press";
import useWalk from "../hooks/use-walk";

// this is the component that listens for player input
const Player = ({ skin }) => {
  // useWalk(maxSteps) is 3 because we only have 3 frames of animation
  const { dir, step, position, walk } = useWalk(3);

  const data = {
    h: 32,
    w: 32,
  };


  useKeyPress((event) => {
    event.preventDefault();
    const dir = event.key.replace("Arrow", "").toLowerCase();
    // console.log("dir in useKeyPress", dir);
    if (dir === "down" || dir === "left" || dir === "right" || dir === "up") {
      walk(dir);
      // console.log("inside if: ", dir);
    }
  });
  
  return (
    <Actor 
      sprite={`/sprites/skins/${skin}.png`}
      data={data} 
      dir={dir} 
      step={step}
      position={position}
    />
  )
};

export default Player