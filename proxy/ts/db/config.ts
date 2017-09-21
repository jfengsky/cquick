import mongodb from 'mongodb'
const MongoClient: any = mongodb.MongoClient
const URL: string = 'mongodb://localhost:27017/myproject'

export default (name: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(URL, async (err: any, db: any) => {
      const collection = await db.collection(name)
      if(err){
        reject(err)
      } else {
        resolve({collection, db})
      }
    })
  })
}