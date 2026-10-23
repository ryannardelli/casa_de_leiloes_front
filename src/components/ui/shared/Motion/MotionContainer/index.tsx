import { motion, type HTMLMotionProps } from "framer-motion";

type MotionContainerProps = HTMLMotionProps<"div">

export const MotionContainer = ({
  children,
  className = "",
  ...props
}: MotionContainerProps) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};