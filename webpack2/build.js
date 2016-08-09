// 解析启动命令参数
const taskName = process.argv[2]
const moduleName = taskName.split(':')
const folderName = moduleName[0]
const mode = moduleName[1]

// 