export interface car{
    image:string,
    model:string,
    brand: string,
    year: number,
    price: number,
    color: string,
    traction: string,
    motor: {
      type: string,
      hp: string,
      turbo: boolean,
      cylinders:number,
      motor_liters: number
    },
    seller_id: number
}