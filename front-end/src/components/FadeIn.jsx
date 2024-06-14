import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FadeIn({
  children,
  delay,
  direction,
  fullWidth,
  padding,
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : "w-auto"} ${
        padding ? "px-10" : "px-0"
      }  flex items-center justify-center`}
    >
        <motion.div 
            variants={{
                hidden:{
                    opacity:0,
                    x:direction === "right" ? -100 : direction === "left" ? 100 : direction === "middle" ? 0: 0,
                    y:direction === "up" ? 100 : direction === "down" ? -100 : direction === "middle"? 0:0,
                },
                visible:{
                    opacity:1,
                    x:0,
                    y:0,
                },
            }}
            initial = "hidden"
            animate = {controls}
            transition={{
                duration:1.25,
                type:"tween",
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }}
        >
            {children}
        </motion.div>
    </div>
  );
}
