export default interface Service {
    id?: string,
    name: string,
    code?: string,
    price: number,
    stock?: number,
    isPromotional?: boolean,
    description: string,
    image?: string,
    imageFile?: File | null
}