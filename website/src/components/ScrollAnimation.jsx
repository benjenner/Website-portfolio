import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.4, // När 10% av elementet syns
    triggerOnce: false, // Observera varje gång elementet kommer in i synfältet
  });

  useEffect(() => {
    console.log(`Element is in view: ${inView}`);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
