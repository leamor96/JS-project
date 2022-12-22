export class Color {
    // props:
    r;
    g;
    b;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    //methods:
    hex() {
        const redHex = this.r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
        const greenHex = this.g.toString(16).padStart(2, "0");
        const blueHex = this.b.toString(16).padStart(2, "0");
        const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
        return hexColor;
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
let c = new Color(244, 2, 0);
c.r;
c.hex();
c.rgb();
export function capValue(value) {
    let r = Math.min(value, 255);
    r = Math.max(r, 0);
    return r;
}
export function capRGB(r, g, b) {
    let red = capValue(r);
    let green = capValue(g);
    let blue = capValue(b);
    return [red, green, blue];
}
