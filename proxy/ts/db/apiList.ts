import connectDB, { ObjectID }  from './config'

const colName: string = 'apiList'

interface ITSave {
  name: string
  desc: string
}

interface ITDelete {
  id: string
}

interface ITModify {
  id: string
  name: string,
  desc: string
}

// declare const PromiseObject: any

export default {
  async search(id?: string): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect

    let where = {}
    return new Promise((resolve, reject): void =>{
      collection.find(where).toArray((err:any, result: any): void => {
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
    return new Promise((resolve, reject): void => {
      collection.insert({name, desc, time: new Date().getTime()}, (err: any, docs: any): void =>{
        resolve(docs)
        db.close()
      })
    })
  },

  async delete({id}: ITDelete): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect
    return new Promise((resolve, reject): void => {
      let where = {
        _id: new ObjectID(id)
      }
      collection.remove({_id: new ObjectID(id)}, (err: any, result: any) => {
        resolve(result)
        db.close()
      })
    })
  },

  async modify({id, name, desc}: ITModify): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect
    return new Promise((resolve, reject): void => {
      let where = {
        _id: new ObjectID(id)
      }
      collection.update(where,{$set:{name,desc,time: new Date().getTime()}}, (err: any, docs: any) => {
        resolve(docs.result)
        db.close()
      })
    })
  }
}