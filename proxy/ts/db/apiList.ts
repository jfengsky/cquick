import connectDB  from './config'

const colName: string = 'apiList'

interface ITSave {
  name: string
  desc: string
}

export default {
  async search(id?: string): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect

    let where = {}
    return new Promise((resolve, reject) =>{
      collection.find(where).toArray((err:any, result: any) => {
        resolve(result)
        db.close()
      })
    })
    

  },
  async save({name, desc}: ITSave): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect
    return collection.insert({name, desc, time: new Date().getTime()}, (err: any, docs: any) =>{
      db.close()
      return docs
    })
  }
}