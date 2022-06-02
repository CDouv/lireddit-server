import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  // Initiate ORM
  const orm = await MikroORM.init(microConfig);

  const date: Date = new Date();

  const post = orm.em.create(Post, {
    title: "test",
    createdAt: date,
    updatedAt: date,
  });

  await orm.em.persistAndFlush(post);

  console.log("----------sql2 ----------");

  await orm.em.nativeInsert(Post, {
    title: "test",
    createdAt: date,
    updatedAt: date,
  });
};

main().catch((err) => {
  console.error(err);
});
