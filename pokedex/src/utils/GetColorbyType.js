import { POKEMON_TYPE_COLORS } from "./constants";

const GetColors = (types) => POKEMON_TYPE_COLORS[types.toLowerCase()]
export default GetColors