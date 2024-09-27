
interface ImageProduct {
  _id?: string
  src: string
}

interface ProductInterface {
  _id: string
  name?: string
  description: string
//   images?: Array<ImageProduct>
  price: number
  rating?: number
  marca?: string
  followers?: number
}
