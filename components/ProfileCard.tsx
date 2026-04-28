"use client";

import avatarSrc from "../public/avatar.jpg";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const ProfileCard = () => {
  // rotation values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // mouse position inside card
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // smooth rotation
  const smoothX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  // smooth spotlight position
  const glowX = useSpring(mouseX, {
    stiffness: 160,
    damping: 20,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 160,
    damping: 20,
  });

  // purple glow follows mouse
  const borderGlow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(168,85,247,0.9), rgba(168,85,247,0.25) 20%, transparent 45%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // tilt
    rotateY.set((x - centerX) / 14);
    rotateX.set(-(y - centerY) / 14);

    // spotlight %
    mouseX.set((x / rect.width) * 100);
    mouseY.set((y / rect.height) * 100);
  };

  const reset = () => {
    // smooth return center
    rotateX.set(0);
    rotateY.set(0);

    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1200,
      }}
      className="relative w-80 h-80 rounded-3xl p-[1.5px] cursor-pointer"
    >
      {/* animated purple border */}
      <motion.div
        style={{ background: borderGlow }}
        className="absolute inset-0 rounded-3xl"
      />

      {/* card body */}
      <div
        className="
          relative z-10 h-full w-full rounded-3xl
          bg-neutral-950 border border-white/10
          overflow-hidden
          shadow-2xl
        "
      >
        <Image
          src={avatarSrc}
          alt="my avatar"
          fill
          className="object-cover"
        />

        {/* subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </motion.div>
  );
};

export default ProfileCard;