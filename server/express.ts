import Express from "express"

Express()
    .use("/", (req, res) => {
        res.json({ message: "Hello world!" })
    })
    .listen(5000)