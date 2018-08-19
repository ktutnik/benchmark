import Koa from "koa"
import Router from "koa-router"

const routes = new Router()
    .use("/", (ctx, next) => {
        ctx.body = { message: "Hello world!" }
    })
    
new Koa()
    .use(routes.routes())
    .listen(5000)