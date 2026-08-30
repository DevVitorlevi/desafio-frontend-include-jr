import { FavoriteGame, FollowedTeam } from "@/types";

import Tlou from "@/assets/games/tlou.png";
import Knight from "@/assets/games/knight.jpg";
import Silksong from "@/assets/games/silksong.jpg";
import Rdr2 from "@/assets/games/rdr2.jpg";
import SpiderMan from "@/assets/games/spider.png";
import Gow from "@/assets/games/gow.jpg";
import Batman from "@/assets/games/batman.jpg";
import BatmanCity from "@/assets/games/batman_city.jpg";
import Pes from "@/assets/games/pes.jpg";

import Flamengo from "@/assets/football/flamengo.png";
import Barcelona from "@/assets/football/barcelona.png";
import ManCity from "@/assets/football/city.png";
import Milan from "@/assets/football/milan.png";
import Psg from "@/assets/football/psg.png";
import Bayern from "@/assets/football/bayern.png";
import Neymar from "@/assets/football/neymar.jpg";

export const favoriteGames: FavoriteGame[] = [
  { id: "tlou", title: "The Last of Us", image: Tlou },
  { id: "knight", title: "Hollow Knight", image: Knight },
  { id: "silksong", title: "Hollow Knight: Silksong", image: Silksong },
  { id: "rdr2", title: "Red Dead Redemption 2", image: Rdr2 },
  { id: "spiderman", title: "Spider-Man", image: SpiderMan },
  { id: "gow", title: "God of War Ragnarok", image: Gow },
  { id: "batman_knight", title: "Batman: Arkham Knight", image: Batman },
  { id: "arkham_city", title: "Batman: Arkham City", image: BatmanCity },
  { id: "pes", title: "Pes 2013", image: Pes },
];

export const followedTeams: FollowedTeam[] = [
  { id: "flamengo", name: "Flamengo", image: Flamengo },
  { id: "barcelona", name: "Barcelona", image: Barcelona },
  { id: "mancity", name: "Manchester City", image: ManCity },
  { id: "milan", name: "Milan", image: Milan },
  { id: "psg", name: "PSG", image: Psg },
  { id: "bayern", name: "Bayern de Munique", image: Bayern },
];

export const favoritePlayer = {
  name: "Neymar",
  image: Neymar,
};

export const musicGenres = ["Indie Rock", "Bedroom Pop"];
