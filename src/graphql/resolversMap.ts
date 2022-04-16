import { UserResolver } from "./schema/resolvers";
import { merge } from "lodash";

export const resolverMap = merge(UserResolver);
