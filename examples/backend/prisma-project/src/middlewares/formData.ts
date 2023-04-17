import busboy from 'busboy'
import { v2 as cloudinary } from 'cloudinary'
import { Request, Response, NextFunction } from 'express'

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const formData = (req: Request, res: Response, next: NextFunction) => {
  let uploadingFile = false
  let uploadingCount = 0

  const done = () => {
    if(uploadingFile) return
    if(uploadingCount > 0) return

    next()
  }

  const bb = busboy({ headers: req.headers })
  req.body = {}
    /* req.body = {
    username: 'Jhon Doe',
    file_0: 'https://res.cloudinary.com/make-it-real-sj/image/upload/v1681741556/top27-preset/ikx5ygofwyol8sptfwjb.jp',
    file_1: 'https://res.cloudinary.com/make-it-real-sj/image/upload/v1681741556/top27-preset/ikx5ygofwyol8sptfwjb.jp',
  } */

  //Capturar las partes que no son un archivo
  bb.on('field', (key, val) => {
    req.body[key]= val
  })

  //capturar las partes que son un archivo
  bb.on('file', (key, stream) => {
    uploadingFile = true
    uploadingCount++
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: 'top27-preset' },
      (err, res) => {
        if(err) throw new Error('Something error wrong !')

        console.log('response',res);
        req.body[key]= res?.secure_url
        uploadingFile= false
        uploadingCount--
        done()
    })

      stream.on('data', (data) => {
        cloud.write(data)
      })

      stream.on('end', () => {
        cloud.end()
      })
    
  })

  bb.on('finish', () => {
    done()
  })

  req.pipe(bb)
}