export interface car{
    image:any,
    model:string,
    brand: string,
    year: number,
    price: number,
    color: string,
    traction: string,
    motor: {
      type: string,
      hp: number,
      turbo: boolean,
      cylinders:number,
      motor_liters: number
    },
    seller_id: number
}