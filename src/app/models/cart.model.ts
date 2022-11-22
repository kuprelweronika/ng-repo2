export interface CartModel {
  readonly userId: number;
 readonly date: any;
  readonly products: [{
      productId: string
      quantity:number
  }];
}
