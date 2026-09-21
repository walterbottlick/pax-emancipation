import type { IdeaCardDefinition } from "./ideaCard.types";
import { Sphere } from "../../shared/spheres";
import { Freedom } from "../../shared/freedoms";
import { Ops } from "../../shared/ops";
import { Impacts, BarrierColor } from "../../shared/impacts";
import { mapCardHasPort } from "../MapCard/mapCardDefinitions";

export const IDEA_CARD_DEFINITIONS: IdeaCardDefinition[] = [
    {
        firebrandRating: 1,
        cardName: "Quilombo Dos Palmares",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Plebiscite
    },
    {
        firebrandRating: 2,
        cardName: "Maroons",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 3,
        cardName: "Communist Manifesto",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Plebiscite,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 4,
        cardName: "Slave Work Stoppage",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 5,
        cardName: "Antonine Mystics",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Comet,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 7, port: "portOne" } },
        ops1: Ops.Manumission
    },
    {
        firebrandRating: 6,
        cardName: "Tacky's War",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission
    },
    {
        firebrandRating: 7,
        cardName: "Anti-West Donghak Democracy",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 5, port: "portOne" } },
        ops1: Ops.Plebiscite
    },
    {
        firebrandRating: 8,
        cardName: "Haitian Revolt",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 1, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Plebiscite,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 9,
        cardName: "Sepoy Mutiny",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Comet,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 9, port: "portOne" } },
        ops1: Ops.Manumission,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 10,
        cardName: "Freedom, Equality and Brotherhood",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 11,
        cardName: "American Anti-Slavery Society",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit
    },
    {
        firebrandRating: 12,
        cardName: "The Consent of the Governed",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Plebiscite,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 13,
        cardName: "Bleeding Kansas",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission
    },
    {
        firebrandRating: 14,
        cardName: "Late Slave Rebellions",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 15,
        cardName: "Mamluk Slave Revolt",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 8, port: "portOne" } },
        ops1: Ops.Maritime,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 16,
        cardName: "Rebel Mysticism",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Manumission,
        ops2: Ops.Plebiscite
    },
    {
        firebrandRating: 17,
        cardName: "Uncle Tom's Cabin",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit
    },
    {
        firebrandRating: 18,
        cardName: "Sabinada Land Redistribution",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Plebiscite,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 19,
        cardName: "Saljugye Society",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Feather,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Plebiscite
    },
    {
        firebrandRating: 20,
        cardName: "Rights of Man",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Suffrage
    },
    {
        firebrandRating: 21,
        cardName: "Civil Disobedience",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Literacy
    },
    {
        firebrandRating: 22,
        cardName: "Underground Railroad",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary,
        ops1: Ops.Maritime
    },
    {
        firebrandRating: 23,
        cardName: "The Dungan Race Revolt",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Comet,
        freedom2: Freedom.Comet,
        impact1: Impacts.Revolutionary
    },
    {
        firebrandRating: 24,
        cardName: "African Company of Merchants",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Maritime,
        ops2: Ops.Lawsuit
    },
    {
        firebrandRating: 25,
        cardName: "Decembrist Union of Prosperity",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Maritime,
        ops2: Ops.Suffrage,
        ops3: Ops.Plebiscite
    },
    {
        firebrandRating: 26,
        cardName: "Jesuit Reductions",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Comet,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 6, port: "portOne" } },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy
    },
    {
        firebrandRating: 27,
        cardName: "100 Days Reform",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 28,
        cardName: "Chinese Protector",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: Impacts.Syndication,
        ops1: Ops.Maritime,
        ops2: Ops.Manumission,
        ops3: Ops.Literacy,
        ops4: Ops.Westernize
    },
    {
        firebrandRating: 29,
        cardName: "Gwanseo Peasant War",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 5, port: "portOne" } },
        ops1: Ops.Plebiscite
    },
    {
        firebrandRating: 30,
        cardName: "Ethics",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 31,
        cardName: "The Federation Plot",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Literacy,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 32,
        cardName: "Gunboat Diplomacy",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 5, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 33,
        cardName: "Crimean War Intervention",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Maritime,
        ops2: Ops.Lawsuit,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 34,
        cardName: "Separation of Church and State",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 35,
        cardName: "Physiocrat Economics",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth,
        ops1: Ops.Suffrage,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 36,
        cardName: "Fascism",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Feather
    },
    {
        firebrandRating: 37,
        cardName: "Freedom of Speech",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Suffrage,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 38,
        cardName: "Condorism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit
    },
    {
        firebrandRating: 39,
        cardName: "Young Turks",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Plebiscite,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 40,
        cardName: "Clapham Saints",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Lawsuit,
        ops4: Ops.Westernize
    },
    {
        firebrandRating: 41,
        cardName: "Manumission Journalism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy,
        ops3: Ops.Plebiscite,
        ops4: Ops.Lawsuit
    },
    {
        firebrandRating: 42,
        cardName: "Society for the Abolition of the Slave Trade",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Lawsuit,
        ops4: Ops.Westernize
    },
    {
        firebrandRating: 43,
        cardName: "Reflections on Black People",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Syndication,
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 44,
        cardName: "Barbary Wars",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 3, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 45,
        cardName: "French Abolitionist Journalism",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 46,
        cardName: "Life, Liberty, and the Pursuit of Happiness",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Suffrage,
        ops2: Ops.Lawsuit,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 47,
        cardName: "Public Party of Patriots",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Lawsuit,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 48,
        cardName: "Grass Roots Party",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 49,
        cardName: "Independence Club",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 50,
        cardName: "Baha'i Freemasonry",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Literacy
    },
    {
        firebrandRating: 51,
        cardName: "Quakers",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Lawsuit
    },
    {
        firebrandRating: 52,
        cardName: "British & Foreign Anti-Slavery Society",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Manumission,
        ops3: Ops.Literacy,
        ops4: Ops.Plebiscite
    },
    {
        firebrandRating: 53,
        cardName: "Romantic Manumission",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 7, port: "portOne" } },
        ops1: Ops.Manumission
    },
    {
        firebrandRating: 54,
        cardName: "Great Awakening",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: Impacts.Syndication,
        ops1: Ops.Literacy,
        ops2: Ops.Manumission,
        ops3: Ops.Plebiscite
    },
    {
        firebrandRating: 55,
        cardName: "Colonial Altruism",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 8, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 56,
        cardName: "Free Economic Society",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth,
        ops1: Ops.Manumission,
        ops2: Ops.Maritime,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 58,
        cardName: "Anti-Federal Monopolies",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Lawsuit,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 59,
        cardName: "Origin of the Species",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Comet,
        impact1: Impacts.Syndication
    },
    {
        firebrandRating: 60,
        cardName: "White Rajahs",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 10, port: "portOne" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 61,
        cardName: "Laissez Faire",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth,
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 62,
        cardName: "Marketing",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Lock,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Manumission
    },
    {
        firebrandRating: 63,
        cardName: "Cruel and Unusual Punishment",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Lawsuit,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 64,
        cardName: "Idea of Progress",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 65,
        cardName: "Trial by Jury",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Suffrage,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 66,
        cardName: "Natural Theology",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: Impacts.Syndication,
        ops1: Ops.Literacy
    },
    {
        firebrandRating: 67,
        cardName: "Bengali Renaissance",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 9, port: "portTwo" } },
        ops1: Ops.Suffrage,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 68,
        cardName: "Liberalism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 69,
        cardName: "Civil Society",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 70,
        cardName: "Opium Wars",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 4, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 71,
        cardName: "Baptist Missionary Society",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit
    },
    {
        firebrandRating: 72,
        cardName: "Habeas Corpus",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 6, port: "portOne" } },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy,
        ops3: Ops.Maritime,
        ops4: Ops.Lawsuit
    },
    {
        firebrandRating: 73,
        cardName: "Separation of Powers",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth,
        ops1: Ops.Lawsuit,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 74,
        cardName: "Nahda Parliamentarianism",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Literacy,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 75,
        cardName: "Tanzimat Westernization",
        sphere: Sphere.East,
        culturalDiffusion: true,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.Post, targetPort: { cardNumber: 3, port: "portTwo" } },
        ops1: Ops.Maritime,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 76,
        cardName: "Kakure Kirishitan",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: Impacts.Ship,
        impact2: { impact: Impacts.Post, targetPort: { cardNumber: 5, port: "portTwo" } },
        ops1: Ops.Literacy,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 77,
        cardName: "Zemstvo Self-Governance",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Lawsuit,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 78,
        cardName: "Labor Theory of Value",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth,
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 79,
        cardName: "Young Ottomans Secret Society",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Literacy,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 80,
        cardName: "Republicanism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy,
        ops3: Ops.Plebiscite,
        ops4: Ops.Lawsuit
    },
    {
        firebrandRating: 81,
        cardName: "Liberty Party",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Maritime,
        ops2: Ops.Lawsuit,
        ops3: Ops.Manumission
    },
    {
        firebrandRating: 82,
        cardName: "Aborigines' Protection Expeditions",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 83,
        cardName: "Emancipation Edicts",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Manumission,
        ops2: Ops.Literacy,
        ops3: Ops.Westernize
    },
    {
        firebrandRating: 84,
        cardName: "Rationalism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: Impacts.Syndication
    },
    {
        firebrandRating: 85,
        cardName: "Unalienable Rights",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Lawsuit,
        ops2: Ops.Westernize
    },
    {
        firebrandRating: 86,
        cardName: "Positivism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Comet,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Both },
        ops1: Ops.Westernize,
        ops2: Ops.Suffrage
    },
    {
        firebrandRating: 87,
        cardName: "Algebra of Thought",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: Impacts.Syndication
    },
    {
        firebrandRating: 88,
        cardName: "Elected Representatives",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Plebiscite,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 89,
        cardName: "Utilitarianism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: Impacts.Wealth,
        ops1: Ops.Plebiscite,
        ops2: Ops.Westernize,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 90,
        cardName: "Principia",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Comet,
        impact1: Impacts.Syndication
    },
    {
        firebrandRating: 91,
        cardName: "The Invisible Hand",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 92,
        cardName: "Encyclopédistes",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White },
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 93,
        cardName: "Behaviorism",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.White }
    },
    {
        firebrandRating: 94,
        cardName: "Racial Equality",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather,
        impact1: { impact: Impacts.ClaimBarrier, barrierColor: BarrierColor.Red },
        ops1: Ops.Literacy,
        ops2: Ops.Lawsuit,
        ops3: Ops.Suffrage
    },
    {
        firebrandRating: 95,
        cardName: "Self-Strengthening Movement",
        sphere: Sphere.East,
        culturalDiffusion: false,
        freedom1: Freedom.Feather,
        freedom2: Freedom.Lock,
        impact1: Impacts.Syndication,
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 96,
        cardName: "Skepticism",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather
    },
    {
        firebrandRating: 97,
        cardName: "Say's Law",
        sphere: Sphere.West,
        culturalDiffusion: false,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: Impacts.Wealth
    },
    {
        firebrandRating: 98,
        cardName: "Social Contract",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Candle,
        freedom2: Freedom.Candle,
        impact1: Impacts.Syndication,
        ops1: Ops.Westernize
    },
    {
        firebrandRating: 99,
        cardName: "Faith and Duty",
        sphere: Sphere.West,
        culturalDiffusion: true,
        freedom1: Freedom.Lock,
        freedom2: Freedom.Feather
    },
];


// Validate that all Post impacts target a valid port on a valid map card
// Can potentially be removed once the game is fully implemented and all cards are known to be valid, but a nice safety check to have
function validateIdeaCardDefinitions(definitions: IdeaCardDefinition[]): void {
    for (const def of definitions) {
        for (const impact of [def.impact1, def.impact2]) {
            if (impact !== undefined && typeof impact === "object" && impact.impact === Impacts.Post && !mapCardHasPort(impact.targetPort)) {
                throw new Error(
                    `Idea card "${def.cardName}" has a Post impact targeting card #${impact.targetPort.cardNumber} ${impact.targetPort.port}, which does not exist.`
                );
            }
        }
    }
}

validateIdeaCardDefinitions(IDEA_CARD_DEFINITIONS);