const Koa = require("koa");


const Router = require("koa-router");
  




const views = require("koa-views");
  



const body = require("koa-body");
  

const app = new Koa();





app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);
  


app.use(
  body({
    multipart: true,
  })
);
  



const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello hei";
});
app.use(router.routes());
  


app.listen(8080, () => {
  console.log("open server localhost:8080");
});
