"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  type MotionValue,
  motion,
  motionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { createContext, useContext, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border",
);

interface DockContextType {
  mousex: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextType>({
  mousex: motionValue(Infinity),
  magnification: DEFAULT_MAGNIFICATION,
  distance: DEFAULT_DISTANCE,
});

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity);

    return (
      <DockContext.Provider value={{ mousex, magnification, distance }}>
        <motion.div
          ref={ref}
          onMouseMove={(e) => mousex.set(e.pageX)}
          onMouseLeave={() => mousex.set(Infinity)}
          {...props}
          className={cn(dockVariants({ className }))}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  className?: string;
  children?: React.ReactNode;
}

const DockIcon = ({
  size,
  magnification: magnificationProp,
  distance: distanceProp,
  className,
  children,
  ...props
}: DockIconProps) => {
  const { mousex, magnification, distance } = useContext(DockContext);
  const mag = magnificationProp ?? magnification;
  const dist = distanceProp ?? distance;

  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distanceCalc, [-dist, 0, dist], [40, mag, 40]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
