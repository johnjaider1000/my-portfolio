interface ImageDto {
  _id?: string
  src: string
}

interface UserInterface {
  _id: string
  firstName: string
  lastName: string
  email: string
  username: string
  country?: string
  rating?: number
  profileImage?: ImageDto
  coverImage?: ImageDto
  followers?: number
  description?: string
  status?: string
}
