function Rectangle(a = 4, b = 5) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;

    console.log(a, b);
}
Rectangle();