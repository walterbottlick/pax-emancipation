import type { BarrierChitDefinition } from "./barrierChit.types";
import { DieColor } from "../../shared/dice";

export const BARRIER_CHIT_DEFINITIONS: BarrierChitDefinition[] = [
    {
        chitName: "Ku Klux Klan",
        chitNumber: 1,
        mapCardNumber: 1,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: "Fugitive Slave Law",
        chitNumber: 2,
        mapCardNumber: 1,
        leaning: "left",
        die1: {
            face: 5,
            color: DieColor.White,
            frustration: true
        }
    },
    {
        chitName: "Jim Crow segregation",
        chitNumber: 3,
        mapCardNumber: 1,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Continental System",
        chitNumber: 1,
        mapCardNumber: 2,
        leaning: "embargo",
        die1: {
            face: 2,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 3,
            color: DieColor.Purple,
            frustration: false
        },
        die3: {
            face: 4,
            color: DieColor.Purple,
            frustration: false
        },
        die4: {
            face: 5,
            color: DieColor.Purple,
            frustration: false
        }
    },
    {
        chitName: "The Terror",
        chitNumber: 2,
        mapCardNumber: 2,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: "Gabelle tax farmers",
        chitNumber: 3,
        mapCardNumber: 2,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Pan-islamism",
        chitNumber: 1,
        mapCardNumber: 3,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: "Devsirme System",
        chitNumber: 2,
        mapCardNumber: 3,
        leaning: "right",
        die1: {
            face: 2,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 3,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Jizya tax",
        chitNumber: 3,
        mapCardNumber: 3,
        leaning: "right",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Timar feudalism",
        chitNumber: 4,
        mapCardNumber: 3,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        }
    },
    {
        chitName: "Dvoryane",
        chitNumber: 5,
        mapCardNumber: 3,
        leaning: "left",
        die1: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Canton state monopoly",
        chitNumber: 1,
        mapCardNumber: 4,
        leaning: "embargo",
        die1: {
            face: 2,
            color: DieColor.Green,
            frustration: false
        },
        die2: {
            face: 3,
            color: DieColor.Purple,
            frustration: false
        },
        die3: {
            face: 4,
            color: DieColor.Purple,
            frustration: false
        },
        die4: {
            face: 5,
            color: DieColor.Purple,
            frustration: false
        }
    },
    {
        chitName: "Boxers",
        chitNumber: 2,
        mapCardNumber: 4,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 2,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Manchu inquisitors",
        chitNumber: 3,
        mapCardNumber: 4,
        leaning: "right",
        die1: {
            face: 3,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 4,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Hereditary serfdom",
        chitNumber: 4,
        mapCardNumber: 4,
        leaning: "left",
        die1: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Likin tax",
        chitNumber: 5,
        mapCardNumber: 4,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Sakoku Seclusion",
        chitNumber: 1,
        mapCardNumber: 5,
        leaning: "embargo",
        die1: {
            face: 2,
            color: DieColor.Green,
            frustration: false
        },
        die2: {
            face: 3,
            color: DieColor.Purple,
            frustration: false
        },
        die3: {
            face: 4,
            color: DieColor.Purple,
            frustration: false
        },
        die4: {
            face: 5,
            color: DieColor.Purple,
            frustration: false
        }
    },
    {
        chitName: "Sonno joi Ronin",
        chitNumber: 2,
        mapCardNumber: 5,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 2,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Sakoku kansei censors",
        chitNumber: 3,
        mapCardNumber: 5,
        leaning: "right",
        die1: {
            face: 3,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 4,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Tokugawa shogunate",
        chitNumber: 4,
        mapCardNumber: 5,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Agriculture stipend",
        chitNumber: 5,
        mapCardNumber: 5,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Candomblé Malès",
        chitNumber: 1,
        mapCardNumber: 6,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: "Bandeirantes",
        chitNumber: 2,
        mapCardNumber: 6,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.White,
            frustration: true
        }
    },
    {
        chitName: "Diezmo tax",
        chitNumber: 3,
        mapCardNumber: 6,
        leaning: "left",
        die1: {
            face: 5,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "Witch Doctors",
        chitNumber: 1,
        mapCardNumber: 7,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Green,
            frustration: true
        }
    },
    {
        chitName: "Asante slavers",
        chitNumber: 2,
        mapCardNumber: 7,
        leaning: "right",
        die1: {
            face: 3,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: "Imbangala slavers",
        chitNumber: 3,
        mapCardNumber: 7,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Ulama",
        chitNumber: 1,
        mapCardNumber: 8,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Green,
            frustration: true
        }
    },
    {
        chitName: "Shakan warlords",
        chitNumber: 2,
        mapCardNumber: 8,
        leaning: "right",
        die1: {
            face: 2,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 3,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Ali corvée serfdom",
        chitNumber: 3,
        mapCardNumber: 8,
        leaning: "left",
        die1: {
            face: 5,
            color: DieColor.White,
            frustration: true
        }
    },
    {
        chitName: "Iltazam tax farms",
        chitNumber: 4,
        mapCardNumber: 8,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "French EIC monopoly",
        chitNumber: 1,
        mapCardNumber: 9,
        leaning: "embargo",
        die1: {
            face: 2,
            color: DieColor.Red,
            frustration: false
        },
        die2: {
            face: 3,
            color: DieColor.Purple,
            frustration: false
        },
        die3: {
            face: 4,
            color: DieColor.Purple,
            frustration: false
        },
        die4: {
            face: 5,
            color: DieColor.Purple,
            frustration: false
        }
    },
    {
        chitName: "Hinduvata",
        chitNumber: 2,
        mapCardNumber: 9,
        leaning: "right",
        die1: {
            face: 1,
            color: DieColor.Red,
            frustration: true
        },
        die2: {
            face: 2,
            color: DieColor.Red,
            frustration: false
        }
    },
    {
        chitName: "Caste system",
        chitNumber: 3,
        mapCardNumber: 9,
        leaning: "right",
        die1: {
            face: 3,
            color: DieColor.Green,
            frustration: true
        }
    },
    {
        chitName: "Zamindar feudalism",
        chitNumber: 4,
        mapCardNumber: 9,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    },
    {
        chitName: "Zamindari tax",
        chitNumber: 5,
        mapCardNumber: 9,
        leaning: "left",
        die1: {
            face: 6,
            color: DieColor.Green,
            frustration: false
        },
        die2: {
            face: 6,
            color: DieColor.Yellow,
            frustration: false
        }
    },
    {
        chitName: "VOC monopoly",
        chitNumber: 1,
        mapCardNumber: 10,
        leaning: "embargo",
        die1: {
            face: 1,
            color: DieColor.Green,
            frustration: true
        },
        die2: {
            face: 2,
            color: DieColor.Purple,
            frustration: false
        },
        die3: {
            face: 3,
            color: DieColor.Purple,
            frustration: false
        }
    },
    {
        chitName: "Padri clerics",
        chitNumber: 2,
        mapCardNumber: 10,
        leaning: "right",
        die1: {
            face: 3,
            color: DieColor.Red,
            frustration: true
        }
    },
    {
        chitName: " Blackbirders",
        chitNumber: 3,
        mapCardNumber: 10,
        leaning: "left",
        die1: {
            face: 4,
            color: DieColor.White,
            frustration: true
        },
        die2: {
            face: 5,
            color: DieColor.White,
            frustration: false
        }
    }
]