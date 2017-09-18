import * as os from 'os'
import * as fs from 'fs'
// import * as readline from 'readline'
import * as path from 'path'

const filePath: string = path.join(__dirname, '../nproxy/index.js')

const disString: string = 'module.exports='

// 读取文件
export const readfile = async () => {

  // const rl = readline.createInterface({
  //   input: fs.createReadStream(filePath)
  // })
  
  // let lines = ''
  // rl.on('line', line => {
  //   lines += line
  // })
  // rl.on('close', ()=> {
  //   let replaceFiles = lines.replace('module.exports=', '')
  //   return {
  //     data: {
  //       info: replaceFiles,
  //       OS: os.platform()
  //     }
  //   }
  // })
  
  let files = await fs.readFileSync( filePath, 'utf-8')
  let replaceFiles = files.replace(disString, '')
  return {
    data: {
      info: replaceFiles,
      OS: os.platform()
    }
  }
}

// 写入文件
export const writefile = async (data: string) => {
  let fileStr = disString + data
  let wirtes = await fs.writeFileSync(filePath, fileStr)
  return {
    data: {}
  }
}

const apiFilePath: string = path.join(__dirname, '../ts/db/api')
export const readApifile = async () => {
  let files = await fs.readFileSync( apiFilePath, 'utf-8')
  return {
    data: {
      list: JSON.parse(files)
    }
  }
}

export const writeApifile = async (data: string) => {
  let wirtes = await fs.writeFileSync(apiFilePath, data)
  return {
    data:{}
  }
}

export const readApiCodefile = async () => {
  return {
    data:{}
  }
}


interface ITfileCode {
  fileName: string
  code: string
}
export const writeApiCodefile = async( data: ITfileCode) => {
  let {
    fileName,
    code
  } = data
  console.log(code)
  let wirtes = await fs.writeFileSync( path.join(__dirname, '../nproxy/files/' + fileName), code)
  return true
}