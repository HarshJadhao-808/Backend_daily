import express from "express";
import Razorpay from "razorpay";
import bodyParser from "body-parser";
import crypto from "crypto";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
	key_id: "rzp_test_RpVuafUpmO4Ssh",
	key_secret: "2ZEqZW5sWJa4uws09aOvcWuk",
});

// Create order
app.post("/create-order", async (req, res) => {
	try {
		const { amount, currency, receipt } = req.body;

		const options = {
			amount: amount * 100, // paise
			currency: currency || "INR",
			receipt: receipt || `receipt_${Date.now()}`,
		};

		const order = await razorpay.orders.create(options);
		res.json({ success: true, order });
	} catch (error) {
		console.error("Order creation error:", error);
		res.status(500).json({ success: false, message: "Order creation failed" });
	}
});

// Verify payment
app.post("/verify-payment", (req, res) => {
	const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
		req.body;

	const body = razorpay_order_id + "|" + razorpay_payment_id;

	const expectedSignature = crypto
		.createHmac("sha256", "2ZEqZW5sWJa4uws09aOvcWuk")
		.update(body)
		.digest("hex");

	if (expectedSignature === razorpay_signature) {
		return res.json({
			success: true,
			message: "Payment verified successfully",
		});
	}

	res.status(400).json({
		success: false,
		message: "Invalid payment signature",
	});
});

// Start server
app.listen(5000, () => {
	console.log("Server running on port 5000");
});
