export class Logic {
  public static async calculateDiscountInPercent(
    price: number,
    discount: number
  ): Promise<number> {
    return price * (discount / 100);
  }
}