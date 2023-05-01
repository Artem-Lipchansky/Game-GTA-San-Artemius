
import { cosBetweenPoints, sinBetweenPoints } from "./utilities.js";

export class Projectile{
    constructor(x, y, targetX, targetY, context) {
        this.x = x;
        this.y = y;
        this.context = context;
        this.radius = 3;
        this.color = "#810000";
        this.velocity = {
            x: cosBetweenPoints(targetX, targetY, x, y) * 15,
            x: sinBetweenPoints(targetX, targetY, x, y) * 15,
        }
    }
}