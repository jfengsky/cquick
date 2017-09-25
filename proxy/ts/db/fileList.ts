import connectDB, { ObjectID }  from './config'

const colName: string = 'fileList'

interface ITAdd {
  pid: string
}

interface ITModify {
  id: string
  pid: string
}

interface ITDelete {
  id: string
}

export default {
  async save({pid}: ITAdd): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect
    return new Promise((resolve, reject): void => {
      collection.insert({pid, mockId: '', time: new Date().getTime()}, (err: any, docs: any): void =>{
        resolve(docs)
        db.close()
      })
    })
  },
  async search(): Promise<any> {
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
  async modify({id, pid}: ITModify): Promise<any> {
    let connect: any = await connectDB(colName)
    let {
      collection,
      db
    } = connect
    return new Promise((resolve, reject): void => {
      let where = {
        // _id: new ObjectID(id)
        pid: id
      }
      collection.update(where,{$set:{mockId: pid,time: new Date().getTime()}}, (err: any, docs: any) => {
        resolve(docs.result)
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
  }
}