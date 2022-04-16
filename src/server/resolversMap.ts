import { TodoResolver } from "../server/schemas/todo/todo.resolver";
import { UserResolver } from "../server/schemas/user/user.resolver";
import { merge } from "lodash";

export const resolverMap = merge({}, UserResolver, TodoResolver);
