import Bug from "../assets/types/bug.svg";
import Dark from "../assets/types/dark.svg";
import Dragon from "../assets/types/dragon.svg";
import Electric from "../assets/types/electric.svg";
import Fairy from "../assets/types/fairy.svg";
import Fighting from "../assets/types/fighting.svg";
import Fire from "../assets/types/fire.svg";
import Flying from "../assets/types/flying.svg";
import Ghost from "../assets/types/ghost.svg";
import Grass from "../assets/types/grass.svg";
import Ground from "../assets/types/ground.svg";
import Ice from "../assets/types/ice.svg";
import Normal from "../assets/types/normal.svg";
import Poison from "../assets/types/poison.svg";
import Psychic from "../assets/types/psychic.svg";
import Rock from "../assets/types/rock.svg";
import Steel from "../assets/types/steel.svg";
import Water from "../assets/types/water.svg";

export const dark = () => ({
    colors: {
        background: "#1A1A1A",
        formBackside: "#171717",
        primary: "#f5f5f5",
        border: "#535353",
        containerHighlight: "#1F1F1F",
        containerHighlightHover: "#2B2B2B",
        formWaiting: "#8F8F8F",
        insetGlow: "rgba(255, 255, 255, 0.2)",
        favorite: "#C22E28",
        errorBox: "#f8d7da",
        errorText: "#721c24",
        types: {
            normal: { bg: "#A8A77A", color: "#1A1A1A", icon: Normal },
            fire: { bg: "#EE8130", color: "#1A1A1A", icon: Fire },
            water: { bg: "#6390F0", color: "#1A1A1A", icon: Water },
            electric: { bg: "#F7D02C", color: "#1A1A1A", icon: Electric },
            grass: { bg: "#7AC74C", color: "#1A1A1A", icon: Grass },
            ice: { bg: "#96D9D6", color: "#1A1A1A", icon: Ice },
            fighting: { bg: "#C22E28", color: "#F5F5F5", icon: Fighting },
            poison: { bg: "#A33EA1", color: "#F5F5F5", icon: Poison },
            ground: { bg: "#E2BF65", color: "#1A1A1A", icon: Ground },
            flying: { bg: "#A98FF3", color: "#1A1A1A", icon: Flying },
            psychic: { bg: "#F95587", color: "#1A1A1A", icon: Psychic },
            bug: { bg: "#A6B91A", color: "#1A1A1A", icon: Bug },
            rock: { bg: "#B6A136", color: "#1A1A1A", icon: Rock },
            ghost: { bg: "#735797", color: "#F5F5F5", icon: Ghost },
            dragon: { bg: "#6F35FC", color: "#F5F5F5", icon: Dragon },
            dark: { bg: "#705746", color: "#F5F5F5", icon: Dark },
            steel: { bg: "#B7B7CE", color: "#1A1A1A", icon: Steel },
            fairy: { bg: "#D685AD", color: "#1A1A1A", icon: Fairy },
        },
    }
})