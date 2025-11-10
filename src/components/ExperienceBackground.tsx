import { motion } from "framer-motion";
import {
  azure,
  bootstrap,
  firebase,
  git,
  github,
  java,
  javascript,
  mysql,
  node,
  office,
  php,
  postgre,
  python,
  react,
  symfony,
  tailwind,
  typescript,
  wordpress,
} from "../assets/img/skills/index";

// components/AnimatedBackground.tsx

interface FloatingImage {
  id: number;
  src: string;
  size: number; // Taille en pourcentage ou pixels
  initialX: number;
  initialY: number;
  rotation: number;
  animationType?: number;
}

interface AnimatedBackgroundProps {
  intensity?: "low" | "medium" | "high";
  opacity?: number;
  imageCount?: number;
}

export const ExperienceBackground2 = () => {
  const skills = [
    azure,
    bootstrap,
    firebase,
    git,
    github,
    java,
    javascript,
    mysql,
    node,
    office,
    php,
    postgre,
    python,
    react,
    symfony,
    tailwind,
    typescript,
    wordpress,
  ];
  const randomSkill = () => {
    return skills[Math.floor(Math.random() * (skills.length - 1))];
  };
  const randomRotate = () => {
    const ang = Math.floor(Math.random() * 360);

    return ` flex rotate-[${ang}deg] `;
  };
  const skillsList = (len = 15) => {
    let i = 0;
    const list = [];
    while (i < len) {
      list.push({ skill: randomSkill(), className: randomRotate() });
      i += 1;
    }
    return list;
  };
  return (
    <div className="xmd:absolute xmd:flex flex-wrap justify-between hidden top-0 left-0 w-full h-full -z-10 opacity-15">
      {skillsList().map((sk, idx) => (
        <img
          src={sk.skill}
          key={idx}
          className={`max-w-52 object-contain ${sk.className} `}
        />
      ))}
    </div>
  );
};

export const ExperienceBackground: React.FC<AnimatedBackgroundProps> = ({
  intensity = "low",
  opacity = 0.1,
}) => {
  // Liste des images pour le background
  const skills = [
    azure,
    bootstrap,
    firebase,
    git,
    github,
    java,
    javascript,
    mysql,
    node,
    php,
    postgre,
    python,
    react,
    symfony,
    tailwind,
    typescript,
    wordpress,
  ];
  const floatingImages: FloatingImage[] = skills.map((skill, idx) => ({
    id: idx + 1,
    src: skill,
    size: 60 + Math.floor(Math.random() * 100), // Taille aléatoire entre 80 et 180 pixels
    initialX: Math.floor(Math.random() * 100), // Position X aléatoire en pourcentage
    initialY: Math.floor(Math.random() * 100), // Position Y aléatoire en pourcentage
    rotation: Math.floor(Math.random() * 360), // Rotation aléatoire entre 0 et 360 degrés
    animationType: Math.floor(Math.random() * 4), // 4 types d'animations différentes
  }));

  // Configuration basée sur l'intensité
  const intensityConfig = {
    low: { duration: 30, movement: 5 },
    medium: { duration: 20, movement: 8 },
    high: { duration: 15, movement: 12 },
  };

  const config = intensityConfig[intensity];

  // Définition des différentes animations
  const getAnimationVariants = (type: number) => {
    const baseMovement = config.movement;

    switch (type) {
      case 0: // Flottement doux
        return {
          animate: {
            x: [
              `0%`,
              `${baseMovement}%`,
              `-${baseMovement}%`,
              `${baseMovement / 2}%`,
              `0%`,
            ],
            y: [
              `0%`,
              `-${baseMovement}%`,
              `${baseMovement}%`,
              `-${baseMovement / 2}%`,
              `0%`,
            ],
            rotate: [0, 10, -5, 8, 0],
            transition: {
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };

      case 1: // Rotation + translation
        return {
          animate: {
            x: [`0%`, `${baseMovement * 1.5}%`, `-${baseMovement}%`, `0%`],
            y: [`0%`, `${baseMovement}%`, `-${baseMovement * 1.2}%`, `0%`],
            rotate: [0, 180, 360],
            transition: {
              duration: config.duration * 0.7,
              repeat: Infinity,
              ease: "linear",
            },
          },
        };

      case 2: // Rebond
        return {
          animate: {
            y: ["0%", `-${baseMovement * 2}%`, "0%"],
            x: ["0%", `${baseMovement}%`, `-${baseMovement}%`, "0%"],
            transition: {
              duration: config.duration * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            },
          },
        };

      case 3: // Spirale
        return {
          animate: {
            x: [
              "0%",
              `${baseMovement}%`,
              `${baseMovement}%`,
              "0%",
              `-${baseMovement}%`,
              `-${baseMovement}%`,
              "0%",
            ],
            y: [
              "0%",
              `${baseMovement}%`,
              `-${baseMovement}%`,
              `-${baseMovement}%`,
              `${baseMovement}%`,
              "0%",
            ],
            rotate: [0, 90, 180, 270, 360],
            transition: {
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };

      default:
        return {
          animate: {
            x: [`0%`, `${baseMovement}%`, `0%`],
            y: [`0%`, `-${baseMovement}%`, `0%`],
            transition: {
              duration: config.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {floatingImages.map((image) => (
        <motion.div
          key={image.id}
          className="absolute opacity-10" // Opacité réduite pour le background
          style={{
            width: `${image.size}px`,
            height: `${image.size}px`,
            left: `${image.initialX}%`,
            top: `${image.initialY}%`,
          }}
          variants={getAnimationVariants(image.animationType || 0)}
          // variants={selectedAnimation}
          initial="initial"
          animate="animate"
          whileHover={{
            opacity: opacity * 2,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={image.src}
            alt={`Background pattern ${image.id}`}
            className="w-full h-full object-contain"
            style={{
              transform: `rotate(${image.rotation}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Effet de gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent" />
    </div>
  );
};
