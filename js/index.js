var b = document.body;
var c = document.getElementsByTagName("canvas")[0];
var a = c.getContext("2d");

// 定义常量
const M = Math;
const Q = M.random;
const J = [];
const U = 16;
const T = M.sin;
const E = M.sqrt;
const BW = 446;
const BH = 446;
// 定义变量
let O = 0;
let k = 0;
let V = "rgba(";
let x;
let y;
let z;
let j;
let i;

let I;
let B;
let R;
let H;
let L;
let P;
let A;
let D;

while (k < 200) {
	x = z = j = i = 1;
	M[k] = k ? c.cloneNode(0) : c;
	M[k].width = k ? 32 : BW;
	M[k].height = k ? 32 : BH;
	var ctx = M[k].getContext("2d");
	if (k > 10 || !k) {
		// k大于10 和 k等于0
		// CanvasRenderingContext2D.font 是 Canvas 2D API 描述绘制文字时，当前字体样式的属性。 使用和 CSS font 规范相同的字符串值。
		// 必须包含字体样式和字体大小
		// Impact 字体样式
		ctx.font = "60px Impact";
		// i 1,2,3,4,5,6
		do {
			I = i * U; // 16i    0 16 32 48 64 80 96
			// CanvasRenderingContext2D.fillStyle 是Canvas 2D API 使用内部方式描述颜色和样式的属性。默认值是 #000 （黑色）。
			// k = 0 #cca 绘制文字时的颜色
			// k = 13 rgba(205,205,215,.15)
			// 其他的k  rgba(147,0,0,.5) rgba(163,144, 16,.5) rgba(179, 0, 32, .5)rgba(195, 176,48,.5)  树上的礼物
			// rgba(211,0, 64,.5) rgba(227, 208, 80,.5) rgba(243,0,96,.5)
			ctx.fillStyle = k ? (k == 13 ? V + "205,205,215,.15)" : V + (147 + I) + "," + (k % 2 ? 128 + I : 0) + "," + I + ",.5)") : "#cca";
			// CanvasRenderingContext2D.beginPath() 是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法。 当你想创建一个新的路径时，调用此方法。
			ctx.beginPath();
			// CanvasRenderingContext2D.arc() 是 Canvas 2D API 绘制圆弧路径的方法。
			// 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
			/**
			 * 圆弧中心（圆心）的 x 轴坐标。 U - i / 3
			 * 圆弧中心（圆心）的 y 轴坐标。24 - i / 2
			 * 圆弧的半径 k == 13 ? 4 - (i++) / 2 : 8 - i++
			 * 圆弧的起始点， x轴方向开始计算，单位以弧度表示 0
			 * 圆弧的终点， 单位以弧度表示。M.PI * 2
			 * anticlockwise 可选 可选的Boolean值 ，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
			 */
			ctx.arc(U - i / 3, 24 - i / 2, k == 13 ? 4 - i++ / 2 : 8 - i++, 0, M.PI * 2, 1);
			// CanvasRenderingContext2D.fill() 是 Canvas 2D API 根据当前的填充样式，填充当前或已存在的路径的方法。采取非零环绕或者奇偶环绕规则。
			ctx.fill();
		} while (i < 7);
	} else {
		// 0~10之间 画树
		do {
			// sin(i) [-1 1]
			x = T(i);
			// [-1, 1)
			y = Q() * 2 - 1;
			// [0, 2]
			D = x * x + y * y;
			B = E(D - x / 0.9 - 1.5 * y + 1);
			L = k / 9 + 0.8;
			R = (67 * (B + 1) * L) >> 1;
			if (D < 1) {
				ctx.beginPath();
				// CanvasRenderingContext2D.strokeStyle 是 Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 #000 (black)。
				ctx.strokeStyle = V + R + "," + ((R + B * L) >> 0) + ",40,.1)";
				// CanvasRenderingContext2D.moveTo() 是 Canvas 2D API 将一个新的子路径的起始点移动到(x，y)坐标的方法。
				ctx.moveTo(U + x * 8, U + y * 8);
				// CanvasRenderingContext2D.lineTo() 是 Canvas 2D API 使用直线连接子路径的终点到x，y坐标的方法（并不会真正地绘制）。
				ctx.lineTo(U + x * U, U + y * U);
				// CanvasRenderingContext2D.stroke() 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
				ctx.stroke();
			}
		} while (i++ < BW);
	}
	// k +根号k * 25
	y = H = k + E(k++) * 25;
	R = Q() * BW;
	do {
		P = 3;
		J[O++] = [(x += T(R) * P + Q() * 6 - 3), (y += Q() * U - 8), (z += T(R - 11) * P + Q() * 6 - 3), ((j / H) * 20 + ((j += U) > H && Q() > 0.8 ? Q((P = 9)) * 4 : 0)) >> 1];
	} while (j < H);
}

setInterval(function G(m, l) {
	A = T(D - 11);
	if (l) {
		return (m[2] - l[2]) * A + (l[0] - m[0]) * T(D);
	}
	// CanvasRenderingContext2D.clearRect()是Canvas 2D API的方法，这个方法通过把像素设置为透明以达到擦除一个矩形区域的目的。
	a.clearRect(0, 0, BW, BW);
	J.sort(G);
	for (i = 0; (L = J[i++]); a.drawImage(M[L[3] + 1], (207 + L[0] * A + L[2] * T(D)) >> 0, L[1] >> 1)) {
		if (i == 2e3) {
			// CanvasRenderingContext2D.fillText() 是 Canvas 2D API 在 (x, y)位置填充文本的方法。如果选项的第四个参数提供了最大宽度，文本会进行缩放以适应最大宽度。
			a.fillText("し☆ve❤源源", U, 407);
		}
		if (!(i % 7)) {
			// Canvas 2D API 中的 CanvasRenderingContext2D.drawImage() 方法提供了多种方式在Canvas上绘制图像。
			a.drawImage(M[13], (157 * (i * i) + T(D * 5 + i * i) * 5) % BW >> 0, (113 * i + (D * i) / 60) % (290 + i / 99) >> 0);
		}
	}
	D += 0.02;
}, 1);
