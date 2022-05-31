const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/posts/blog")

let postList = []

const getPosts= () => {
    fs.readdir(dirPath, (err, files) => {
        if(err){
            return console.log('failed o list posts of directory' + err)
        }
        files.forEach((file, i)=>{
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}/${file}.md`, "utf8", (err, contents) =>{
                const getMetadataIndices = (acc, element, i) => {
                    if(/^---/.test(element)){
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) =>{
                    if(metadataIndices.length > 0 ){
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) =>{
                    if(metadataIndices.length > 0){
                        lines = lines.slice(metadataIndices[1]+1, lines.length)
                    }
                    return lines.join("\n")
                }

                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                post = {
                    id: 'blog-'+file,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author",
                    date: metadata.date ? metadata.date : "No date",
                    description: metadata.description ? metadata.description : "No description",
                    image: metadata.image ? metadata.image : "No image",
                    content: content ? content : "No content",
                }
                postList.push(post)
                if(i === files.length - 1 ){
                   console.log(postList)
                   const sortedList = postList.sort((a, b) => {
                       return a.date < b.date ? 1 : - 1
                   })
                   fs.writeFileSync("src/data/blog.json", JSON.stringify(sortedList))
                }
                
            })
        })
    })
}

getPosts();