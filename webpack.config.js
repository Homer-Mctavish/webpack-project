const path = require("path");
module.exports ={
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                //member css-loader loads first, and must be loaded first
                use: ["style-loader", "css-loader"]

            }
        ]
    }
};
