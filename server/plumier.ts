import Plumier, { route } from "@plumjs/plumier"

class MainController {
    @route.get("/")
    index() {
        return { message: "Hello world!" }
    }
}

new Plumier()
    .set({controller: MainController})
    .initialize()
    .then(x => x.listen(5000))
